import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import style from "../styles/AddContact.module.css";

export default function AddContact({ listData }) {
  const router = useRouter();
  const [contacts, setContect] = useState(listData || []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let index = 0;
  const colorFunction = () => {
    const color = colors[index];
    index = (index + 1) % colors.length;
    return color;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      address: formData.address,
      color: colorFunction(),
    };
    let list = [...contacts];
    list.push(contact);
    setContect(list);
    const contactsData = JSON.stringify(list);
    const res = await fetch("http://localhost:3000/api/hello", {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className={`${style.form} container`}>
      <div
        className={`${style.form} row justify-content-center align-items-center`}
      >
        <div className={`${style.collg} col-lg-6`}>
          <div className="container">
            <Form onSubmit={handleSubmit}>
              <label className="row justify-content-center font-weight-bold">
                Add Contact
              </label>

              <div className="row ml-1">
                <label className="row form-text text-muted">Full name</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  name="name"
                  required
                  pattern="^[a-zA-Z]+ ?[a-zA-Z]+$"
                  maxLength={15}
                  placeholder="Full name"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter a valid full name containing only alphabets and maximum 15 length"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  onChange={handleInputChange}
                />
                <br></br>

                <label className="row form-text text-muted">Email</label>
                <input
                  className={`${style.data} row form-control`}
                  type="Email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="Email"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter valid email address"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  onChange={handleInputChange}
                />
                <br></br>

                <label className="row form-text text-muted">Phone</label>
                <input
                  className={`${style.data} row form-control`}
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  placeholder="***** *****"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter a valid phone number"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  onChange={handleInputChange}
                />
                <br></br>

                <label className="row form-text text-muted">Company</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  name="company"
                  required
                  placeholder="Company"
                  onChange={handleInputChange}
                />
                <br></br>

                <label className="row form-text text-muted">Address</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  name="address"
                  maxLength={20}
                  required
                  placeholder="Address"
                  onChange={handleInputChange}
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
