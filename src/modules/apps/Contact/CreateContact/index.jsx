import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import AddContactForm from './AddContactForm';
import AppDialog from '@crema/components/AppDialog';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import { useContactActionsContext } from '../../context/ContactContextProvider';
import { getDateObject, getFormattedDate } from '@crema/helpers/DateHelper';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  contact: yup
    .string()
    .required(<IntlMessages id='validation.phoneNumberRequired' />),
});

const CreateContact = (props) => {
  const {
    isAddContact,
    handleAddContactClose,
    selectContact,
    onUpdateContact,
  } = props;
  const infoViewActionsContext = useInfoViewActionsContext();
  const { reCallAPI } = useContactActionsContext();

  const [userImage, setUserImage] = useState(
    selectContact && selectContact.image
      ? selectContact.image
      : '/assets/images/placeholder.jpg',
  );
  useEffect(() => {
    setUserImage(
      selectContact && selectContact.image
        ? selectContact.image
        : '/assets/images/placeholder.jpg',
    );
  }, [selectContact]);

  return (
    <AppDialog
      sxStyle={{
        '& .MuiDialog-paperWidthSm': {
          maxWidth: 900,
          height: 600,
        },
      }}
      maxScrollHeight={600}
      open={isAddContact}
      onClose={() => handleAddContactClose()}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          name: selectContact ? selectContact.name : '',
          email: selectContact ? selectContact.email : '',
          contact: selectContact ? selectContact.contact : '',
          birthday:
            selectContact && selectContact.birthday
              ? getDateObject(selectContact.birthday)
              : getDateObject(),
          website:
            selectContact && selectContact.website ? selectContact.website : '',
          company:
            selectContact && selectContact.company ? selectContact.company : '',
          address:
            selectContact && selectContact.address ? selectContact.address : '',
          facebookId:
            selectContact && selectContact.facebookId
              ? selectContact.facebookId
              : '',
          twitterId:
            selectContact && selectContact.twitterId
              ? selectContact.twitterId
              : '',
          notes:
            selectContact && selectContact.notes ? selectContact.notes : '',
          label:
            selectContact && selectContact.label ? selectContact.label : '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectContact) {
            const newContact = {
              ...data,
              id: selectContact.id,
              isStarred: selectContact.isStarred,
              isFrequent: selectContact.isFrequent,
              image: userImage,
              birthday: getFormattedDate(data.birthday),
            };
            putDataApi('/api/contactApp/contact/', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact updated successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
            onUpdateContact(newContact);
          } else {
            const newContact = {
              ...data,
              id: generateRandomUniqueNumber(),
              isStarred: false,
              isFrequent: Math.random() > 0.5,
              image: userImage,
              birthday: getFormattedDate(data.birthday),
            };
            postDataApi('/api/contactApp/compose', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact created successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          handleAddContactClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <AddContactForm
            setUserImage={setUserImage}
            userImage={userImage}
            values={values}
            setFieldValue={setFieldValue}
            handleAddContactClose={handleAddContactClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default CreateContact;

CreateContact.defaultProps = {
  selectContact: null,
};

CreateContact.propTypes = {
  isAddContact: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  selectContact: PropTypes.object,
  onUpdateContact: PropTypes.func,
};
