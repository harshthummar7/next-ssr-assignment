import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import style from "../styles/Index.module.css";
import Contacts from "@/component/Contacts";
import AddContact from "@/component/AddContact";
import Sidebar from "@/component/Sidebar";
import Card from "@/component/Card";
import Heading from "@/component/Heading";
import localforage from "localforage";

const inter = Inter({ subsets: ["latin"] });
localforage.config({
  name: "my-app-db",
  storeName: "contacts",
  driver: localforage.LOCALSTORAGE,
  version: 1,
});
export default function Home({ ListData }) {
  return (
    <>
      <div className={style.nav}></div>
      <div className={style.main}>
        <Sidebar></Sidebar>
        <div className={style.content}>
          <Head></Head>
          <Contacts ListData={ListData}></Contacts>
        </div>
      </div>
    </>
  );
}
// https://next-assignment-two.vercel.app

export async function getServerSideProps() {
  // Load the data from LocalForage on the server
  const ListData = await localforage.getItem("contacts");

  return {
    props: {
      ListData,
    },
  };
}
