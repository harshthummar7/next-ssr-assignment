import Head from "next/head";
import { Inter } from "next/font/google";
import style from "../styles/Index.module.css";
import Contacts from "@/component/Contacts";
import Sidebar from "@/component/Sidebar";

export default function Home({ listData }) {
  return (
    <>
      <div className={style.nav}></div>
      <div className={style.main}>
        <Sidebar></Sidebar>
        <div className={style.content}>
          <Head></Head>
          <Contacts listData={listData}></Contacts>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/api/hello`);
  const { listData } = await res.json();

  return {
    props: {
      listData,
    },
  };
}
