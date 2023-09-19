import Image from "next/image";
import React from "react";

const CardComponent = ({ cardNumber, owner, month, year, cvv }) => {

  return (
    <div className="bg-blue-900/40 rounded-lg w-[350px] h-[200px] relative overflow-hidden">
      <div className="h-[35px] w-[55px] absolute bg-gray-500/70 top-12 left-8 rounded-md z-10" />
      <div className="h-[35px] w-[55px] absolute top-4 right-8  z-10 overflow-hidden">
        <div className="flex items-center justify-center h-full w-full">
          <Image
            src={"/Visa_Inc._logo.svg.webp"}
            alt="visa"
            className=""
            width={55}
            height={35}
          />
        </div>
      </div>
      <div className="bg-green-500/60 w-full h-28 mx-auto absolute z-0 bottom-0 items-center">
        <div className="flex flex-col gap-y-4 mt-3 text-white justify-center items-center">
          <h2 className="text-[26px]">{cardNumber}</h2>
          <div className="flex justify-between w-full px-6">
            <label>
              <p className="text-[8px]">Card Holder</p>
              <p className="text-[14px]">{owner}</p>
            </label>
            <div className="flex gap-2">
              <label>
                <p className="text-[8px]">Expires</p>
                <p className="text-[14px]">
                  {month}/{year}
                </p>
              </label>
              <label>
                <p className="text-[8px]">CVV</p>
                <p className="text-[14px]">{cvv}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
