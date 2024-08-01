import { Outlet } from "react-router-dom";
import Navbar from "../../compontents/Navbar";
import Footer from "../../compontents/Footer";

const MainHome = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
