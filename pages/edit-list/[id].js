import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditList from "@/component/EditList";

export default function Editlist({ listData }) {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState({});
  const [data, setData] = useState([]);

  const newEditedValue = async (newContact) => {
    const updatedList = [
      ...data.slice(0, id),
      newContact,
      ...data.slice(id + 1),
    ];
    const contactsData = JSON.stringify(updatedList);
    const res = await fetch(`/api/hello`, {
      method: "POST",
      body: contactsData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const msg = await res.json();
    console.log(msg);
    router.push("/");
  };

  async function fetchContact() {
    if (listData && listData[id]) {
      setValue(listData[id]);
      setData(listData);
    }
  }

  useEffect(() => {
    fetchContact();
  }, [id]);

  return (
    <div>
      {value && <EditList value={value} newList={newEditedValue}></EditList>}
    </div>
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
