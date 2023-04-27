import AddContact from "@/component/AddContact";
import React from "react";

export default function Addcontact({ listData }) {
  return <AddContact listData={listData}></AddContact>;
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
