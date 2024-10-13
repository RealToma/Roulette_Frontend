import { History } from "./history";
import { Header } from "./header";
import { useAccount } from "wagmi";
import { Modal } from "@mui/material";
import { Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/TaskReducer";

function App() {
  const { isConnected } = useAccount();
  const [modalState, setModalState]: any = useState(false);
  const [inputValue, setInputValue]: any = useState("");
  const user: any = useSelector((x: any) => x.TaskReducer.user);
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(setUser(inputValue));
    setModalState(false);
  };

  useEffect(() => {
    if (isConnected === true && modalState !== true && user === undefined) {
      setModalState(isConnected);
    }
  }, [isConnected]);
  return (
    <>
      <Header />
      <div className="px-6 md:px-36">
        <History />
      </div>
      {isConnected ? (
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
              <div className="bg-[#323738] px-10 py-6 ">
                <div>
                  <label className="text-white text-sm">Username : </label>
                  <input
                    className="px-2 py-2 bg-gray-400 text-sm focus:outline-none"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    type="text"
                  />
                </div>
                <div className=" flex justify-center items-center mt-2">
                  <div
                    className="px-8 py-1 bg-cs border border-white rounded-md hover:cursor-pointer"
                    onClick={handle}
                  >
                    SignIn
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
