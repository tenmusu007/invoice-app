import React, { useContext, useEffect } from "react";
import { Control, useWatch } from "react-hook-form";
import { Description as DescriptionType } from "types/description";
import TotalContext, { useTotalContext } from "Context/TotalContext";

type Props = {
  control: Control<DescriptionType>;
};

//onChange使ってリアルタイムで監視したい
const TotalAmount = ({ control }: Props) => {
  const totalContext = useContext(useTotalContext);

  const formValues = useWatch({
    name: "description",
    control,
  });

  const subTotal = formValues?.reduce(
    (acc, { unitPrice, quantity }) =>
      acc + Math.floor((unitPrice || 0) * (quantity || 0)),
    0
  );
  const total = formValues?.reduce(
    (acc, { unitPrice, quantity, tax }) =>
      acc + Math.floor((unitPrice || 0) * (quantity || 0) * (1 + tax / 100)),
    0
  );

  useEffect(() => {
    totalContext?.setTotal(total);
    totalContext?.setSubTotal(subTotal);
  }, [subTotal, total, totalContext]);


  return (
    <>
      Sub Total: {totalContext?.subTotal}
      Total:{totalContext?.total}
    </>
  );
};

export default TotalAmount;
