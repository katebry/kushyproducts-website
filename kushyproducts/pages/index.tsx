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
        content1={
          "If you have any questions about us or our products please don’t hesitate to get in touch."
        }
        content2={"You can currently order our products through our Instagram page."}
        email={"kushyproductsteam@gmail.com"}
        socials={"@Kushy_Products"}
      />
    </div>
  );
}
