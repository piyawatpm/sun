import { Fragment, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import DevicesList from "./DevicesList";
import DistrictList from "./DistrictList";

type View = "DistrictView" | "DevicesView";

const districtTab = ({ openAddDevicePopup }: any) => {
  const [viewState, setViewState] = useState<View>("DistrictView");
  const changeToDevicesList = () => {setViewState('DevicesView')};
  const changeToDistrictList = () => {setViewState('DistrictView')};
  return (
    <div className=" flex  flex-col pb-6 px-3 h-full bg-[#F5F5F5] rounded-b-md  ">
      {viewState === "DistrictView" && (
        <DistrictList
          openAddDevicePopup={openAddDevicePopup}
          changeToDevicesList={changeToDevicesList}
        />
      )}
      {viewState === "DevicesView" && <DevicesList changeToDistrictList={changeToDistrictList}/>}
    </div>
  );
};
export default districtTab;
