import React, { useState } from "react";
import useConsumer from "../Hooks/useConsumer";
import AddBilling from "./AddBilling";
import BillingDetails from "./BillingDetails";
import BillingModal from "./BillingModal";

const BillingPage = () => {
  const [consumers, setConsumers] = useConsumer();
  const [modal, setModal] = useState(false);

  return (
    <div class="flex flex-col">
      <AddBilling setModal={setModal} />
      {modal && <BillingModal />}
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 mx-10">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Billing ID
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Paid Amount
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {consumers?.map((consumer) => (
                  <BillingDetails
                    key={consumer._id}
                    consumer={consumer}
                    setConsumers={setConsumers}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
