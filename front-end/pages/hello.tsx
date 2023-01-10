import { CircularProgressbar } from "react-circular-progressbar";

const hello = () => {
  const percentage = 66;
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div id="logo">
      <div id="j" className=" items-center" ></div>

        <span className="needle"></span>
      </div>
    </div>
  );
};
export default hello;
