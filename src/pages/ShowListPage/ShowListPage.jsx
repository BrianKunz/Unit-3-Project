import styles from "./OrderHistoryPage.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ordersAPI from "../../utilities/lists-api";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderList from "../../components/AllList/AllList";
import OrderDetail from "../../components/ListDetail/ListDetail";
import Aside from "../../components/Aside";

export default function ShowListPage({ user, setUser }) {
  /*--- State --- */
  const [gifts, setGifts] = useState([]);
  const [activeGifts, setActiveGifts] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchShowList() {
      const gifts = await giftssAPI.getGiftsHistory();
      setGifts(gifts);
      // If no orders, activeOrder will be set to null below
      setActiveGifts(gifts[0] || null);
    }
    fetchShowList();
  }, []);


  /*--- Event Handlers --- */
  function handleSelectGift(gift) {
    setActiveGift(gift);
  }

  /*--- Rendered UI --- */
  return (
    <main className={styles.ShowListPage}>
      <Aside user={user} setUser={setUser} styles={styles.aside}>
        <Link to="/listss/new" className="button btn-sm">
          New Lists
        </Link>
      </Aside>
      <AllList
        title={gifts}
        description={description}
        photo={photo}
        listNumber={listNumber}
        activeList={activeList}
        handleSelectorList={handleSelectorList}
      />
      <ListDetail gift={activeGift} />
    </main>
  );
}
