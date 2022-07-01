import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

const BillingDetails = ({ consumer }) => {
  const { _id, Name, Email, Phone, PaidAmount } = consumer;

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
          <button>
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
        </span>
      </td>
    </tr>
  );
};

export default BillingDetails;
