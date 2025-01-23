import React from "react";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
type Props = {
  isEmpty: boolean;
};
const Bucket = ({ isEmpty }: Props) => {
  return (
    <div>
      {isEmpty ? (
        <SlBasket size={25} color="white" />
      ) : (
        <SlBasketLoaded size={25} color="white" />
      )}
    </div>
  );
};

export default Bucket;
