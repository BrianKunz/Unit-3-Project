import styles from "./CreateList.module.scss";
import CreateListItem from "../CreateListItem/CreateListItem";


export default function CreateList({listItems, handleAddToList}) {
  const Items = listItems.map((item) => {
    <CreateListItem
    key={item._id}
    handleAddToList={handleAddToList}
    menuItem={item}
    />
  });
  return <main className={styles.listItems}>{items}</main>;
}
  
