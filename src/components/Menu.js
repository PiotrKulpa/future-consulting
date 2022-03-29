import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import useAirtableData from "../utils/useAirtableData";
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";

function Menu() {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuState((prev) => !prev);
  }, []);

  const windowWidth = useWindowWidth();

  const airtableData = useSelector(
    ({ airtableReducer }) => airtableReducer.Menu
  );
  const isLoading = useSelector(
    ({ airtableReducer }) => airtableReducer.loading
  );
  useAirtableData("Menu", "FETCH_MENU", airtableData);

  const [
    {
      fields: {
        facebookLink = "",
        tweeterLink = "",
        logoSrc: [{ url = "" } = {}] = [],
        maitenance = false,
        password,
      } = {},
    } = {},
  ] = airtableData || [];

  useEffect(() => {
    if (maitenance) {
      const secure = prompt("Wprowadź hasło:");
      if (secure !== password) {
        window.location.replace("http://google.com");
      }
    }
  }, [maitenance, password]);

  return (
    <>
      {isLoading && (
        <div id="loader-wrapper">
          <div id="loader" />
        </div>
      )}
      <header className="header-one">
        <div className="top-header">
          <div className="container clearfix">
            <div className="logo float-left">
              <NavLink to="/">
                <img src={url} alt="logo" />
              </NavLink>
            </div>
            <div className="address-wrapper float-right">
              <ul>
                <li className="quotes">
                  <NavLink to="/kontakt">KONTAKT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="theme-menu-wrapper">
          <div className="container">
            <div className="bg-wrapper clearfix">
              <div className="menu-wrapper float-left">
                <div className="menu-collapser">
                  <div onClick={toggleMenu} className="collapse-button">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </div>
                </div>
                <nav
                  id="mega-menu-holder"
                  className={`clearfix ${windowWidth < 992 ? "collapsed" : ""}`}
                  style={{
                    display: windowWidth > 991 || menuState ? "block" : "none",
                  }}
                >
                  <ul className="clearfix" onClick={toggleMenu}>
                    <li>
                      <NavLink to="/" exact activeClassName="active">
                        O firmie
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio" activeClassName="active">
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/uslugi" activeClassName="active">
                        Usługi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cennik" activeClassName="active">
                        Cennik
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/kontakt" activeClassName="active">
                        Kontakt
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="right-widget float-right">
                <ul>
                  <li className="social-icon">
                    <ul>
                      <li>
                        <a href={facebookLink}>
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href={tweeterLink}>
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;
