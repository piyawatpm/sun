import { mockDevices, mockDistrict } from "../pages";
import axios from "axios";
import useSWR from "swr";
const overviewTab = () => {
  const address = `http://103.170.142.47:8000/api/v1/overview`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
  //   total_devices,
  //   online_devices,
  //   offline_devices,
  //   warning_devices,
  //   maintainence_devices,
  //   cellTotalHours,
  //   oxyTotalHours,
  //   locations,
  // } = data ? data : undefined;

  // const totalDevice = mockDevices.length;
  // const totalOnline = mockDevices.filter((e) => {
  //   return e.status === "online";
  // }).length;
  // const totalOffline = mockDevices.filter((e) => {
  //   return e.status === "offline";
  // }).length;
  // const totalWarning = mockDevices.filter((e) => {
  //   return e.isWarning === true;
  // }).length;
  // const totalMaintencence = mockDevices.filter((e) => {
  //   return e.isMaintencence === true;
  // }).length;
  // const totalCellHours = mockDevices.reduce((accumulator, object) => {
  //   return accumulator + object.cellHours;
  // }, 0);
  // const totalOxyHours = mockDevices.reduce((accumulator, object) => {
  //   return accumulator + object.oxyHours;
  // }, 0);
  const totalLocations = mockDistrict.length;
  return (
    <div className=" flex  justify-around  space-y-1 flex-col pt-[52px] pb-[33px] px-[28px] h-full bg-gray-100 rounded-b-md ">
      {data ? (
        <>
          {" "}
          <div className=" pr-[43px] pl-[21px] flex items-center  rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  py-1 text-[20px] font-bold">
            <div className="flex  w-[205px]">
              <div className=" flex flex-col items-center justify-center">
                <img
                  src="/images/device.png"
                  className=" w-[17px] h-[51px]"
                  alt=""
                />
                <p className="text-[20px] font-bold">Total Device</p>
              </div>
              <p className=" text-[50px] font-light mt-auto leading-[48px] ml-auto">
                24
              </p>
            </div>
            <div className="flex w-[143px] ml-[96px]  ">
              <div className=" flex flex-col items-center justify-center">
                <img src="/images/online.png" className="" alt="" />
                <p className="text-[20px] font-bold">Online</p>
              </div>
              <p className=" text-[50px] font-light mt-auto leading-[48px] ml-auto">
                20
              </p>
            </div>
            <div className="flex  w-[117px] ml-[96px]">
              <div className=" flex flex-col items-center justify-center">
                <img src="/images/offline.png" className="" alt="" />
                <p className="text-[20px] font-bold">Offline</p>
              </div>
              <p className=" text-[50px] font-light mt-auto leading-[48px] ml-auto">
                4
              </p>
            </div>
          </div>
          <div className="px-[30px] flex items-center  rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  py-1">
            <div className="flex w-[172px] ">
              <div className=" flex flex-col items-center justify-center">
                <img src="/images/warning.png" className=" " alt="" />
                <p className="text-[20px] font-bold">Warning</p>
              </div>
              <p className=" text-[50px] font-light mt-auto leading-[48px] ml-auto">
                3
              </p>
            </div>
            <div className="flex ml-[78px] w-[211px]  ">
              <div className=" flex flex-col items-center justify-center">
                <img src="/images/maintencence.png" className=" " alt="" />
                <p className="text-[20px] font-bold">Maintencence</p>
              </div>
              <p className=" text-[50px] font-light mt-auto leading-[48px] ml-auto">
                2
              </p>
            </div>
          </div>
          <div className=" text-[20px] font-bold flex  items-center rounded-[6px] min-h-[42%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  pl-[54px] py-1">
            <div className=" flex flex-col">
              <div className=" w-[229px] h-[133px] flex flex-col">
                <div className=" flex space-x-[10px] items-center">
                  <img
                    src="/images/volume.png"
                    className="w-[44px] h-[61px]"
                    alt=""
                  />
                  <p className=" leading-[24px]">
                    Total <br />
                    Sunscreen  Volume
                  </p>
                </div>
                <p className=" text-[50px] font-light">4123 Liter</p>
              </div>
              <div className=" w-[207px] h-[140px] mt-[33px]">
                <div className=" flex space-x-[10px] items-center">
                  <img
                    src="/images/used.png"
                    className="w-[55px] h-[60px]"
                    alt=""
                  />
                  <p className=" leading-[24px]">
                    Total <br />
                    Sunscreen  Used
                  </p>
                </div>
                <p className=" text-[50px] font-light whitespace-nowrap">
                  323 Liter
                </p>
              </div>
            </div>
            <div className=" flex flex-col">
              <div className=" w-[199px] h-[131px] ml-[135px]">
                <div className=" flex space-x-[10px] items-center">
                  <img
                    src="/images/batch.png"
                    className="w-[66px] h-[60px]"
                    alt=""
                  />
                  <p className=" leading-[24px]">
                    Total <br />
                    Sunscreen  Batch
                  </p>
                </div>
                <p className=" text-[50px] font-light  text-center">20</p>
              </div>
              <div className=" w-[213px] h-[140px] ml-[135px] mt-[33px]">
                <div className=" flex space-x-[10px] items-center">
                  <img
                    src="/images/dispensing.png"
                    className="w-[67px] h-[61px]"
                    alt=""
                  />
                  <p className=" leading-[24px]">
                    Total <br />
                    Sunscreen  Batch
                  </p>
                </div>
                <p className=" text-[50px] font-light whitespace-nowrap text-center">
                  22310
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-center space-x-3 rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  px-2 py-1">
            <div className="flex flex-col  items-center  translate-x-[-50%] ml-[15%] ">
              <img src="/images/location.png" className="" alt="" />
            </div>
            <div className="flex flex-col items-center ">
              <h2 className=" text-[20px] font-bold">Location</h2>
              <p className=" text-[50px]  font-light text-[#707070]">
                {data.locations}
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default overviewTab;
