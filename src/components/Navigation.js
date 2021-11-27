import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact="true" to="/" activeclassname="nav-active">
        {" "}
        Acceuil
      </NavLink>
      <NavLink exact="true" to="/contact" activeclassname="nav-active">
        {" "}
        Contactez nous
      </NavLink>
    </div>
  );
};

export default Navigation;
