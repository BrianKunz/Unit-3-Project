import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <div><h1 className="Logo">Giftify</h1></div>
      <div><h2 className="Moto">Gift Lists Made Easy!</h2></div>
    </div>
  )
}
