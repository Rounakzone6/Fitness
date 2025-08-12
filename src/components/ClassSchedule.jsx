import { classSchedule, schedule_bg } from "../assets";

const ClassSchedule = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${schedule_bg})` }}
    >
      <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center py-10 justify-center max-w-[95%] mx-auto">
        <hr className="w-[10vw] border-t-3 border-red-500" />
        <h2 className="text-4xl font-medium pt-2">Class Schedules</h2>
        <p className="text-center py-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy <br /> eirmod tempor invidunt ut labore.
        </p>
        <ul className="flex gap-4 flex-wrap items-center justify-center">
          {classSchedule.map((item) => (
            <li className="p-3 flex gap-2 flex-col border-gray-400 shadow w-full md:w-[20vw] border rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all duration-500" key={item.id}>
              <p className="text-2xl font-medium text-gray-500">{item.id}.</p>
              <p>{item.day}</p>
              <p className="text-2xl font-medium">{item.class}</p>
              <p className="text-xl font-light">{item.trainer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassSchedule;
