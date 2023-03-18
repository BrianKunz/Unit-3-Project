import AllListItem from "../AllListItem/AllListItem";
import styles from "./AllList.module.scss";

export default function AllList ({ title ,listNumber,description,photo, activeList, handleSelectorList }) {
  const listItems = listNumber.map((o) => {
    <AllListItem
    title={o}
    description={o}
    photo={o}
    listNumber={o}
    isSelected={o === activeList}
    handleSelectorList={handleSelectorList}
    key={o._id}
    />
  });
  return (
    <main className={styles.AllList}>
      {listNumberItems.length? (
        listNumberItems
      ):(
        <span className = { styles.noList}>No List's</span>
      )}


    </main>
  );
}
