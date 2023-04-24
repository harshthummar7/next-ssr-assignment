import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditList from "@/component/EditList";

export default function Editlist() {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState({});
  const [data, setData] = useState([]);

  const newEditedValue = (newContact) => {
    console.log(newContact);
    localStorage.setItem(
      "contacts",
      JSON.stringify([...data.slice(0, id), newContact, ...data.slice(id + 1)])
    );
    router.push("/");
  };

  function fetchContact() {
    const data1 = JSON.parse(localStorage.getItem("contacts"));
    if (data1 && data1[id]) {
      setValue(data1[id]);
      setData(data1);
      // console.log(value);
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
