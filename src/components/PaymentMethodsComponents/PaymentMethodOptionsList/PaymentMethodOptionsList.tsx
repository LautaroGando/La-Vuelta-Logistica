import React, { useState } from "react";
import methods, { IMethod } from "../utils/payment-methods";
import PaymentMethodButton from "../PaymentMethodButton/PaymentMethodButton";
import PaymentMethodCard from "./PaymentMethodCard/PaymentMethodCard";

const PaymentMethodOptionsList = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [MethodLabel, setMethodLabel] = useState<string>("");

  const handleSelectMethod = (method: string, label: string) => {
    setSelectedPaymentMethod(method);
    setMethodLabel(label);
  };

  return (
    <div className="flex flex-col gap-[10%] justify-center items-center h-[100%]">
      <div
        className="
          flex flex-col gap-5 justify-center items-center
          sm:grid sm:grid-cols-2 sm:h-[max-content]
          "
      >
        {methods.map((method: IMethod, i) => (
          <PaymentMethodCard
            key={i}
            method={method}
            selectedMethod={selectedPaymentMethod}
            onSelectMethod={handleSelectMethod}
          />
        ))}
      </div>

      {MethodLabel ? (
        <PaymentMethodButton label={MethodLabel} />
      ) : (
        <div className="h-[48px] sm:h-[60px]"></div>
      )}
    </div>
  );
};

export default PaymentMethodOptionsList;
