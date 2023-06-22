import React from "react";
import { BsFilter, BsSearch, BsArrowRepeat } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

function Card({ item }) {
  return (
    <div className="border-2 mx-24 my-4 min-w-[25rem] rounded-md shadow-md shadow-gray-100 px-4 py-7">
      <div className="flex items-center justify-between">
        <div className="">
          <p className=" font-bold text-2xl">{item.name}</p>

          <p className=" text-gray-400 flex items-center gap-2">
            {item.budget_name}{" "}
            <p className="h-[8px] w-[8px] rounded-full bg-gray-400 "> </p>{" "}
            Budget
          </p>
        </div>

        {item.card_type === "burner" ? (
          <MdOutlineLocalFireDepartment className="text-[2.7rem] text-orange-400 bg-orange-100 p-3 rounded-full" />
        ) : (
          <BsArrowRepeat className="text-[2.7rem] text-pink-400 bg-pink-100 p-3 rounded-full" />
        )}
      </div>

      <div className="flex justify-between my-4">
        <div className="">
          <p className="text-gray-400">AMOUNT</p>
          <p>300 SGD</p>
        </div>

        <div className="">
          <p className="text-gray-400">FREQUENCY</p>
          <p>Monthly</p>
        </div>

        <div className="">
          <p className="text-gray-400">
            {item.card_type === "subscription" ? "LIMIT" : "EXPIRY"}
          </p>
          <p>{item.card_type === "subscription" ? item.limit : item.expiry}</p>
        </div>
      </div>

      <div className="flex">
        <div className="h-[9px] rounded-s-md  w-[50%] bg-green-600"> </div>
        <div className="h-[9px] rounded-e-md  w-[50%] bg-pink-600"> </div>
      </div>

      <div className="flex justify-between my-1 ">
        <div className="flex items-center gap-3 text-gray-400">
          <div className="h-[9px] w-[9px] rounded-full bg-green-600"> </div>
          Spent
        </div>
        <p>
          {item.spent.value} {item.spent.currency}
        </p>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex items-center gap-3 text-gray-400">
          <div className="h-[9px] w-[9px] rounded-full bg-pink-400"> </div>
          Balance
        </div>
        <p>
          {item.available_to_spend.value} {item.available_to_spend.currency}
        </p>
      </div>
    </div>
  );
}

export default Card;
