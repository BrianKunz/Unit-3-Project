import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as listsAPI from "../../utilities/lists-api";
import styles from "./NewListPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import CreateList from "../../components/CreateList/CreateList";
import CategoryList from "../../components/CategoryList/CategoryList";
import ListDetail from "../../components/ListDetail/ListDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import Aside from "../../components/Aside";

export default function NewListPage({ user, setUser }) {
  const [listItems, setListItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [done, setDone] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getLists() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = lists.category.title;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setListItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getLists();
    async function getDone() {
      const cart = await ordersAPI.getDone();
      setDone(done);
    }
    getLists();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToList(itemId) {
    const updatedList = await ordersAPI.addItemToDone(itemId);
    setDone(updatedDone);
  }
//used to delete
  async function handleChangeQty(itemId, newQty) {
    const updatedDone = await ordersAPI.setItemQtyInDone(itemId, newQty);
    setDone(updatedDone);
  }

  async function handleCheck() {
    await listsAPI.check();
    navigate("/lists");
  }

  return (
    <main className={styles.NewListPage}>
      <Aside user={user} setUser={setUser}>
        <CategoryList
          categories={categoriesRef.current}
          done={setDone}
          setActiveCat={setActiveCat}
        />
        <Link to="/lists" className="button btn-sm">
          Previous Created Lists
        </Link>
      </Aside>

      <CreateList
        listItems={listItems.filter((item) => item.category.name === activeCat)}
        handleAddToList={handleAddToList}
      />
      <ListDetail
        fullList={done}
        handleChangeQty={handleChangeQty}
        handleCheck={handleCheck}
      />
    </main>
  );
}
