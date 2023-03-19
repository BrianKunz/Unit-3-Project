import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Birthdays">Birthdays</Link>
      <Link to="/Weddings">Weddings</Link>
      <Link to="/Anniversary">Anniversary</Link>
      <Link to="/Babyshower">Babyshower</Link>
      <Link to="/Bridalshower">Bridalshower</Link>
      <Link to="/House Warming">House Warming</Link>
      <Link to="/Easter">Easter</Link>
      <Link to="/Christmas">Christmas</Link>
      <Link to="/Father's Day">Father's Day</Link>
      <Link to="/Mother's Day">Mother's Day</Link>
      <Link to="/Other">Other</Link>
    </nav>
  );
}

export default function NavBar() {
  return (
    <nav>
      <Link to="/lists">List History</Link>
      &nbsp; | &nbsp;
      <Link to="/lists/new">New List</Link>
    </nav>
  );
}