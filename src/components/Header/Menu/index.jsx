import { Link } from "react-router-dom";
import cls from "classnames";
import MenuItem from "../MenuItem/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { actLogout } from "../../../store/auth/action";
function Menu({ currentUser }) {
  const theloais = useSelector((state) => state.POST.articleTheLoais);

  // let user;
  // currentUser.forEach(element => {
  //   user = element.username
  // });

  const dispatch = useDispatch();
  const [show, setShow] = useState(
    cls("navigation-uer_sub", {
      open: false,
      close: true,
    })
  );
  function handleClickShow() {
    const x = document.getElementById("show");
    if (x.classList.contains("close")) {
      setShow(
        cls("navigation-uer_sub", {
          open: true,
          close: false,
        })
      );
    }
    if (x.classList.contains("open")) {
      setShow(
        cls("navigation-uer_sub", {
          open: false,
          close: true,
        })
      );
    }
  }

  function handleLogout(evt) {
    evt.preventDefault();
    dispatch(actLogout());
  }

  return (
    <nav id="main-nav-wrap">
      <ul className="main-navigation main-navigation-right sf-menu">
        <li className="current">
          <Link to="/">Home</Link>
        </li>
        {theloais.map((theloai) => (
          <MenuItem key={theloai._id} theloai={theloai} />
        ))}
      </ul>
      <ul className="main-navigation main-navigation-left sf-menu">
        {currentUser ? (
          <>
            <li className="navigation-uer" onClick={handleClickShow}>
              <p className="navbar-user">User</p>
              <div className={show} id="show">
                <li>
                  <Link to="/doashboard" className="navbar-logout">
                    Datboads
                  </Link>
                </li>
                <li className="element_end" onClick={handleLogout}>
                  <Link to="/" className="navbar-logout">
                    Log out
                  </Link>
                </li>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="navbar-login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="navbar-register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
