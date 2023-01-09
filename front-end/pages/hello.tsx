import { CircularProgressbar } from "react-circular-progressbar";

const hello = () => {
  const percentage = 66;
  return (
    <div className=" w-[250px] h-[250px]">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
};
export default hello;
