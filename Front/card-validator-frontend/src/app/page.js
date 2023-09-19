"use client";
import CardComponent from "@/components/CardComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [cardNumber, setCardNumber] = useState("**** **** **** ****");
  const [cardOwner, setCardOwner] = useState("John Doe");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YYYY");
  const [cvc, setCvc] = useState("***");
  const [isValid, setIsValid] = useState();
  const [isValidTwo, setIsValidTwo] = useState(2);

  const validateCard = async () => {
    const response = await fetch("http://localhost:8080/cards/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner: cardOwner,
        number: cardNumber,
        month: month,
        year: year,
        cvv: cvc,
      }),
    });

    if (response.status === 201) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (isValid === true) {
      setIsValidTwo(1);
    } else {
      setIsValidTwo(2)
    }
  }, [isValid]);

  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <form class="flex flex-wrap gap-3 w-[50%] p-5">
        <label class="relative w-full flex flex-col">
          <span class="font-bold mb-3">Card number</span>
          <input
            class={`rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300`}
            type="text"
            name="card_number"
            onChange={(e) => {
              if (
                e.target.value.length <= 18 &&
                isNaN(e.target.value) === false
              ) {
                setCardNumber(e.target.value);
              } else {
                setCardNumber("**** **** **** ****");
              }
            }}
            placeholder="0000 0000 0000"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </label>

        <label class="relative w-full flex flex-col">
          <span class="font-bold mb-3">Owner</span>
          <input
            class="rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
            type="text"
            name="card_owner"
            placeholder="john doe"
            onChange={(e) => {
              if (e.target.value.length <= 26) {
                setCardOwner(e.target.value);
              } else {
                setCardOwner("John Doe");
              }
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </label>

        <div className="flex items-center gap-2">
          <label class="relative flex-1 flex flex-col gap-2 ">
            <span class="font-bold mb-3">Month</span>
            <input
              class="rounded-md text-black  w-[100%] peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              name="expire_date_month"
              onChange={(e) => {
                if (
                  e.target.value.length <= 2 &&
                  e.target.value >= 1 &&
                  e.target.value <= 12 &&
                  isNaN(e.target.value) === false
                ) {
                  setMonth(e.target.value);
                } else {
                  setMonth("MM");
                }
              }}
              placeholder="MM"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </label>
          <label class="relative flex-1 flex flex-col gap-2 ">
            <span class="font-bold mb-3">Year</span>
            <input
              class="rounded-md text-black  w-[100%] peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              name="expire_date_year"
              onChange={(e) => {
                if (
                  e.target.value.length == 4 &&
                  isNaN(e.target.value) === false
                ) {
                  setYear(e.target.value);
                } else {
                  setYear("YYYY");
                }
              }}
              placeholder="YY"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </label>
        </div>

        <label class="relative flex-1 flex flex-col ">
          <span class="font-bold flex items-center gap-3 mb-3">
            CVC/CVV
            <span class="relative group">
              <span class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                {" "}
                Hey ceci est une infobulle !
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </span>
          <input
            class="rounded-md peer text-black  pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
            type="text"
            name="card_cvc"
            placeholder="&bull;&bull;&bull;"
            onChange={(e) => {
              if (
                e.target.value.length <= 4 &&
                isNaN(e.target.value) === false
              ) {
                setCvc(e.target.value);
              } else {
                setCvc("***");
              }
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </label>
      </form>
      <div className="flex flex-col gap-10">
        {isValid === undefined ? (
          <></>
        ) : (
          <>
            {isValidTwo === 1 ? (
              <div className="flex justify-center items-center font-4xl text-green-500 font-bold">
                <h2>Valid card</h2>
              </div>
            ) : (
              <div className="flex justify-center items-center font-4xl text-red-500 font-bold">
                <h2>Invalid card</h2>
              </div>
            )}
          </>
        )}
        <CardComponent
          cardNumber={cardNumber}
          owner={cardOwner}
          month={month}
          year={year}
          cvv={cvc}
        />
        <button
          onClick={validateCard}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </main>
  );
}
