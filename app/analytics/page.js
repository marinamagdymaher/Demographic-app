import Chart from "@/app/_components/Chart";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Demographics from "@/app/_components/Demographics";

const cardBaseClasses = "bg-black rounded-lg shadow-md border border-gray-700";

export default function Page() {
  return (
    <section className=" w-full h-full">
      <h5 className="text-2xl font-bold text-white mb-4">Overview</h5>
      <div className="grid grid-cols-4 grid-rows-4 gap-0 ">
        {/* div1: Chart (1 / 1 / 3 / 4) */}
        <div className="col-start-1 col-end-4 row-start-1 row-end-3 p-4">
          <div className={`${cardBaseClasses} w-full h-full`}>
            <Chart />
          </div>
        </div>

        {/* div2: Insights (1 / 4 / 3 / 5) */}
        <div className="col-start-4 col-end-5 row-start-1 row-end-3 p-4">
          <Insights />
        </div>

        {/* div3: Bottom Section (3 / 1 / 5 / 5) */}
        <div className="col-span-4 row-start-3 row-end-5 p-4">
          <div className={`${cardBaseClasses} w-full h-full`}>
            {/* Bottom content goes here */}
            <Demographics />
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const insightsData = [
    { title: "Founders", num: "7.4K" },
    { title: "Investors", num: "6.09K" },
  ];

  return (
    <div
      className={`${cardBaseClasses} p-4 w-full h-full flex flex-col justify-between`}
    >
      <div>
        <h5 className="text-2xl font-bold text-white mb-4">Insights</h5>
        <div className="flex flex-col gap-6">
          {insightsData.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <h3 className="text-3xl font-bold text-white">{item.num}</h3>
              </div>
              <div className="text-right text-sm text-gray-400 flex flex-col items-center ">
                <p className="text-[#01754F]">+000%</p>
                <span>(000)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end pt-6  border-t border-gray-700">
        <button className="text-white flex items-center gap-2 hover:underline">
          View detailed insights <FaArrowRight />
        </button>
      </div>
    </div>
  );
}


