import axios from "axios";
import React from "react";
import Table from "./components/Table";
import { useRouter } from "next/router";

export async function getStaticProps() {
  let res = await axios.get("https://assign-backend.onrender.com/api/query1");
  const query1 = res.data;
  res = await axios.get("https://assign-backend.onrender.com/api/query2");
  const query2 = res.data;
  res = await axios.get("https://assign-backend.onrender.com/api/query3");
  const query3 = res.data;
  res = await axios.get("https://assign-backend.onrender.com/api/query4");
  const query4 = res.data;
  res = await axios.get("https://assign-backend.onrender.com/api/query5");
  const query5 = res.data;
  res = await axios.get("https://assign-backend.onrender.com/api/getAllUsers");
  const users = res.data;
  return {
    props: { query1, query2, query3, query4, query5, users },
  };
}

const Home = ({ query1, query2, query3, query4, query5, users }) => {
  if (!query5) {
    return (
      <div className="h-screen w-screen text-center">Fetching Data...</div>
    );
  }
  return (
    <main className="w-screen min-h-screen overflow-y-scroll p-8 gap-4 flex flex-col bg-stone-100 items-center">
      <div className="p-4 bg-white rounded-mg shadow-md text-xl font-semibold">
        Node.js & Next.js ASSIGNMENT
      </div>

      {/* Table For Query1 */}
      <section className="w-full max-h-96 flex flex-col gap-4 overflow-hidden">
        <p>
          1. Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </p>
        <Table query={query1} />
      </section>

      {/* Table For Query2 */}
      <section className="w-full max-h-96 flex flex-col gap-4 overflow-hidden">
        <p>2. Male Users which have phone price greater than 10,000.</p>
        <Table query={query2} />
      </section>

      {/* Table For Query3 */}
      <section className="w-full max-h-96 flex flex-col gap-4 overflow-hidden">
        <p>
          3. Users whose last name starts with “M” and has a quote character
          length greater than 15 and email includes his/her last name.
        </p>
        <Table query={query3} />
      </section>

      {/* Table For Query4 */}
      <section className="w-full max-h-96 flex flex-col gap-4 overflow-hidden">
        <p>
          4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
          whose email does not include any digit.
        </p>
        <Table query={query4} />
      </section>

      {/* Table For Query5 */}
      <section className="w-full h-full flex flex-col gap-4 overflow-hidden">
        <p>
          5. Show the data of top 10 cities which have the highest number of
          users and their average income.
        </p>
        <div className="w-full h-full overflow-y-auto">
          <table className="w-full text-xs bg-white">
            <thead className="rounded-t-lg bg-stone-200 sticky top-0 shadow-md">
              <tr className="text-right">
                <th title="Ranking" className="p-3 text-left">
                  #
                </th>
                <th title="Ranking" className="p-3 text-left">
                  City
                </th>
                <th title="Ranking" className="p-3 text-left">
                  Total Users
                </th>
                <th title="Ranking" className="p-3 text-left">
                  Average Income
                </th>
              </tr>
            </thead>
            <tbody>
              {query5?.map((city, index) => {
                return (
                  <tr className="text-left border-b border-opacity-20 border-gray-700">
                    <td className="px-3 py-2">
                      <span>{index + 1}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{city._id}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{city.count}</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>{city.avgIncome.$numberDecimal}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Home;
