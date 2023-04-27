import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import style from "../styles/Contacts.module.css";
import Card from "./Card";
import Heading from "./Heading";

export default function Contacts({ listData }) {
  const router = useRouter();
  const [list, setList] = useState(listData || []);
  const [mainList, setMainList] = useState(listData || []);
  const [cardData, setCardData] = useState({});
  const [colorName, setColorName] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const filterFunction = (userInput) => {
    if (searchInput === "") {
      setList(mainList);
      return;
    }
    const regex = new RegExp(userInput, "i");
    if (mainList !== null) {
      let filteredNames = mainList.filter((x) => {
        return regex.test(x.name);
      });

      setList(filteredNames);
    }
  };

  useEffect(() => {
    filterFunction(searchInput);
  }, [searchInput]);

  const editList = (index) => {
    router.push(`/edit-list/${index}`);
  };

  const deleteList = async (index) => {
    const updatedList = list.filter((data, i) => i !== index);
    setList(updatedList);
    setMainList(updatedList);
    const contactsData = JSON.stringify(updatedList);
    const res = await fetch(`${process.env.BASE_URL}/api/hello`, {
      method: "POST",
      body: contactsData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const msg = await res.json();
    console.log(msg);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleMouseOver = (i) => {
    setCardData(listData[i]);
    setColorName(listData[i].color);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setCardData({});
    setIsHovering(false);
    setColorName("");
  };
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
  const colorFunction = (i) => {
    const color = colors[index];
    index = (index + 1) % colors.length;
    return color;
  };

  return (
    <>
      <div className={`${style.container} container`}>
        <Heading></Heading>
        <div className="row">
          <div className={`${style.collg} col-lg-6`}>
            <input
              className={`${style.input} row form-control `}
              type="text"
              placeholder="search contact"
              onChange={handleSearchInput}
            />

            <div className={style.add}>
              <Link href={"/add-contact"}>
                <Button className={style.button}>Add Contact</Button>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        {list.length === 0 ? null : (
          <div className="row">
            <div className="col-md-4">
              <div className={`${style.card} card`}>
                <div className={`${style.cardheader} card-header`}>
                  <div>
                    <i className="bi bi-plus"></i>
                  </div>
                  <div className={style.cardheaderDiv}>
                    <div>
                      <p>Basic Info</p>
                    </div>
                    <div>
                      <p>Company</p>
                    </div>
                    <div></div>
                  </div>
                </div>
                {list.map((data, i) => {
                  return (
                    <div key={i} className={`${style.cardbody} card-body`}>
                      <div>
                        <i
                          className={`${style.square} bi bi-square`}
                          onMouseOver={() => handleMouseOver(i)}
                          onMouseOut={handleMouseOut}
                        ></i>
                      </div>
                      <div className={style.cardbodyDiv}>
                        <div className={`${style.info}`}>
                          <div
                            className={`${style.circle} rounded-circle text-white d-flex align-items-center justify-content-center mr-3`}
                            style={{
                              backgroundColor: colorFunction(i),
                            }}
                          >
                            <span className="h4 font-weight-bold m-0">
                              {data.name
                                .split(" ")
                                .map((name) => name.charAt(0))
                                .join("")}
                            </span>
                          </div>
                          <div className={style.infoText}>
                            <h4 className="card-title">{data.name}</h4>
                            <p className="card-subtitle mb-2 text-muted">
                              {data.email}
                            </p>
                          </div>
                        </div>

                        <div className={`${style.company} card-text`}>
                          {data.company}
                        </div>
                        <div className={style.action}>
                          <i
                            className="bi bi-pen"
                            onClick={() => editList(i)}
                          ></i>
                          <i
                            className="bi bi-trash"
                            onClick={() => deleteList(i)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      {isHovering ? <Card value={cardData} color={colorName}></Card> : null}
    </>
  );
}
