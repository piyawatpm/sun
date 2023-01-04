import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import DataCards from "./DataCards";
import { v4 as uuidv4 } from "uuid";
import MyCombobox from "./MyCombobox";

type DistrictStatus = {
  district: string;
  ozoneMate: number;
  online: number;
  offline: number;
  alert: number;
  id: string;
  user: string;
};
const mockDataDistrict: DistrictStatus[] = [
  {
    district: "JAURES",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Wade Cooper",
  },
  {
    district: "FAUBORG SAINT-GERMAIN",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Wade Cooper",
  },
  {
    district: "LATIN QUARTER",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Tom Cook",
  },
  {
    district: "PALAIS ROYAL",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 4,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Tom Cook",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Tanya Fox",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 7,
    id: uuidv4(),
    user: "Tanya Fox",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Tanya Fox",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 1,
    id: uuidv4(),
    user: "Arlene Mccoy",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 5,
    id: uuidv4(),
    user: "Hellen Schmidt",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Hellen Schmidt",
  },
  {
    district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
    ozoneMate: 5,
    online: 6,
    offline: 7,
    alert: 0,
    id: uuidv4(),
    user: "Hellen Schmidt",
  },
];

const DistrictList = ({ openAddDevicePopup, changeToDevicesList = 0 }) => {
  const [isSelectDistrict, setIsSelectDistrict] = useState<string>();
  return (
    <>
      <div className=" w-full flex  min-h-[104px] pt-8 pb-[18px] pl-[30px] ">
        <MyCombobox />
        <div className=" text-left flex items-start ml-[30px]">
          <p className=" text-[20px] font-bold  text-[#656565]">Client</p>
        </div>

        <button
          onClick={openAddDevicePopup}
          className=" ml-auto flex items-center justify-center w-[136px] h-[54px] space-x-3 styled"
        >
          <img src="/images/add.png" alt="" />
          <img src="/images/machine.png" className="w-[27px] h-[35px]" alt="" />
        </button>
      </div>
      <div className="overflow-scroll space-y-11 flex flex-col items-center rounded-[6px]  pl-[30px] pr-[20px]  custom-scrollbar">
        {mockDataDistrict.map((data: DistrictStatus) => {
          return (
            <DataCards
              data={data}
              isSelected={isSelectDistrict}
              setSelected={setIsSelectDistrict}
              changeView={changeToDevicesList}
            />
          );
        })}
      </div>
    </>
  );
};
export default DistrictList;
