import React, { useEffect } from 'react';
import { useGetDataApi } from 'src/hooks/APIHooks';
import AppLoader from 'src/components/AppLoader';
import AppAnimate from 'src/components/AppAnimate';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from 'src/helpers/ApiHelper';
import AddEditProduct from '../AddEditProduct';
import type { ProductDataType } from 'src/types/models/ecommerce/EcommerceApp';

const ProductEditPage = () => {
  const { id } = useParams();
  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
    useGetDataApi<ProductDataType | undefined>(
      '/api/ecommerce/get',
      undefined,
      {},
      false,
    );

  useEffect(() => {
    setQueryParams({ id: id });
  }, [id]);

  return loading || isEmptyObject(currentProduct) ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AddEditProduct selectedProd={currentProduct} />
    </AppAnimate>
  );
};
export default ProductEditPage;
