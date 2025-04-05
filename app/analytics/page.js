import Chart from "@/app/_components/Chart";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Demographics from "@/app/_components/Demographics";
import ButtonLink from "../_components/ButtonLink";

const cardBaseClasses = "bg-black rounded-lg shadow-md border border-gray-700";

export default function Page() {
  return (
    <section className="w-full h-full">
      <h5 className="text-2xl font-bold text-white mb-4">Overview</h5>

      <div className="grid grid-cols-4 grid-rows-2 gap-6 lg:grid-cols-4 lg:grid-rows-2 w-full h-full">
        <div
          className={`col-start-1 col-end-5 row-start-1 row-end-2 lg:col-span-3 lg:row-span-2 w-full${cardBaseClasses}`}
        >
          <Chart />
        </div>

        <div
          className={`col-start-1 col-end-5 row-start-2 row-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3 ${cardBaseClasses}`}
        >
          <Insights />
        </div>

        <div
          className={`col-start-1 col-end-5 row-start-3 row-end-4 lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4 ${cardBaseClasses}`}
        >
          <Demographics />
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
        <div className="flex justify-between">
          <h5 className="text-2xl font-bold text-white mb-4">Insights</h5>
          <button className="lg:hidden h-8 w-32 border border-gray-500 rounded-full text-left px-3">
            Visitors
          </button>
        </div>
        <div className="flex justify-between flex-row lg:flex-col gap-6 pb-6">
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
