import React, { useState } from 'react';
import AppList from 'src/components/AppList';
import AddressCell from './AddressCell';
import { AddressesType } from 'src/types/models/ecommerce/EcommerceApp';
import { addresses } from 'src/mockapi/fakedb';

const DeliveryAddress = () => {
  const [selectedAddress, setSelectAddress] = useState<AddressesType>(
    addresses[1],
  );
  return (
    <AppList
      delay={200}
      data={addresses}
      renderRow={(address) => (
        <AddressCell
          key={address.id}
          address={address}
          selectedAddress={selectedAddress}
          setSelectAddress={setSelectAddress}
        />
      )}
    />
  );
};

export default DeliveryAddress;
