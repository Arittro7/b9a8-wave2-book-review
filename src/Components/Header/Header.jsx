import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              background: isActive ? "salmon" : "",
              color: isActive ? "white" : "",
              fontWeight: isActive ? "bold" : "",
              border: isActive ? "2px solid tomato" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listedbook"}
          style={({ isActive }) => {
            return {
              background: isActive ? "salmon" : "",
              color: isActive ? "white" : "",
              fontWeight: isActive ? "bold" : "",
              border: isActive ? "2px solid tomato" : "",
            };
          }}
        >
          Listed Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pageRead"}
          style={({ isActive }) => {
            return {
              background: isActive ? "salmon" : "",
              color: isActive ? "white" : "",
              fontWeight: isActive ? "bold" : "",
              border: isActive ? "2px solid tomato" : "",
            };
          }}
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            {links}
          </ul>
        </div>
        <p className="sm:text-xl font-bold lg:text-3xl">
          Book<span className="text-orange-500">Parliament</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-2 menu-horizontal px-1 text-lg">{links}</ul>
      </div>
      <div className="navbar-end gap-1">
        <a className="btn bg-[#23BE0A] text-white">Login</a>
        <a className="btn bg-purple-200 text-black">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
