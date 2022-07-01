import React from "react";

const AddBilling = ({ setModal }) => {
  return (
    <div className="flex justify-between p-3 my-5 rounded mx-5 bg-slate-500 text-white">
      <div class="flex justify-center space-x-4 item-center text-xl font-bold">
        <h1>Billings</h1>
        <div class=" xl:w-96">
          <input
            type="text"
            class="
        form-control
        block
        w-full
        px-3 py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleText0"
            placeholder="Search Here"
          />
        </div>
      </div>

      <button
        className=" bg-gray-800 p-2 rounded"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
        onClick={() => setModal(true)}
      >
        Add New Bill
      </button>
    </div>
  );
};

export default AddBilling;
