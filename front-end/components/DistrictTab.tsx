import { Fragment, ReactElement, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import DataCards from "./DataCards";
import DevicesList from "./DevicesList";
import DistrictList from "./DistrictList";
import MyCombobox from "./MyCombobox";

type View = "DistrictView" | "DevicesView";
type View2 = "overall" | "filterByClients" | "filterByDistrict";
const districtTab = ({ openAddDevicePopup }: any) => {
  const [viewState, setViewState] = useState<View2>("overall");
  const [isSelectDistrict, setIsSelectDistrict] = useState<string>();

  // const changeToDevicesList = () => {
  //   setViewState("DevicesView");
  // };
  const changeToDistrictList = () => {
    setViewState("overall");
  };
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
  const testData = {
    area1: [
      {
        status: "online",
        cellHours: 1075,
        oxyHours: 2012,
        district: "area1",
        client: "client1",
      },
      {
        status: "offline",
        cellHours: 1453,
        oxyHours: 3042,
        district: "area1",
        client: "client1",
      },
    ],
    area2: [
      {
        status: "warning",
        cellHours: 5012,
        oxyHours: 1053,
        district: "area2",
        client: "client2",
      },
    ],
    area3: [
      {
        status: "maintencence",
        cellHours: 1661,
        oxyHours: 3212,
        district: "area3",
        client: "client3",
      },
    ],
  };

  return (
    <div className=" flex  flex-col pb-6 px-3 h-full bg-[#F5F5F5] rounded-b-md  ">
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
        {Object.entries(testData).map(([key, value]) => {
          return (
            <DataCards
              data={{
                ozoneMate: value.length,
                online: value.filter((e) => {
                  return e.status === "online";
                }).length,
                offline: value.filter((e) => {
                  return e.status === "offline";
                }).length,
                warning: value.filter((e) => {
                  return e.status === "warning";
                }).length,
                district: key,
              }}
              // isSelected={isSelectDistrict}
              // setSelected={setIsSelectDistrict}
              // changeView={changeToDevicesList}
            />
          );
        })}
      </div>
    </div>
  );
};
export default districtTab;
