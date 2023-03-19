// import AllListItem from "../AllListItem/AllListItem";
// import styles from "./AllList.module.scss";

// export default function AllList({ list, activeList, handleSelectorList }) {
//   const listIdeas = list.map((o) => {
//     <AllListItem
//       name={o}
//       ideas={o}
//       isSelected={o === activeList}
//       handleSelectorList={handleSelectorList}
//       key={o._id}
//     />;
//   });
//   return (
//     <main className={styles.AllList}>
//       {listIdeas.length ? (
//         listIdeas
//       ) : (
//         <span className={styles.noList}>No List's</span>
//       )}
//     </main>
//   );
// }

import React from "react";
import AllListItems from "../AllListItem/AllListItem";

export default function AllList({ lists }) {
  return (
    <main>
      <h1>All Lists</h1>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <h2>{list.name}</h2>
          </li>
        ))}
      </ul>
      <AllListItems />
    </main>
  );
}
