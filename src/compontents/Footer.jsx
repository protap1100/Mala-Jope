import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="https://flowbite.com/"
              className="flex items-center text-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="krishna.jpg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                মালা জপ
              </span>
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Created By &nbsp;
            <Link
              to="https://facebook.com/protap.biswas1100"
              className="hover:underline"
            >
              Protap Biswas
            </Link>
          </span>
          <Link to="https://facebook.com/protap.biswas1100">
            <img className="ml-4 h-4 w-4" src={facebook} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
