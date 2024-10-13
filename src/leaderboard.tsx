import classNames from "classnames";
import { useState } from "react";

export const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState(0);
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
      address: "0xcseokfdfi4fn3nf3onfdfn89",
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
  return (
    <div className="my-5">
      <div className="text-white text-base font-bold">LeaderBoard</div>
      <div className="bg-[#323738] px-10 py-4">
        <div className="px-7 rounded-md border-2 border-dashed flex flex-row justify-center items-center">
          <div className="flex flex-col items-center pt-4 pb-6">
            <div className="relative w-14 h-14">
              <img className="w-full h-full" src="./duck2.png" alt="duck2" />
              <img
                className="w-[14px] h-[25px] absolute -bottom-4 left-[50%] translate-x-[-50%]"
                src="./m2.png"
              />
            </div>
            <div className="text-white text-[8px] text-center mt-4">
              Xcvd0847289...432
            </div>
            <div className="text-white text-[8px] text-center mt-1">$5000</div>
          </div>
          <div className="flex flex-col items-center  pt-4 pb-6">
            <div className="relative w-24 h-24">
              <img className="w-full h-full" src="./duck1.png" alt="duck2" />
              <img
                className="w-[24px] h-[34px] absolute -bottom-5 left-[50%] translate-x-[-50%]"
                src="./m1.png"
              />
            </div>
            <div className="text-white text-[8px] text-center mt-4">
              Xcvd0847289...432
            </div>
            <div className="text-white text-[8px] text-center mt-1">$5000</div>
          </div>
          <div className="flex flex-col items-center pt-4 pb-6">
            <div className="relative w-14 h-14">
              <img className="w-full h-full" src="./duck3.png" alt="duck2" />
              <img
                className="w-[14px] h-[25px] absolute -bottom-4 left-[50%] translate-x-[-50%]"
                src="./m3.png"
              />
            </div>
            <div className="text-white text-[8px] text-center mt-4">
              Xcvd0847289...432
            </div>
            <div className="text-white text-[8px] text-center mt-1">$5000</div>
          </div>
        </div>
        <div className="-mx-6">
          <div className="flex flex-row justify-between items-center gap-2 my-2 md:w-1/2 ">
            <div
              className={classNames(
                "w-1/2 bg-transparent border border-white text-white text-center text-sm py-1 rounded-base hover:cursor-pointer",
                {
                  "bg-[#FFE44D] text-black border-none": !activeTab,
                }
              )}
              onClick={() => setActiveTab(0)}
            >
              Profit List
            </div>
            <div
              className={classNames(
                "w-1/2 bg-transparent border border-white  text-white text-center text-sm py-1 rounded-base hover:cursor-pointer",
                {
                  "bg-[#FFE44D] text-black border-none": activeTab,
                }
              )}
              onClick={() => setActiveTab(1)}
            >
              Whitelisted Address List
            </div>
          </div>
          <div className="p-3 border-2 border-dashed w-full">
            <table
              className="table-fixed w-full border-separate border-spacing-0"
              id="table"
            >
              <thead>
                <tr>
                  <th className="w-[25%] text-white text-[0.8rem] font-normal">
                    {" "}
                  </th>
                  <th className="w-[25%] text-white text-[0.8rem] font-normal">
                    Wallet
                  </th>
                  <th className="w-[25%] text-white text-[0.8rem] font-normal">
                    BetId
                  </th>
                  <th className="w-[25%] text-white text-[0.8rem] font-normal">
                    Profit
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "Jua" }}>
                {Object.keys(arr)
                  .filter((_, index) => index < 4 && index > 0)
                  .map((i) => (
                    <tr
                      key={i}
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <td
                        scope="col"
                        className="truncate text-center text-white text-[0.8rem] p-1 border border-gray-600 mt-1  rounded-l-base border-r-0"
                      >
                        <div className="flex items-center">
                          <img
                            className="w-6 h-6"
                            src={"./duck" + i + ".png"}
                            alt="duck"
                          />
                          <div className="truncate text-center ml-2 text-white text-[0.8rem]">
                            Jhon
                          </div>
                        </div>
                      </td>
                      <td
                        scope="col"
                        className=" truncate text-center text-white text-[0.8rem] p-1 border border-gray-600 mt-1 border-x-0"
                      >
                        {arr[i].address}
                      </td>
                      <td
                        scope="col"
                        className=" truncate text-center text-white text-[0.8rem] p-1 border border-gray-600 mt-1  border-x-0"
                      >
                        {arr[i].username}
                      </td>
                      <td
                        scope="col"
                        className=" truncate text-center text-white text-[0.8rem] p-1 border border-gray-600 mt-1 border-l-0 rounded-r-md"
                      >
                        {"$300"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
