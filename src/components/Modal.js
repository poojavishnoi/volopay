import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { setCardTypeFilter, setReset } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

function Modal({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const cardType = useSelector((state) => state.type);
  if (!isOpen) return null;

  return (
    <div className=" fixed shadow-xl right-10 top-[8rem] border-2 rounded-lg flex items-center justify-center z-50">
      <div className=" w-[30rem] bg-white rounded-lg pt-3">
        <h2 className="font-bold text-gray-700 px-2 py-4 border-b-2 ">
          Filters
        </h2>
        <div className="mx-4 my-2 border-b-2 p-2">
          <label className="block text-gray-400 text-md ">Type</label>
          <div className="flex gap-5 my-2">
            <div className="">
              <input
                type="checkbox"
                id="subscription"
                checked={cardType.indexOf("subscription") > -1}
                onChange={() => dispatch(setCardTypeFilter("subscription"))}
                className="mr-2"
              />
              <label>Subscription</label>
            </div>
            <div className="">
              <input
                type="checkbox"
                id="burner"
                checked={cardType.indexOf("burner") > -1}
                onChange={() => dispatch(setCardTypeFilter("burner"))}
                className="mr-2"
              />
              <label>Burner</label>
            </div>
          </div>
        </div>

        <div className="mx-4 my-2 border-b-2 p-2">
          <p className="text-gray-400">Cardholder</p>
          <div className="flex justify-between bg-gray-100 my-2  p-2 items-center rounded-md">
            <p className="text-gray-400">Select cardholder</p>
            <AiOutlineDown />
          </div>
        </div>

        <div className="mx-4 my-2 flex justify-between gap-4 p-2">
          <button
            className="bg-pink-400 text-white w-1/2 px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Apply
          </button>

          <button
            className=" bg-gray-50 w-1/2 text-gray-400 px-4 py-2 rounded-lg"
            onClick={() => dispatch(setReset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
