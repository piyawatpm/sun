const overviewTab = ()=>{
    return(<div className=" flex  justify-around  space-y-1 flex-col pt-[52px] pb-[33px] px-[28px] h-full bg-gray-100 rounded-b-md">
    <div className=" flex items-center rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  px-2 py-1 text-[20px] font-bold">
        <div className="flex flex-col items-center  translate-x-[-50%] ml-[15%] ">
            <img src="/images/machine.png" className=" " alt="" />
            <h2>OzoneMate</h2>
        </div>
        <div className="flex flex-col">
            <h2>Total Device</h2>
            <p className=" text-[70px] font-light text-[#707070] leading-[50px]">170</p>
        </div>
    </div>
    <div className=" flex items-center rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  px-2 py-1">

        <div className="flex flex-col items-center  translate-x-[-50%] ml-[15%] w-1/4  ">
            <img src="/images/online.png" className="  " alt="" />
            <div className=" relative">
                <h2>Online</h2>
                <p className=" text-[50px] font-light text-[#707070] absolute bottom-[-13px] ml-[103px]">140</p>
            </div>

        </div>

        <div className="flex flex-col items-center  translate-x-[-50%] ml-[25%] ">
            <img src="/images/offline.png" className="  " alt="" />
            <div className=" relative">
                <h2>Offline</h2>
                <p className=" text-[50px] font-light text-[#707070] absolute bottom-[-13px] ml-[103px]">30</p>

            </div>
        </div>

    </div>
    <div className=" flex items-center rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  px-2 py-1">
        <div className="flex flex-col items-center  translate-x-[-50%] ml-[15%] w-1/4  ">
            <img src="/images/warning.png" className="  " alt="" />
            <div className=" relative">
                <h2>Warning</h2>
                <p className=" text-[50px] font-light text-[#707070] absolute bottom-[-5px] ml-[112px]">20</p>
            </div>

        </div>

        <div className="flex flex-col items-center  translate-x-[-50%] ml-[25%] ">
            <img src="/images/maintencence.png" className="  " alt="" />
            <div className=" relative">
                <h2>Maintencence</h2>
                <p className=" text-[50px] font-light text-[#707070] absolute bottom-[-5px] right-[-54%]">10</p>

            </div>
        </div>

    </div>
    <div className=" flex flex-col rounded-[6px] min-h-[26%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  px-2 py-1 space-y-3">
        <div className="flex space-x-3">
            <div className="flex  items-center  translate-x-[-50%] ml-[15%] ">
                <img src="/images/cell.png" className=" " alt="" />
            </div>
            <div className=" flex flex-col">
                <h2>Cell Total Hours</h2>
                <p className=" text-[50px] font-light text-[#707070] ">1423510</p>
            </div>
        </div>
        <div className="flex space-x-3">
            <div className="flex  items-center  translate-x-[-50%] ml-[15%] ">
                <img src="/images/oxy.png" className=" " alt="" />
            </div>
            <div className=" flex flex-col">
                <h2>Oxy Total Hours</h2>
                <p className=" text-[50px] font-light text-[#707070] ">1423510</p>
            </div>
        </div>
    </div>
    <div className=" flex items-center space-x-3 rounded-[6px] min-h-[16%] shadow-md border-t-[3px] border-l-[3px] bg-gray-100 border-white shadow-gray-300  px-2 py-1">
        <div className="flex flex-col  items-center  translate-x-[-50%] ml-[15%] ">
            <img src="/images/location.png" className="" alt="" />
        </div>
        <div className="flex flex-col">
            <h2>Location</h2>
            <p className=" text-[50px] font-light text-[#707070]">50</p>
        </div>
    </div>
</div>)
}
export default overviewTab