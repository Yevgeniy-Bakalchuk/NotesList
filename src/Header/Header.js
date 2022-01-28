import React from "react";
import classes from "./header.module.scss";

function Header() {
  return (
    <div className={classes.header_container}>
      <h2 className={classes.header_title}>Notes for today</h2>
    </div>
  );
}

export default Header;