import { useEffect, useState } from "react";
import classNames from "classnames";

export const History = () => {
  const [itemCnt, setItemCnt] = useState(6);

  const arr: any = {
    0: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    1: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfdfdfdfdfdfdssdsdsdssdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    2: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    3: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    4: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    5: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    6: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    7: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
    8: {
      betid: "89929309423",
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
      username: "Toma",
      payout: "1.5",
      profit: 101023,
    },
  };
  const [limitedItems, setLimitedItems]: any = useState(
    Object.values(arr).slice(0, itemCnt)
  );

  useEffect(() => {
    setLimitedItems(Object.values(arr).slice(0, itemCnt));
  }, [itemCnt]);
  const active: string = " bg-[#3A4142] font-bold";
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="">
      <div className="mb-1.5 h-8 flex items-center ">
        <div className="flex items-center text-base font-extrabold text-primary text-white">
          Bet History
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          <div className="flex justify-between items-center rounded-base bg-[#323738] text-white">
            <div
              className={classNames(
                " py-3 px-7 text-sm rounded-base font-bold hover:cursor-pointer hover:bg-[#3A4142]",
                { " bg-[#3A4142]": !activeTab }
              )}
              onClick={() => setActiveTab(0)}
            >
              All bets
            </div>
            <div
              className={classNames(
                "py-3 px-6 text-sm hover:cursor-pointer rounded-base hover:bg-[#3A4142]",
                { "bg-[#3A4142]": activeTab }
              )}
              onClick={() => setActiveTab(1)}
            >
              High Roller
            </div>
          </div>
        </div>
        <div className="mt-4 w-full ">
          <div className="bg-[#323738]">
            <table className="table-fixed px-3 py-3 w-full text-md  hidden md:block">
              <thead className="text-gray-400">
                <tr>
                  <th className="w-[20%] truncate">Bet ID</th>
                  <th className="w-[20%] truncate">Wallet Address</th>
                  <th className="w-[20%] truncate">User</th>
                  <th className="w-[20%] truncate">Payout</th>
                  <th className="w-[20%] truncate">Profit</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {limitedItems.map((_: any, i: any) => (
                  <tr key={i}>
                    <td className="truncate text-center py-1">
                      {arr[i].betid}
                    </td>
                    <td className="truncate text-center py-1">
                      {arr[i].address}
                    </td>
                    <td className="truncate text-center py-1">
                      {arr[i].username}
                    </td>
                    <td className="truncate text-center py-1">
                      {arr[i].payout}x
                    </td>
                    <td className="truncate text-center py-1">
                      ${arr[i].profit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div></div>
          </div>
          <div className="overflow-hidden md:hidden">
            {limitedItems.map((_: any, i: any) => (
              <div
                className="p-3 bg-[#3A4142] mt-2 rounded-md text-white text-xs"
                key={i}
              >
                <div className="flex justify-between gap-2">
                  <div>Bet ID </div>
                  <div>{arr[i].betid}</div>
                </div>
                <div className="flex justify-between gap-2">
                  <div>Wallet </div>
                  <div>{arr[i].address}</div>
                </div>
                <div className="flex justify-between gap-2">
                  <div>User </div>
                  <div>{arr[i].username}</div>
                </div>
                <div className="flex justify-between gap-2">
                  <div>Payout </div>
                  <div>{arr[i].payout}</div>
                </div>
                <div className="flex justify-between gap-2">
                  <div>Profit </div>
                  <div>{arr[i].profit}</div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center">
              <div
                className="text-md  bg-[#3A4142] rounded-md p-2 mt-2 hover:cursor-pointer hover:text-white"
                onClick={() => setItemCnt(arr.length)}
              >
                View more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
