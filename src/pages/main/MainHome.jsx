import { Outlet } from "react-router-dom";
import Navbar from "../../compontents/Navbar";
import Footer from "../../compontents/Footer";

const MainHome = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
