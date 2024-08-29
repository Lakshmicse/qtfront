// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div>
//       <h1>Pavan</h1>
//     </div>
//   )
// }

// export default ContactForm
import React, { useState } from 'react';
import { postDataApi } from '../../@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider'



function ContactForm() {
   const infoViewActionsContext = useInfoViewActionsContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryZipCode: '',
    tireSearch: '',
    tireQuantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await postDataApi('/contact-us', infoViewActionsContext, formData);
      
      setSuccess('Contact us data added successfully!');
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      
    } catch (err) {
      infoViewActionsContext.fetchError(err.message);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  
  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: '30px' }}>Send a message</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldContainer}>
          <div style={styles.field}>
            <label style={styles.label} htmlFor="name">Name *</label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label} htmlFor="email">Email *</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={styles.fieldContainer}>
          <div style={styles.field}>
            <label style={styles.label} htmlFor="phone">Phone *</label>
            <input
              style={styles.input}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label} htmlFor="deliveryZipCode">Delivery Zip Code *</label>
            <input
              style={styles.input}
              type="text"
              id="deliveryZipCode"
              name="deliveryZipCode"
              value={formData.deliveryZipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={styles.fieldContainer}>
          <div style={styles.field}>
            <label style={styles.label} htmlFor="tires">Which tires are you searching for?</label>
            <input
              style={styles.input}
              type="text"
              id="tireSearch"
              name="tireSearch"
              value={formData.tireSearch}
              onChange={handleChange}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label} htmlFor="quantity">How many tires would you like?</label>
            <input
              style={styles.input}
              type="number"
              id="tireQuantity"
              name="tireQuantity"
              value={formData.tireQuantity}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="message">Message *</label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button style={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {success && <p style={styles.success}>{success}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '800px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
  },
  field: {
    flex: '1',
    minWidth: 'calc(50% - 20px)',
    boxSizing: 'border-box',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  button: {
    width: '100px',
    backgroundColor: '#F0464D',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    alignSelf: 'center',
    borderRadius: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  success: {
    color: 'green',
    textAlign: 'center',
  },
};

export default ContactForm;
