import React, { useEffect, useState } from "react";
import style from "../styles/AddContact.module.css";
import { Form, Button } from "react-bootstrap";

export default function EditList(props) {
  const [formData, setFormData] = useState({
    name: props.value.name,
    email: props.value.email,
    phone: props.value.phone,
    company: props.value.company,
    address: props.value.address,
    color: props.value.color,
  });

  useEffect(() => {
    const { name, email, phone, company, address, color } = props.value;
    setFormData({ name, email, phone, company, address, color });
  }, [props.value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.newList(formData);
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
                Edit Contact
              </label>

              <div className="row ml-1">
                <label className="row form-text text-muted">Full name</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  name="name"
                  required
                  pattern="[A-Za-z\s]+"
                  maxLength={15}
                  placeholder="Full name"
                  defaultValue={props.value.name}
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
                  defaultValue={props.value.email}
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
                  placeholder="Phone"
                  defaultValue={props.value.phone}
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
                  defaultValue={props.value.company}
                  onChange={handleInputChange}
                />
                <br></br>

                <label className="row form-text text-muted">Address</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  name="address"
                  required
                  placeholder="Address"
                  maxLength={20}
                  defaultValue={props.value.address}
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
