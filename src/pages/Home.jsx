import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import Card from "../components/Card";
import Modal from "../components/Modal";
import jsonData from "../data.json";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const data = jsonData.data;

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const cardType = useSelector((state) => state.type);

  const filteredData = data.filter((item) => {
    if (cardType.length === 0) {
      return item;
    } else {
      return cardType.includes(item.card_type);
    }
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="my-4 mx-6">
      <div className="flex justify-end items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-gray-200 rounded-md p-2"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          onClick={openModal}
          className="flex items-center gap-2 rounded-md bg-gray-100 text-gray-500 w-[7rem] justify-center p-1"
        >
          <BsFilter className="text-lg" />
          Filter
        </button>
        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredData
          .filter((data) => {
            return data.name.toLowerCase().includes(text.toLowerCase());
          })
          .map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
    </div>
  );
}

export default Home;
