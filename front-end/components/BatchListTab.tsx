import { Fragment, ReactElement, useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { groupContext } from "../pages";
import District from "./DistrictCard";
import MyCombobox from "./MyCombobox";
import { useMemo } from "react";
import useSWR from "swr";
import { api } from "../lib/axios";
import BatchCard from "./BatchCard";
type View = "overall" | string;

const BatchListTab = ({ openAddBatchPopup, map }: any) => {
  const addressClient = `/api/v1/client`;
  const fetcherClient = async (url) =>
    await api.get(url).then((res) => res.data);
  const { data: clients } = useSWR(addressClient, fetcherClient);
  const batchArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className=" flex  flex-col pb-6 px-3 h-full bg-[#F5F5F5] rounded-b-md  ">
      <div className=" w-full flex  min-h-[104px] pt-8 pb-[18px] pl-[30px]  ">
        {/* {clients && (
          <MyCombobox
            filteredByClients={filteredByClients}
            clients={["All", ...clientList]}
            isFilter={true}
            className="w-full outline-none border-none py-2 pl-3 pr-10 text-[20px] font-bold leading-5 text-gray-900 focus:ring-0 bg-[#F5F5F5]"
          />
        )} */}
        <div className=" text-left flex items-start ml-[30px]">
          <p className=" text-[20px] font-bold  text-[#656565]">Client</p>
        </div>
        <button
          onClick={openAddBatchPopup}
          className=" ml-auto flex items-center justify-center w-[136px] h-[54px] space-x-3 styled"
        >
          <img src="/images/add.png" alt="" />
          <img src="/images/batch.png" className="w-[27px] h-[35px]" alt="" />
        </button>
      </div>
      <div className="overflow-scroll h-full space-y-11 flex flex-col items-center rounded-[6px]  pl-[30px] pr-[20px]  custom-scrollbar">
        {batchArr.map((e)=>{
            return(<BatchCard/>)
        })}
      </div>
    </div>
  );
};
export default BatchListTab;
