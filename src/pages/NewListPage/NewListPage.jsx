import { useState, useEffect, useRef } from "react";
import * as ideasAPI from "../../utilities/ideas-api";
import * as listsAPI from "../../utilities/lists-api";
import styles from "./NewListPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../components/Logo/Logo";
import CreateList from "../../components/CreateList/CreateList";
import CategoryList from "../../components/CategoryList/CategoryList";
import ListDetail from "../../components/ListDetail/ListDetail";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
import Aside from "../../components/Aside";

export default function NewListPage({ user, setUser }) {
  const [listIdeas, setListIdeas] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [done, setDone] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getIdeas() {
      const ideas = await ideasAPI.getAllIdeas();
      categoriesRef.current = ideas.reduce((cats, idea) => {
        const cat = idea.category.title;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setListIdeas(ideas);
      setActiveCat(categoriesRef.current[0]);
    }
    getIdeas();
    async function getDone() {
      const done = await listsAPI.getLists();
      setDone(done);
    }
    getDone();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToList(ideaId) {
    const updatedList = await listsAPI.addIdeaToList(ideaId);
    setDone(updatedList);
  }
  //used to delete
  async function handleChangeQty(ideaId, newQty) {
    const updatedDone = await listsAPI.updateList(ideaId, newQty);
    setDone(updatedDone);
  }

  async function handleCheck() {
    await listsAPI.updateList();
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
        listIdeas={listIdeas.filter((idea) => idea.category.name === activeCat)}
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