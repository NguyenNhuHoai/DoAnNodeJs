import { useSelector } from "react-redux";
import Menu from "./Menu";

function Header() {
  const currentUser = useSelector((state) => state.AUTH.currentUser);
  return (
    <>
      <header className="short-header">
        <div className="gradient-block" />
        <div className="row header-content">
          <Menu currentUser={currentUser} />
          <div className="search-wrap">
            <form role="search" method="get" className="search-form" action="#">
              <label>
                <span className="hide-content">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Type Your Keywords"
                  defaultValue
                  name="s"
                  title="Search for:"
                  autoComplete="off"
                />
              </label>
              <input
                type="submit"
                className="search-submit"
                defaultValue="Search"
              />
            </form>
            {/* <a href="#" id="close-search" className="close-btn">Close</a> */}
          </div>
          <div className="triggers">
            {/* <a className="search-trigger" href="#"><i className="fa fa-search" /></a>
                        <a className="menu-toggle" href="#"><span>Menu</span></a> */}
          </div>
        </div>
      </header>{" "}
    </>
  );
}

export default Header;
