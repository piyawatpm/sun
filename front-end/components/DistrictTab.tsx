import { Fragment, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import DevicesList from "./DevicesList";
import DistrictList from "./DistrictList";

type View = "DistrictView" | "DevicesView";
type View2 = "overall" | "filterByClients" | "filterByDistrict";
const districtTab = ({ openAddDevicePopup }: any) => {
  const [viewState, setViewState] = useState<View2>("overall");
  // const changeToDevicesList = () => {
  //   setViewState("DevicesView");
  // };
  const changeToDistrictList = () => {
    setViewState("overall");
  };

  return (
    <div className=" flex  flex-col pb-6 px-3 h-full bg-[#F5F5F5] rounded-b-md  ">
      {viewState === "overall" && (
        <DistrictList
          openAddDevicePopup={openAddDevicePopup}
          // changeToDevicesList={changeToDevicesList}
        />
      )}
      {/* {viewState === "DevicesView" && (
        <DevicesList changeToDistrictList={changeToDistrictList} />
      )} */}
    </div>
  );
};
export default districtTab;
