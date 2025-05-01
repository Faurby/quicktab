import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="flex-1 flex justify-center items-center p-4">
        {" "}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
