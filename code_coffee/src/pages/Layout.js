import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li id="Home-Link">
          <Link to="/">Home</Link>
        </li>
        <li id="Blog-Link">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li id="Contact-Link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
};

export default Layout;