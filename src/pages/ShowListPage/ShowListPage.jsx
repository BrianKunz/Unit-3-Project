// import styles from "./ShowListPage.module.scss";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import * as ordersAPI from "../../utilities/lists-api";
// // import Logo from "../../components/Logo/Logo";
// // import UserLogOut from "../../components/UserLogOut/UserLogOut";
// // import OrderList from "../../components/AllList/AllList";
// // import OrderDetail from "../../components/ListDetail/ListDetail";
// import Aside from "../../components/Aside";

// export default function ShowListPage({ user, setUser }) {
//   /*--- State --- */
//   const [gifts, setGifts] = useState([]);
//   const [activeGifts, setActiveGifts] = useState(null);

//   /*--- Side Effects --- */
//   useEffect(function () {
//     // Load previous orders (paid)
//     async function fetchShowList() {
//       const gifts = await giftssAPI.getGiftsHistory();
//       setGifts(gifts);
//       // If no orders, activeOrder will be set to null below
//       setActiveGifts(gifts[0] || null);
//     }
//     fetchShowList();
//   }, []);

//   /*--- Event Handlers --- */
//   function handleSelectGift(gift) {
//     setActiveGift(gift);
// }

/*--- Rendered UI --- */

import React from "react";
import AllList from "../../components/AllList/AllList";
import { useList } from "../../utilities/useList";

export default function ShowListPage() {
  const { lists } = useList();
  return (
    <div>
      <div className="">ShowListPage</div>
      <AllList lists={lists} />
    </div>
  );
}
