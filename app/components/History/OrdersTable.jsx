import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrdersTable = () => {
  let orders = [];
  const orderData = useSelector((state) => state.orders.data);
  if (orderData) orders = orderData;

  return (
    <div className="my-4">
      <div className="shadow res-table overflow-x-auto border-b border-gray-200 sm:rounded-lg">
        <table className=" overflow-x-scroll ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Outlet
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Payment Method
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Channel
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Date &amp; Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders &&
              orders.map((order) => (
                <tr key={order.orderId}>
                  <td className="px-5 py-4 text-primary whitespace-nowrap">
                    {order.orderId}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.customer.username}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.customer.phoneNumber}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.outlet.outletName}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.paymentMethod}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.orderType}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.channel}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {order.totalPrice}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.orderStatus !== 0
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.orderStatus !== 0 ? "Completed" : "Cancelled"}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
