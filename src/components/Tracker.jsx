import React from "react";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlinePlus,
} from "react-icons/ai";
import { Dropdown } from "./DropDown";
import { graphData } from "../resources/data";

const calcEarning = (data) => {
  let totalIncome = 0;
  let totalExpense = 0;
  let percentageGained = 0;
  let percentageLost = 0;
  data.forEach((item) => {
    totalIncome += item.income;
    totalExpense += item.expense;
  });
  if (totalIncome >= totalExpense) {
    percentageGained = Math.round(
      ((totalIncome - totalExpense) / totalExpense) * 100
    );
  } else {
    percentageLost = Math.round(
      ((totalExpense - totalIncome) / totalExpense) * 100
    );
  }
  return {
    totalIncome,
    totalExpense,
    percentageGained,
    percentageLost,
  };
};

export const annualReport = calcEarning(graphData);
const earningOrLoss =
  annualReport.totalIncome > annualReport.totalExpense ? "earning" : "loss";
const moneyReport =
  earningOrLoss === "earning"
    ? annualReport.totalIncome
    : annualReport.totalExpense;
const percentageReport =
  earningOrLoss === "earning"
    ? annualReport.percentageGained
    : annualReport.percentageLost;

const Tracker = () => {
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="flex w-full gap-x-2 items-center text-sm justify-between">
        <span className="text-md">Sales Overview</span>
        <button className="mr-8 flex bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold py-2 px-4 rounded">
          <AiOutlinePlus className="h-4 w-4" />
          <span>Add Offer</span>
        </button>
      </div>
      <hr className="mr-8 my-2" />
      <div className="flex w-full h-fit">
        <div className="flex w-full gap-x-2 items-center">
          <p className="mb-2 text-2xl font-semibold text-sm">
            {"$"}
            {moneyReport}
          </p>

          <div className="text-xs font-normal flex items-center gap-x-2">
            {earningOrLoss === "earning" ? (
              <span className="">
                <AiOutlineArrowUp className=" h-8 w-8 p-2 bg-[#e5f6f5] text-green-500 rounded-full" />
              </span>
            ) : earningOrLoss === "loss" ? (
              <span>
                <AiOutlineArrowDown className=" h-8 w-8 p-2 bg-[#e5f6f5] text-red-500 rounded-full" />
              </span>
            ) : (
              ""
            )}
            <span
              className={`
                  "font-semibold inline-block",
                  ${earningOrLoss} === "earning"
                    ? "text-green-500"
                    : ${earningOrLoss} === "loss"
                    ? "text-red-600"
                    : ""
                `}
            >
              {percentageReport}%{" "}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-4 mr-8">
          <div className="flex items-center justify-between gap-x-2">
            <span className="align-middle inline-block h-[8px] w-[8px] bg-[#107EE2] rounded-full"></span>
            <span className="align-middle inline-block text-sm">Income</span>
          </div>

          <div className="flex items-center justify-between gap-x-2">
            <span className="align-middle inline-block h-[8px] w-[8px] bg-[#FF0000] rounded-full"></span>
            <span className="align-middle inline-block text-sm">Expenses</span>
          </div>
        </div>

        <Dropdown />
      </div>
    </div>
  );
};

export default Tracker;
