import { counter_bg, statistics } from "../assets";
import { FaThumbsUp, FaTrophy, FaUsers } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div
      className="relative py-10 bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${counter_bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <ul className="relative z-10 flex justify-around py-10">
        {statistics.map((item, index) => (
          <li key={index} className="flex flex-col gap-2">
            <item.logo className="text-6xl" />
            <p className="text-2xl">
              <CountUp
                end={item.counter}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
            </p>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
