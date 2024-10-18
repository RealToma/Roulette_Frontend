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
                    className="px-24 bg-cs h-[36px] border rounded-[6px] text-[16px] text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200"
                    onClick={openConnectModal}
                  >
                    SignIn
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="px-[26px] py-3 border  rounded-[6px] text-sm bg-pink-700 text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong Network
                  </button>
                );
              }

              return (
                <div className="flex space-x-2 ">
                  <button
                    className="px-10 py-3 bg-cs border  rounded-[6px] text-sm uppercase text-white hover:cursor-pointer hover:bg-white hover:text-[#363A41] hover:border-black transition duration-200"
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
