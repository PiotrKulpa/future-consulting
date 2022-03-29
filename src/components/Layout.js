import Menu from "./Menu";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="main-page-wrapper">
      <Menu />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
