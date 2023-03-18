import styles from "./CreateListItem.module.scss";

export default function CreateListItem({listItem, handleAddToList}) {
    return (
        <div className={styles.CreateListItem}>
            <div className={style.title}>{listItem.title}</div>
            <div className={style.description}>{listItem.description}</div>
            <div className={style.photo}>{listItem.photo}</div>
            <div className= {style.add}>
                <button
                className="btn-sm"
                onClick={() => handleAddToList(menuItem._id)}>
                    Add to list
                </button>
            </div>
        </div>
    );
}