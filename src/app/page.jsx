import Link from "next/link";
import styles from "./homepage.module.css";
import Navbar from "@/component/menu/Menu";
import Footer from "@/component/footer/Footer";
import Featured from "@/component/featured/Featured";
import CategoryList from "@/component/categoryList/CategoryList";
import CardList from "@/component/cardList/CardList";
import Menu from "@/component/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}
