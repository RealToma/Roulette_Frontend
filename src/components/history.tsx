export const History = () => {
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
      address: "0xcseokfdfi4fn3nf3onfsdfn89",
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
  };
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
            <div className="bg-[#3A4142] py-3 px-6 text-sm rounded-base font-bold">
              All bets
            </div>
            <div className="py-3 px-6 text-sm">High Roller</div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <table className="table-fixed w-full text-md bg-[#323738] hidden md:block">
            <thead className="text-gray-400">
              <th className="w-1/5 max-w-5 truncate">Bet ID</th>
              <th className="w-1/5 max-w-5 truncate">Wallet Address</th>
              <th className="w-1/5 max-w-5 truncate">User</th>
              <th className="w-1/5 max-w-5 truncate">Payout</th>
              <th className="w-1/5 max-w-5 truncate">Profit</th>
            </thead>
            <tbody className="text-white">
              {Object.keys(arr).map((i) => (
                <tr key={i}>
                  <td className="truncate text-center">{arr[i].betid}</td>
                  <td className="truncate text-center">{arr[i].address}</td>
                  <td className="truncate text-center">{arr[i].username}</td>
                  <td className="truncate text-center">{arr[i].payout}</td>
                  <td className="truncate text-center">{arr[i].profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="overflow-hidden md:hidden">
            {Object.keys(arr).map((i) => (
              <div className="p-3 bg-[#3A4142] mt-2 rounded-md text-white text-xs">
                <div className="flex gap-2">
                  <div>Bet ID </div>
                  <div>{arr[i].betid}</div>
                </div>
                <div className="flex gap-2">
                  <div>Wallet </div>
                  <div>{arr[i].address}</div>
                </div>
                <div className="flex gap-2">
                  <div>User </div>
                  <div>{arr[i].username}</div>
                </div>
                <div className="flex gap-2">
                  <div>Payout </div>
                  <div>{arr[i].payout}</div>
                </div>
                <div className="flex gap-2">
                  <div>Profit </div>
                  <div>{arr[i].profit}</div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center hover:cursor-pointer">
              <div className="text-md  bg-[#3A4142] rounded-md p-2 mt-2">
                View more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
