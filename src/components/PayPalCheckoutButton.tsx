/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PayPalCheckoutButton({
  product,
}: {
  product: { description: string; price: number };
}) {
  const [paidFor, setPaidFor] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleApprove = (orderID:string) => {
    //fetch
    console.log(typeof orderID);
    console.log(orderID);

    //success
    setPaidFor(true);
    //reject
    // console.log("error message");
  };

  if (paidFor) {
    console.log("done");
    alert("thank");
  }
  if (err) {
    console.log(err);
  }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      onClick={(_data, actions) => {
        const hasBought = false;
        if (hasBought) {
          setErr("already bought");
          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      createOrder={(_data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price.toString(),
                currency_code:'USD'
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        console.log("🚀 ~ onApprove={ ~ order:", order);
        handleApprove(data.orderID);
      }}
      onCancel={() => {
        //cancelmessage or redirect
      }}
      onError={(err:any) => {
        setErr(err);
        console.log("🚀 ~ onApprove={ ~ err:", err);
      }}
    />
  );
}
