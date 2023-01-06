import { Fragment, ReactElement, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { mockArea } from "../pages";
import District from "./DistrictCard";
import DevicesList from "./DevicesList";
import DistrictList from "./DistrictList";
import MyCombobox from "./MyCombobox";

type View = "DistrictView" | "DevicesView";
type View2 = "overall" | "filterByClients" | "filterByDistrict";
const testData = {
  area1: [
    {
      deviceId: 1,
      status: "online",
      cellHours: 1075,
      oxyHours: 2012,
      district: "area1",
      client: "client2",
      isWarning: true,
      isMaintencence: false,
    },
    {
      deviceId: 2,
      status: "offline",
      cellHours: 1453,
      oxyHours: 3042,
      district: "area1",
      client: "client1",
      isWarning: false,
      isMaintencence: false,
    },
  ],
  area2: [
    {
      deviceId: 3,
      status: "online",
      cellHours: 5012,
      oxyHours: 1053,
      district: "area2",
      client: "client2",
      isWarning: false,
      isMaintencence: false,
    },
  ],
  area3: [
    {
      deviceId: 4,
      status: "offline",
      cellHours: 1661,
      oxyHours: 3212,
      district: "area3",
      client: "client3",
      isWarning: false,
      isMaintencence: true,
    },
    {
      deviceId: 5,
      status: "offline",
      cellHours: 60220,
      oxyHours: 2240,
      district: "area3",
      client: "client3",
      isWarning: true,
    },
  ],
};
const districtTab = ({ openAddDevicePopup, map }: any) => {
  const [viewState, setViewState] = useState<View2>("overall");
  const [selectDistrict, setSelectDistrict] = useState<string>();
  useEffect(() => {
    map.data.setStyle((feature) => {
      let color = "white";

      if (feature.getProperty("isSelected")) {
        color = "#8F8F8F";
      } else {
        color = "white";
      }
      return /** @type {!google.maps.Data.StyleOptions} */ {
        fillColor: color,
        strokeWeight: 3,
        strokeColor: "#707070",
      };
    });
    map.data.forEach((e) => {
      if (selectDistrict === e.j.a) {
        console.log(e);
        e.setProperty("isSelected", true);
      } else e.setProperty("isSelected", false);
    });
  }, [selectDistrict]);
  const [allDevices, setAllDevices] = useState(testData);
  const resetMap = () => {
    map.data.forEach(function (feature) {
      map.data.remove(feature);
    });
  };
  const filteredByClients = (clientName) => {
    console.log(allDevices);
    if (clientName === "All") {
      resetMap();
      mockArea.forEach((e) => {
        map?.data.addGeoJson(e);
        map.data.setStyle({
          fillColor: "#FFFFFF",
          strokeWeight: 3,
          strokeColor: "#707070",
        });
      });
      setAllDevices(testData);
      return;
    }
    resetMap();
    // @ts-ignore
    setAllDevices((prv) => {
      let newDevice = {};
      for (const property in testData) {
        let result = testData[property].filter((e) => {
          // console.log(e.client)
          return e.client === clientName;
        });
        if (result.length >= 1) {
          mockArea.forEach((e) => {
            if (e.a === property) {
              map?.data.addGeoJson(e);
              map.data.setStyle({
                fillColor: "#FFFFFF",
                strokeWeight: 3,
                strokeColor: "#707070",
              });
            }
          });
          newDevice[property] = result;
        }
      }
      console.log(newDevice);
      return newDevice;
    });
  };

  // const changeToDevicesList = () => {
  //   setViewState("DevicesView");
  // };
  // const changeToDistrictList = () => {
  //   setViewState("overall");
  // };
  // type DistrictStatus = {
  //   district: string;
  //   ozoneMate: number;
  //   online: number;
  //   offline: number;
  //   alert: number;
  //   id: string;
  //   user: string;
  // };
  // const mockDataDistrict: DistrictStatus[] = [
  //   {
  //     district: "JAURES",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 1,
  //     id: uuidv4(),
  //     user: "Wade Cooper",
  //   },
  //   {
  //     district: "FAUBORG SAINT-GERMAIN",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Wade Cooper",
  //   },
  //   {
  //     district: "LATIN QUARTER",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Tom Cook",
  //   },
  //   {
  //     district: "PALAIS ROYAL",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 4,
  //     id: uuidv4(),
  //     user: "Arlene Mccoy",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 1,
  //     id: uuidv4(),
  //     user: "Tom Cook",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Arlene Mccoy",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Arlene Mccoy",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Arlene Mccoy",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 1,
  //     id: uuidv4(),
  //     user: "Tanya Fox",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 7,
  //     id: uuidv4(),
  //     user: "Tanya Fox",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Tanya Fox",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Arlene Mccoy",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 1,
  //     id: uuidv4(),
  //     user: "Arlene Mccoy",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 5,
  //     id: uuidv4(),
  //     user: "Hellen Schmidt",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Hellen Schmidt",
  //   },
  //   {
  //     district: " 43 Rue du Calvalre Nanterre, lie-deoverflow overflow",
  //     ozoneMate: 5,
  //     online: 6,
  //     offline: 7,
  //     alert: 0,
  //     id: uuidv4(),
  //     user: "Hellen Schmidt",
  //   },
  // ];
  // useEffect(() => {
  //   if (map) {
  // mockArea.forEach((e) => {
  //   map?.data.addGeoJson(e);
  // });

  //     var marker = new google.maps.Marker({
  //       position: {
  //         lng: 2.40033936500561,
  //         lat: 48.8777471008302,
  //       },
  //       map: map,
  //       // icon: './alert.png',
  //     });
  //   }
  // }, []);
  return (
    <div className=" flex  flex-col pb-6 px-3 h-full bg-[#F5F5F5] rounded-b-md  ">
      <div className=" w-full flex  min-h-[104px] pt-8 pb-[18px] pl-[30px] ">
        <MyCombobox filteredByClients={filteredByClients} />
        <div className=" text-left flex items-start ml-[30px]">
          <p className=" text-[20px] font-bold  text-[#656565]">Client</p>
        </div>
        <button
          onClick={() => {
            map.data.forEach((feature) => {
              console.log(feature.getProperty("isSelected"));
            });
          }}
          className=" p-5 bg-red-500"
        >
          test
        </button>
        <button
          onClick={openAddDevicePopup}
          className=" ml-auto flex items-center justify-center w-[136px] h-[54px] space-x-3 styled"
        >
          <img src="/images/add.png" alt="" />
          <img src="/images/machine.png" className="w-[27px] h-[35px]" alt="" />
        </button>
      </div>
      <div className="overflow-scroll h-full space-y-11 flex flex-col items-center rounded-[6px]  pl-[30px] pr-[20px]  custom-scrollbar">
        {Object.entries(allDevices).map(([key, value]) => {
          return (
            <District
              key={key}
              selectDistrict={selectDistrict}
              setSelectDistrict={setSelectDistrict}
              data={{
                ozoneMate: value.length,
                online: value.filter((e) => {
                  return e.status === "online";
                }).length,
                offline: value.filter((e) => {
                  return e.status === "offline";
                }).length,
                warning: value.filter((e) => {
                  return e.isWarning === true;
                }).length,
                district: key,
                id: key,
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
