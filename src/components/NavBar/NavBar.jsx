import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/lists">List History</Link>
      &nbsp; | &nbsp;
      <Link to="/lists/new">New List</Link>
    </nav>
  );
}