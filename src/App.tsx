import { History } from "./history";
import { Header } from "./header";
import { useAccount } from "wagmi";
import { Modal } from "@mui/material";
import { Zoom } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const { isConnected } = useAccount();
  const [modalState, setModalState] = useState(false);
  useEffect(() => {
    if (isConnected === true && modalState !== true) {
      setModalState(isConnected);
    }
  }, [isConnected]);
  return (
    <>
      <Header />
      <div className="px-6">
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
              <div className="p-4 bg-black outline-none rounded-[5px] shadow-lg  tiny:w-[388px] login-modal overflow-x-hidden overflow-y-auto max-h-[90%] text-white">
                Name input modal
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
