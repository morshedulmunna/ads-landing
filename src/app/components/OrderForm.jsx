"use client";

import React, { useState } from "react";

const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState(60);
  const [selectedGift, setSelectedGift] = useState(null);

  const productPrice = 1270;
  const totalPrice = productPrice + shipping;

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleShippingChange = (cost) => {
    setShipping(cost);
  };

  const handleGiftSelection = (gift) => {
    setSelectedGift(gift);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      quantity,
      shipping,
      selectedGift,
      totalPrice,
    };
    console.log("Order Details: ", orderDetails);
    alert("Order submitted successfully!");
  };

  return (
    <div className="mt-24 w-full bg-gradient-to-b from-blue-100 to-purple-100  p-2 lg:p-8">
      <h3 className="text-center mb-8 mt-2 text-2xl font-bold text-green-500">
        অর্ডার কনর্ফাম করতে নিচের ফর্মটি পূরণ করুন
      </h3>

      <div className="flex w-full flex-col lg:flex-row gap-6 ">
        <div className="w-full lg:w-1/2">
          <p className="py-2 font-bold text-green-500">বিলিং বিবরণ</p>
          <form className="flex flex-col gap-4" action="">
            <input
              className="py-2 w-full px-2 rounded"
              type="text"
              placeholder="আপনার নাম"
            />
            <input
              className="py-2 px-2 rounded"
              type="text"
              placeholder="মোবাইল নাম্বার"
            />
            <input
              className="py-2 px-2 rounded"
              type="text"
              placeholder="পন্য ডেলিভারি ঠিমানা"
            />
          </form>

          <div className="flex mt-6 bg-white p-4 rounded justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-[140px]  h-20 rounded bg-gray-200"></div>
              <p className="font-bold">
                ৪টি প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="border text-xl flex justify-center  items-center  w-16 rounded shadow h-10 mb-0 p-0 bg-white ">
                +
              </button>
              <p className="font-bold">3</p>
              <button className="border  text-xl flex justify-center  items-center w-16 rounded shadow h-10 mb-0 p-0 bg-white ">
                -
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-10">
            <h2 className="font-semibold text-green-500">ডেলিভারি চার্জ </h2>
            <label className="flex items-center">
              <input
                type="radio"
                value="Green Bracelet"
                checked={selectedGift === "Green Bracelet"}
                onChange={() => handleGiftSelection("Green Bracelet")}
                className="mr-2"
              />
              ঢাকার বাহিরে ১০০ টাকা
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Blue Bracelet"
                checked={selectedGift === "Blue Bracelet"}
                onChange={() => handleGiftSelection("Blue Bracelet")}
                className="mr-2"
              />
              ঢাকার ভিতরে ৬০ টাকা
            </label>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-green-500">
              ব্রান্ড নিউ ঘড়ি ফ্রী
            </h2>

            <div>
              <div className="flex mt-6 flex-col lg:flex-row bg-white p-4 rounded justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input id="checkbox" type="checkbox" />
                  <div className="w-[140px]  h-20 rounded bg-gray-200"></div>
                  <p className="font-bold">
                    ৪টি প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি{" "}
                  </p>
                </div>
                <button className="whitespace-nowrap w-full mt-4 lg:mt-0 lg:w-fit bg-green-500 px-4 py-2 rounded text-white font-bold">
                  সিলেক্ট কালার{" "}
                </button>
              </div>
              <div className="flex mt-6 flex-col lg:flex-row bg-white p-4 rounded justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input id="checkbox" type="checkbox" />
                  <div className="w-[140px]  h-20 rounded bg-gray-200"></div>
                  <p className="font-bold">
                    ৪টি প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি{" "}
                  </p>
                </div>
                <button className="whitespace-nowrap w-full mt-4 lg:mt-0 lg:w-fit bg-green-500 px-4 py-2 rounded text-white font-bold">
                  সিলেক্ট কালার{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --> */}
        <div className="w-full mt-6 lg:w-1/2">
          <div className="bg-white p-4 rounded">
            <h4>Order Summary</h4>

            <div className="h-[320px] bg-gray-300/30 mt-4"></div>

            <div className="flex mt-4 justify-between items-center ">
              <p>৪টি প্রিমিয়াম আতর প্যাকেজ</p>
              <p className="text-green-500 font-semibold text-sm">১ পিছ</p>
            </div>
            <p className="font-bold mt-4 text-xl">TK 1,270</p>

            <div>
              <h2 className="text-green-500 font-semibold my-4">
                ব্রান্ড নিউ ঘড়ি ফ্রী
              </h2>

              <div className="flex items-center gap-4">
                <div className="w-[90px] rounded h-[80px] bg-red-100"></div>
                <p>৪টি প্রিমিয়াম আতর ও এর সাথে একটি ব্রান্ড নিউ ঘড়ি (Green) </p>
              </div>

              <div>
                <div className="flex mt-4 text-base font-semibold justify-between w-full">
                  <p>Sub total</p>
                  <p className="font-extrabold">TK 1,270</p>
                </div>
                <div className="flex mt-4 text-base  justify-between w-full">
                  <p>Shipping</p>
                  <p> ঢাকার ভিতর ৬০ টাকা</p>
                </div>
                <div className="flex mt-4 text-lg font-semibold justify-between w-full">
                  <p>Total</p>
                  <p className="font-extrabold">TK 1,270</p>
                </div>
              </div>
              <button className="w-full bg-green-500 py-2 font-semibold mt-4 rounded text-white">
                অর্ডার করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
