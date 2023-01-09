import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
const DeviceDashboard = () => {
  return (
    <div className=" flex flex-col px-[35px] h-full justify-between">
      <div className=" justify-around px-[12px] flex w-[656px] h-[226px] bg-[#F5F5F5] shadow-md   border-white shadow-gray-300 border-t-[2px] border-l-[2px] rounded-[6px]">
        <div className=" flex flex-col justify-center">
          <p className=" text-[24px] font-bold text-[##636363]">Cell</p>
          <img src="/images/sun-dashboard.png" alt="" />
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">1</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">2</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">3</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">4</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <div className=" justify-around px-[12px] flex w-[656px] h-[226px] bg-[#F5F5F5] shadow-md   border-white shadow-gray-300 border-t-[2px] border-l-[2px] rounded-[6px]">
        <div className=" flex flex-col justify-center">
          <p className=" text-[24px] font-bold text-[##636363]">Oxy</p>
          <img src="/images/oxy-dashboard.png" alt="" />
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">1</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">2</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">3</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <p className="text-[#636363] font-bold text-[24px] text-center">4</p>
          <div className=" p-[4px] w-[130px] shadow-md   border-white shadow-gray-300 border-b-[1px] border-l-[1px] rounded-[100px] h-[130px] ">
            <CircularProgressbarWithChildren
              counterClockwise
              value={25}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: "#009B00",
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "94%" }}>
                <CircularProgressbarWithChildren
                  counterClockwise
                  value={25}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: "#01B701",
                    trailColor: "transparent",
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ width: "90%" }}>
                    <CircularProgressbarWithChildren
                      counterClockwise
                      className=" z-20 relative "
                      value={25}
                      strokeWidth={20}
                      styles={buildStyles({
                        pathColor: "#00F500",
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                      })}
                    >
                      <div className="  w-[85%] h-[85%] rounded-[100px] flex items-center justify-center bg-[#DBDBDB] z-10">
                        <div className=" bg-[#F5F5F5] w-[60%] h-[60%]  shadow-inner rounded-[100px]  flex flex-col text-center text-[12px] font-bold items-center justify-center text-[#00A300]">
                          <p>0</p>
                          <p>Hours</p>
                        </div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>

      <div className=" flex w-[656px] h-[226px] bg-[#F5F5F5] shadow-md   border-white shadow-gray-300 border-t-[3px] border-l-[3px] rounded-[6px]"></div>
    </div>
  );
};
export default DeviceDashboard;
