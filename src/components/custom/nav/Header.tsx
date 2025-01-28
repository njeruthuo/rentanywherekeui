import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-green-500 py-4 text-white">
      <div className="w-[90%] mx-auto flex place-items-center">
        <div>
          <h4 className="font-bold text-2xl satisfy-regular hover:cursor-pointer">rentanywhere ke</h4>
        </div>

        <Link
          className="ml-auto flex place-items-center gap-2 hover:cursor-pointer hover:bg-green-600 border p-2 rounded-md"
          to={"/sign-up"}
        >
          <img src="/add_25dp.svg" alt="" />
          <span>post ads</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
