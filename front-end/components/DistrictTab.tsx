import { Fragment, ReactElement, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { mockArea } from "../pages";
import District from "./DistrictCard";
import MyCombobox from "./MyCombobox";
import axios from "axios";
import { useMemo } from "react";
import useSWR from "swr";
type View = "overall" | string;

const districtTab = ({ openAddDevicePopup, map }: any) => {
  const [viewState, setViewState] = useState<View>("overall");
  const [selectDistrict, setSelectDistrict] = useState<string>();
  const [locations, setLocations] = useState();
  const [filteredByClient, setFilteredByClient] = useState();
  const addressDeviceGroup = `http://103.170.142.47:8000/api/v1/deviceGroup`;
  const fetcherDevice = async (url) =>
    await axios.get(url).then((res) => res.data);
  const { data: deviceGroup } = useSWR(addressDeviceGroup, fetcherDevice);
  const addressClient = `http://103.170.142.47:8000/api/v1/client`;
  const fetcherClient = async (url) =>
    await axios.get(url).then((res) => res.data);
  const { data: clients } = useSWR(addressClient, fetcherClient);
  const addressLocations = `http://103.170.142.47:8000/api/v1/location`;
  const fetcherLocation = async (url) =>
    await axios.get(url).then((res) => res.data);
  const { data: location } = useSWR(addressLocations, fetcherLocation);
  const modifiedData = useMemo(() => {
    if (filteredByClient === 0) return deviceGroup;
    let output;
    if (deviceGroup) {
      output = deviceGroup.filter((e) => e.client === filteredByClient);
    }
    return output;
  }, [deviceGroup, filteredByClient]);
  const devicesByDistrict = useMemo(() => {
    if (!modifiedData) return [];
    const grouped = modifiedData.reduce((prev, cur) => {
      return prev[cur.location]
        ? { ...prev, [cur.location]: [...prev[cur.location], cur] }
        : { ...prev, [cur.location]: [cur] };
    }, {});
    const formattedData = Object.entries(grouped).reduce(
      (prev, [key, value]) => {
        // @ts-ignore
        const r = value.reduce((prev, cur, idx) => {
          if (idx === 0) {
            return {
              offline_devices: cur["offline_devices"],
              online_devices: cur["online_devices"],
              total_devices: cur["total_devices"],
              warning_devices: cur["warning_devices"],
            };
          } else {
            return {
              offline_devices: prev["offline_devices"] + cur["offline_devices"],
              online_devices: prev["online_devices"] + cur["online_devices"],
              total_devices: prev["total_devices"] + cur["total_devices"],
              warning_devices: prev["warning_devices"] + cur["warning_devices"],
            };
          }
        }, {});
        return { ...prev, [key]: { sumData: r } };
      },
      {}
    );
    return formattedData;
  }, [modifiedData]);
  const filteredByDistrict = useMemo(() => {
    if (!modifiedData) return [];
    let filteredDistrict = modifiedData.filter((e) => e.location == viewState);
    console.log(filteredDistrict);
    return filteredDistrict;
  }, [viewState, modifiedData]);
  const resetMap = () => {
    map.data.forEach(function (feature) {
      map.data.remove(feature);
    });
  };

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
  const filteredByClients = (targetClient) => {
    setFilteredByClient(targetClient);
  };
  const selectedDistrict = (district) => {
    setViewState(district);
  };

  useEffect(() => {}, []);

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

  return (
    <div
      onClick={() => {
        console.log(location);
      }}
      className=" flex  flex-col pb-6 px-3 h-full bg-[#F5F5F5] rounded-b-md  "
    >
      <div className=" w-full flex  min-h-[104px] pt-8 pb-[18px] pl-[30px]  ">
        {viewState === "overall" ? (
          <>
            {clients && (
              <MyCombobox
                filteredByClients={filteredByClients}
                clients={[{ id: 0, name: "All" }, ...clients]}
              />
            )}
            <div className=" text-left flex items-start ml-[30px]">
              <p className=" text-[20px] font-bold  text-[#656565]">Client</p>
            </div>
            <button
              onClick={openAddDevicePopup}
              className=" ml-auto flex items-center justify-center w-[136px] h-[54px] space-x-3 styled"
            >
              <img src="/images/add.png" alt="" />
              <img
                src="/images/machine.png"
                className="w-[27px] h-[35px]"
                alt=""
              />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setViewState("overall");
              }}
              className=" styled w-11 h-11"
            >
              <img
                src="/images/left2.png"
                className=" mx-auto my-auto"
                alt=""
              />
            </button>
          </>
        )}
      </div>
      <div className="overflow-scroll h-full space-y-11 flex flex-col items-center rounded-[6px]  pl-[30px] pr-[20px]  custom-scrollbar">
        {viewState === "overall" && devicesByDistrict ? (
          <>
            {Object.entries(devicesByDistrict).map(([key, value]) => {
              return (
                <District
                  selectedDistrict={selectedDistrict}
                  key={key}
                  selectDistrict={selectDistrict}
                  setSelectDistrict={setSelectDistrict}
                  data={{
                    // @ts-ignore
                    ozoneMate: value.sumData.total_devices,
                    // @ts-ignore
                    online: value.sumData.online_devices,
                    // @ts-ignore
                    offline: value.sumData.offline_devices,
                    // @ts-ignore
                    warning: value.sumData.warning_devices,
                    district: key,
                    id: key,
                  }}
                  // isSelected={isSelectDistrict}
                  // setSelected={setIsSelectDistrict}
                  // changeView={changeToDevicesList}
                />
              );
            })}
          </>
        ) : (
          filteredByDistrict && (
            <>
              {filteredByDistrict.map((e) => {
                console.log(e);
                return (
                  <District
                    selectedDistrict={selectedDistrict}
                    key={e.id}
                    selectDistrict={selectDistrict}
                    setSelectDistrict={setSelectDistrict}
                    data={{
                      // @ts-ignore
                      ozoneMate: e.total_devices,
                      // @ts-ignore
                      online: e.online_devices,
                      // @ts-ignore
                      offline: e.offline_devices,
                      // @ts-ignore
                      warning: e.warning_devices,
                      district: e.name,
                      id: e.id,
                    }}
                    // isSelected={isSelectDistrict}
                    // setSelected={setIsSelectDistrict}
                    // changeView={changeToDevicesList}
                  />
                );
              })}
            </>
          )
        )}
      </div>
    </div>
  );
};
export default districtTab;
