import React from "react";
import "../Style/style.css";

import Logout from "../Logout";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1 className="text-center header">Employee Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
