import AddContact from "@/component/AddContact";
import React from "react";

export default function Addcontact({ listData }) {
  return <AddContact listData={listData}></AddContact>;
}

export async function getServerSideProps(context) {
  let apiUrl;
  if (process.env.NODE_ENV === "development") {
    apiUrl = "http://localhost:3000";
  } else {
    apiUrl = context.req.url;
  }
  const res = await fetch(`${apiUrl}/api/hello`);
  const { listData } = await res.json();

  return {
    props: {
      listData,
    },
  };
}
