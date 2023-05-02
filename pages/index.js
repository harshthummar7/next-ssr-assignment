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
  let apiUrl;
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:3000";
  } else {
    apiUrl = `https://${process.env.VERCEL_URL}`;
  }

  const res = await fetch(`${apiUrl}/api/hello`);
  const { listData } = await res.json();

  return {
    props: {
      listData,
    },
  };
}
