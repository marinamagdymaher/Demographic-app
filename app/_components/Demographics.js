import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const demographicsData = [
  {
    country: "India",
    flag: "/india.png",
    percentage: 40,
    color: "bg-[#4834D4]",
  },
  { country: "USA", flag: "/usa.png", percentage: 25, color: "bg-[#BD5302]" },
  {
    country: "Canada",
    flag: "/canada.png",
    percentage: 10,
    color: "bg-[#E9C16B]",
  },
  { country: "UAE", flag: "/uae.png", percentage: 7, color: "bg-[#01754F]" },
];

export default function Demographics() {
  return (
    <section className="p-6">
      <h5 className="text-white text-2xl font-bold mb-4">Demographics</h5>
      <div className=" flex justify-between items-end flex-col lg:flex-row gap-6 space-y-3 w-full h-full">
        {/* Left: Map Section */}
        <div className="w-full flex flex-col justify-between gap-5">
          <Image
            src="/earth.jpg"
            alt="Demographics Map"
            width={700}
            height={400}
            className="object-cover rounded-xl"
          />
          <div className="flex items-center justify-center h-10 lg:w-96 gap-3 border border-gray-700 rounded-full ">
            {demographicsData.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`w-3 h-3 md:w-6 md:h-6 rounded-full ${item.color}`}></span>
                <span className="lg:text-lg font-medium">{item.country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stats Section */}
        <div className="w-full flex flex-col justify-between gap-5">
          {demographicsData.map((data, index) => (
            <div
              key={index}
              className={`flex gap-4  ${
                index === demographicsData.length - 1 ? "mb-6" : ""
              }`} // Add extra margin for last item (UAE)
            >
              {/* Country Name & Percentage */}
              <Image
                src={data.flag}
                alt={data.country}
                width={50}
                height={50}
              />
              <div className="w-full flex flex-col items-center gap-4">
                <div className="w-full flex justify-between items-center">
                  <span className="text-white text-md">{data.country}</span>
                  <span className="ml-auto text-gray-400 text-sm">
                    {data.percentage}%
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 h-1.5 rounded-full mt-1">
                  <div
                    className={`h-1.5 rounded-full ${data.color}`}
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          {/* View More Button with Extra Space */}
          <div className="border-t border-gray-700 pt-6">
            {" "}
            {/* Increased pt-6 for more space */}
            <button className="flex items-center text-white text-sm justify-end w-full">
              View all countries <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
