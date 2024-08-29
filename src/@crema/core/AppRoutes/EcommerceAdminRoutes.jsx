import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const ProductListing = React.lazy(() =>
    import('../../../modules/ecommerce/Admin/Listing'),
  );
  const AddProduct = React.lazy(() =>
    import('../../../modules/ecommerce/Admin/AddEditProduct'),
  );
  const EditProduct = React.lazy(() =>
    import('../../../modules/ecommerce/Admin/EditProduct'),
  );

  const ProductView = React.lazy(() =>
  import('../../../modules/samplePages/productView'),
);

  export const ecomadminconfig = [
    {
        permittedRole: RoutePermittedRole.User,
        path: '/ecommerce/product-listing',
        element: <ProductListing />,
      },
      {
        permittedRole: RoutePermittedRole.User,
        path: '/ecommerce/add-products',
        element: <AddProduct />,
      },
      {
        permittedRole: RoutePermittedRole.User,
        path: '/ecommerce/edit-products/:id',
        element: <EditProduct />,
      },
      {
        permittedRole: RoutePermittedRole.User,
        path: '/ecommerce/product-view/:id',
        element: <ProductView />,
      },
  ]