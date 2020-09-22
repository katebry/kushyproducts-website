import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "./Banner";
import Header from "./Header";
import MainContent from "./MainContent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kushy Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* <MainContent
        content={
          "All things Kushy – from bath bombs, body scrubs, lip scrubs, lip balm and essential oil sprays. All our products are vegan and tested on humans."
        }
      /> */}
      <MainContent
        content={
          "If you have any questions for us, about us or our products please don’t hesitate to get in touch with us. You can currently order our products through our Instagram page. Here is where you can reach us:"
        }
        email={"kushyproductsteam@gmail.com"}
        socials={"@Kushy_Products"}
      />
    </div>
  );
}
