import { useEffect, useState } from "react";
import { ConnectWallet } from "../../connectButton/connectButton";
import classNames from "classnames";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/TaskReducer";
// import { Zoom } from "@mui/material";
// import { Modal } from "@mui/material";

export const Auth = () => {
  const [activeTab, setActiveTab]: any = useState(0);
  const { isConnected } = useAccount();
  //   const [modalState, setModalState]: any = useState(false);
  const [inputValue, setInputValue]: any = useState("");
  //   const user: any = useSelector((x: any) => x.TaskReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (activeTab === 1) {
      dispatch(setUser(inputValue));
    }
  }, [isConnected]);

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-center items-center ">
          <img className="w-[68px] h-[68px]" src="./logo.png" alt="duck" />
          <div className="text-3xl text-white pl-3">Duck Rush</div>
        </div>
        <div className="flex flex-row mt-16 border border-[#FED527] rounded-lg">
          <div
            className={classNames(
              "px-14 md:px-28 py-3 rounded-lg text-white hover:cursor-pointer",
              { "bg-cs": activeTab === 0 }
            )}
            onClick={() => {
              if (!isConnected) setActiveTab(0);
            }}
          >
            SignIn
          </div>
          <div
            className={classNames(
              "px-14 md:px-28 py-3 rounded-lg text-white hover:cursor-pointer",
              { "bg-cs": activeTab === 1 }
            )}
            onClick={() => {
              if (!isConnected) setActiveTab(1);
            }}
          >
            SignUp
          </div>
        </div>
        {activeTab === 1 ? (
          <>
            <div className="flex flex-row px-5 mt-16">
              <label className="text-white text-base">Name : &nbsp;</label>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                className="flex-1 w-0 bg-transparent border-b-[1px] border-[#FED527] pl-2 ml-2 focus:outline-none text-white"
              ></input>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="mt-16 flex justify-center">
          <ConnectWallet />
        </div>
      </div>
      {/* {isConnected ? (
        <div>
          <Modal
            aria-labelledby="close-modal-title"
            open={modalState}
            onClose={() => setModalState(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zoom in={modalState}>
              <div className="bg-[#323738] px-10 py-6 "></div>
            </Zoom>
          </Modal>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
};
