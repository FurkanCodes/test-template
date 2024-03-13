import { Box } from "@mui/material";
import AppAnimate from "src/components/AppAnimate";
import { useGetDataApi } from "src/hooks/APIHooks";
import OrderPlaced from "./OrderPlaced";
import AddressInfo from "./AddressInfo";
import ItemsList from "./ItemsList";

import { addresses } from "src/mockapi/fakedb/ecommerce/ecommerceData";
import AppLoader from "src/components/AppLoader";
import { CartItemsType } from "src/types/models/ecommerce/EcommerceApp";

const Confirmation = () => {
  const [{ apiData: cartItems, loading }] = useGetDataApi<CartItemsType[]>(
    "/api/cart/get",
    [],
  );
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <Box>
            <OrderPlaced cartItems={cartItems} />
            <AddressInfo address={addresses[0]} />
            <ItemsList cartItems={cartItems} />
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Confirmation;
