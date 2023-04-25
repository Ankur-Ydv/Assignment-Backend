import React from "react";

const Table = ({ query }) => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <table className="w-full text-xs bg-white">
        <thead className="rounded-t-lg bg-stone-200 sticky top-0 shadow-md">
          <tr className="text-right">
            <th title="Ranking" className="p-3 text-left">
              #
            </th>
            <th title="Name" className="p-3 text-left">
              NAME
            </th>
            <th title="Gender" className="p-3 text-left">
              GENDER
            </th>
            <th title="Email" className="p-3 text-left">
              EMAIL
            </th>
            <th title="Income" className="p-3 text-left">
              INCOME
            </th>
            <th title="Car" className="p-3 text-left">
              CAR
            </th>
            <th title="City" className="p-3 text-left">
              CITY
            </th>
            <th title="Quote" className="p-3 text-left">
              QUOTE
            </th>
            <th title="Price" className="p-3 text-left">
              PHONE PRICE
            </th>
          </tr>
        </thead>
        <tbody>
          {query.map((user, index) => {
            return (
              <tr className="text-left border-b border-opacity-20 border-gray-700">
                <td className="px-3 py-2">
                  <span>{index + 1}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{`${user.first_name} ${user.last_name}`}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.gender}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.email}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.income}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.car}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.city}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.quote}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{user.phone_price}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
