import { Link } from "react-router-dom";

const Layout = () => {
  return <div>
    <ul>
      <li>
        <Link to="/component">Component</Link>
      </li>
      <li>
        <Link to="/hooks">Hooks</Link>
      </li>
      <li>
        {" "}
        <Link to="/hoc">Hoc</Link>
      </li>
      <li>
        {" "}
        <Link to="/redux">Redux</Link>
      </li>
    </ul>
  </div>;
};

export default Layout;
