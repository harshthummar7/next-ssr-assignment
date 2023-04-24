import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import style from "../styles/AddContact.module.css";
import localforage from "localforage";
localforage.config({
  name: "my-app-db",
  storeName: "contacts",
  driver: localforage.LOCALSTORAGE,
  version: 1,
});

export default function AddContact({ ListData }) {
  const router = useRouter();
  const [contacts, setContect] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const addressRef = useRef();

  function fetchContact() {
    setContect(ListData || []);
  }

  useEffect(() => {
    fetchContact();
  }, []);

  const handlesbm = (e) => {
    e.preventDefault();
    let contact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
    };
    let list = [...contacts];
    list.push(contact);
    setContect(list);
    localforage.setItem("contacts", list);
    console.log(JSON.parse(localStorage.getItem("contacts")));
    router.push("/");
  };

  return (
    <div className={`${style.form} container`}>
      <div
        className={`${style.form} row justify-content-center align-items-center`}
      >
        <div className={`${style.collg} col-lg-6`}>
          <div className="container">
            <Form onSubmit={handlesbm}>
              <label className="row justify-content-center font-weight-bold">
                Add Contact
              </label>

              <div className="row ml-1">
                <label className="row form-text text-muted">Full name</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  required
                  pattern="^[a-zA-Z]+ ?[a-zA-Z]+$"
                  maxLength={15}
                  placeholder="Full name"
                  ref={nameRef}
                  onInvalid={() =>
                    nameRef.current.setCustomValidity(
                      "Please enter a valid name"
                    )
                  }
                  onChange={() => nameRef.current.setCustomValidity("")}
                />
                <br></br>

                <label className="row form-text text-muted">Email</label>
                <input
                  className={`${style.data} row form-control`}
                  type="Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="Email"
                  ref={emailRef}
                  onInvalid={() =>
                    emailRef.current.setCustomValidity(
                      "Please enter a valid email address"
                    )
                  }
                  onChange={() => emailRef.current.setCustomValidity("")}
                />
                <br></br>

                <label className="row form-text text-muted">Phone</label>
                <input
                  className={`${style.data} row form-control`}
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="***** *****"
                  ref={phoneRef}
                  onInvalid={() =>
                    phoneRef.current.setCustomValidity(
                      "Please enter a 10-digit phone number"
                    )
                  }
                  onChange={() => phoneRef.current.setCustomValidity("")}
                />
                <br></br>

                <label className="row form-text text-muted">Company</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  required
                  placeholder="Company"
                  ref={companyRef}
                />
                <br></br>

                <label className="row form-text text-muted">Address</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  maxLength={20}
                  required
                  placeholder="Address"
                  ref={addressRef}
                />
                <br></br>

                <div className="d-flex justify-content-center">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Load the data from LocalForage on the server
  const ListData = await localforage.getItem("contacts");

  return {
    props: {
      ListData,
    },
  };
}
