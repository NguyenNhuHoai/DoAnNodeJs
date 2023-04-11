import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function IndexPage() {
  return (
    <>
      <div className="wrapper-content">
        <Header />
        <Outlet />
        <div className="spacing" />
        <Footer />
      </div>
    </>
  );
}

export default IndexPage;
