export const Header = () => {
  return (
    <div className="w-screen bg-[#292D2E] px-6 py-5 flex flex-row justify-between">
      <div className="flex flex-row justify-between items-center">
        <img className="w-9 h-9" src="./logo.png" alt="logo" />
        <div className="text-white font-bold text-base">Duck Rush</div>
      </div>
      <div className="px-4 py-1 bg-cs rounded-base">SignIn</div>
    </div>
  );
};
