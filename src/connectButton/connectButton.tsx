import { ConnectButton } from "@rainbow-me/rainbowkit";
export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
                color: "white",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="px-[26px] bg-cs h-[36px] border rounded-[6px] text-[16px] text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200"
                    onClick={openConnectModal}
                  >
                    SignIn
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="px-[26px]  h-[36px] border border-white rounded-[6px] text-[16px] uppercase bg-pink-700 text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200"
                    onClick={openChainModal}
                    type="button"
                  >
                    WRONG NETWORK
                  </button>
                );
              }

              return (
                <div className="flex space-x-2 ">
                  {chain.hasIcon && (
                    <div className="flex items-center space-x-2 px-3 py-1 border border-white rounded-[6px] text-[16px] uppercase text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200">
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                          className="w-auto h-auto"
                        />
                      )}
                      <div>{chain.name}</div>
                    </div>
                  )}

                  <button
                    className="px-3 py-1 border border-white rounded-[6px] text-[16px] uppercase text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200"
                    onClick={openAccountModal}
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
