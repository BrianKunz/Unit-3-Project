// import styles from "./ListDetail.module.scss";
// import LineItem from "../LineItem/LineItem";

// // Used to display the details of any order, including the cart (unpaid order)
// export default function ListDetail({ fullList, handleChangeQty, handleCheck }) {
//   if (!fullList) return null;

//   const lineItems = fullList.lineItems.map((item) => (
//     <LineItem
//       lineItem={item}
//       isPaid={fullList.isPaid}
//       handleChangeQty={handleChangeQty}
//       key={item._id}
//     />
//   ));

//   return (
//     <div className={styles.ListDetail}>
//       <div className={styles.sectionHeading}>
//         {fullList.isPaid ? (
//           <span>
//             List <span className="smaller">{fullList.fullListId}</span>
//           </span>
//         ) : (
//           <span>New List</span>
//         )}
//         <span>{new Date(fullList.updatedAt).toLocaleDateString()}</span>
//       </div>
//       <div
//         className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}
//       >
//         {lineItems.length ? (
//           <>
//             {lineItems}
//             <section className={styles.total}>
//               {fullList.isPaid ? (
//                 <span className={styles.right}>
//                   Amount of Items&nbsp;&nbsp;
//                 </span>
//               ) : (
//                 <button
//                   className="btn-sm"
//                   onClick={handleCheck}
//                   disabled={!lineItems.length}
//                 >
//                   Confirm
//                 </button>
//               )}
//               <span>{fullList.totalQty}</span>
//               <span className={styles.right}>
//                 ${fullList.fullListTotal.toFixed(2)}
//               </span>
//             </section>
//           </>
//         ) : (
//           <div className={styles.letMake}>Lets make a list!</div>
//         )}
//       </div>
//     </div>
//   );
// }