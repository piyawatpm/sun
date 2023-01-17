const BatchCard = () => {
  return (
    <div className=" flex flex-col w-[644px] h-[215px] bg-[#F5F5F5]  rounded-[6px]  shadow-lg border-t-[3px] border-l-[3px] p-[15px] border-white shadow-black/20">
      <div className=" flex rounded-[6px]  shadow-md border-t-[3px] border-l-[3px] py-[5.5px] px-[15px] border-white shadow-gray-300">
        <p className=" text-[24px] font-bold text-black">BATCH C911</p>
        <div className=" ml-auto flex space-x-6 items-center">
          <p className=" text-[24px] font-bold text-[#9B9B9B]">IN USE</p>
          <div className="rounded-[6px] w-[39px] h-[29px] active-card-small flex items-center justify-center">
            <div className=" w-[29px] h-[21px] bg-[#00FF22] rounded-[4px]"></div>
          </div>
        </div>
      </div>
      <div className=" flex  mt-[15px]">
        <div className=" flex flex-col">
          <div className=" flex">
            <div className=" w-[125px] h-[48px] flex space-x-[5px] items-center">
              <img
                src="/images/used.png"
                className=" w-[37px] h-[40px]"
                alt=""
              />
              <div className=" flex flex-col">
                <p className=" text-[20px] font-bold">Remain</p>
                <p className=" text-[20px] font-semibold text-[#9B9B9B]">
                  300L
                </p>
              </div>
            </div>
            <div className=" ml-[80px] w-[175px] h-[48px] flex space-x-[5px] items-center">
              <img
                src="/images/volume.png"
                className=" w-[29px] h-[40px]"
                alt=""
              />
              <div className=" flex flex-col">
                <p className=" text-[20px] font-bold">Total Volume</p>
                <p className=" text-[20px] font-semibold text-[#9B9B9B]">
                  1000L
                </p>
              </div>
            </div>
          </div>
          <div className=" flex mt-[23.5px]">
            <div className="w-[170px] h-[50px] flex items-center space-x-[3.5px]">
              <img src="/images/calender.png" className=" w-[41px] h-[40px]" alt="" />
              <div className=" flex flex-col">
                <p className=" text-[20px] font-bold">Install Date</p>
                <p className=" text-[20px] font-semibold text-[#9B9B9B]">11 Nov 2022</p>
              </div>
            </div>
            <div className="ml-[35px] w-[176px] h-[50px] flex items-center space-x-[3.5px]">
              <img src="/images/expiry.png" className=" w-[46px] h-[44px]" alt="" />
              <div className=" flex flex-col">
                <p className=" text-[20px] font-bold">Expiry Date</p>
                <p className=" text-[20px] font-semibold text-[#9B9B9B]">26 Oct 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col ml-auto space-y-[13px]">
          <button className=" flex styled w-[176px] h-[52px] items-center pl-6 space-x-[15px]">
            {" "}
            <img src="/images/junk.png" alt="" />{" "}
            <p className="text-[#FF0000] text-[20px] font-bold">RECALL</p>
          </button>
          <button className=" flex styled w-[176px] h-[52px] items-center pl-6 space-x-[26px]">
            {" "}
            <img src="/images/edit.png" alt="" />{" "}
            <p className=" text-[20px] font-bold">EDIT</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BatchCard;
