// import React, { useEffect, useState } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

const BillingDetails = ({ consumer }) => {
  const { _id, Name, Email, Phone, PaidAmount } = consumer;

  // const [refresh, setRefresh] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/consumer")
  //     .then((res) => res.json())
  //     .then((data) => setConsumers(data));
  // }, [refresh, setConsumers]);

  const handleDeleteConsumer = (_id) => {
    const procced = window.confirm("Are you Sure?");

    if (procced) {
      fetch(`http://localhost:5000/delete-billing/${_id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      toast.success("Delete seccess");
    }
    // setRefresh(_id);
  };

  return (
    <tr class="border-b">
      <td class="text-sm text-gray-900 text-left px-6 font-light  py-4 whitespace-nowrap">
        {_id}
      </td>
      <td class="text-sm text-gray-900 text-left px-6 font-light  py-4 whitespace-nowrap">
        {Name}
      </td>
      <td class="text-sm text-gray-900 text-left px-6 font-light  py-4 whitespace-nowrap">
        {Email}
      </td>
      <td class="text-sm text-gray-900 text-left px-6 font-light  py-4 whitespace-nowrap">
        {Phone}
      </td>
      <td class="text-sm text-gray-900 text-left px-6 font-light  py-4 whitespace-nowrap">
        {PaidAmount}
      </td>
      <td class="text-sm text-gray-900 text-left flax space-x-4 px-6 font-light  py-4 whitespace-nowrap">
        <span>
          <button>
            <PencilAltIcon className="h-5 w-5 text-blue-500" />
          </button>
        </span>
        <span>
          <button onClick={() => handleDeleteConsumer(consumer._id)}>
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
        </span>
      </td>
    </tr>
  );
};

export default BillingDetails;
