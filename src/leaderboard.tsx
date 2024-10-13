import classNames from "classnames";
import { useState } from "react";

export const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="my-5">
      <div className="text-white text-base font-bold">LeaderBoard</div>
      <div className="bg-[#323738] px-10 py-4">
        <div className="px-7 rounded-md border-2 border-dashed flex flex-row justify-center items-center">
          <div className="flex flex-col items-center px-4 pt-4 pb-6">
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
          <div className="flex flex-col items-center px-4 pt-4 pb-6">
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
          <div className="flex flex-col items-center px-4 pt-4 pb-6">
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
      </div>
      <div className="px-4">
        <div className="flex flex-row justify-between items-center gap-2">
          <div
            className={classNames(
              "w-1/2 bg-transparent border border-white text-white text-center text-sm py-1 rounded-base ",
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
              "w-1/2 bg-transparent border border-white  text-white text-center text-sm py-1 rounded-base",
              {
                "bg-[#FFE44D] text-black border-none": activeTab,
              }
            )}
            onClick={() => setActiveTab(1)}
          >
            Whitelisted Address List
          </div>
        </div>
        <div className="p-3 border-2 border-dashed"></div>
      </div>
    </div>
  );
};
