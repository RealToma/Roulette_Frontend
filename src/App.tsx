import { Header } from "./components/header";
import { History } from "./components/history";
// import { Playground } from "./components/playGround";
import { CustomTable } from "./components/CustomTable";
function App() {
  return (
    <>
      <Header />
      <div className=" py-6 px-6">
        {/* <Playground /> */}
        <CustomTable />
        <History />
      </div>
    </>
  );
}

export default App;
