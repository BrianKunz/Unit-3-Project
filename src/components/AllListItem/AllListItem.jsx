import styles from "./AllListItem.module.scss";

export default function AllListItem({
    title,
    description,
    photo,
    listNumber,
    isSelected,
    handleSelectorList,
}) {
    return (
        <div 
        className={`${styles.AllListItem} ${isSelected ? styles.selected : ""}`}
        onClick={() => handleSelectorList(listNumber)}>


            <div>
                <div>

                    Name of the List:<span className="AllTitle">{title.titleId}</span>
                    Description:<span className="description">{description.descriptionId}</span>
                    Photo:<span className="photo">{photo.photoId}</span>

                    List Id: <span className="smaller">{listNumber.listNumberId}</span>
                </div>
                <div className = "smaller">
                    {new Date(listNumber.updatedAt). toLocaleDateString()}
                </div>
            </div>
            <div className="align-rt">
                <div className="smaller">
                    {listNumber.totalQty} Gift{listNumber.totalQty > 1 ? "s" : ""}
                </div>

            </div>
            </div>
    );
}
