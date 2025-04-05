import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const demographicsData = [
  {
    country: "India",
    flag: "/india.png",
    percentage: 40,
    color: "bg-purple-500",
  },
  { country: "USA", flag: "/usa.png", percentage: 25, color: "bg-orange-500" },
  {
    country: "Canada",
    flag: "/canada.png",
    percentage: 10,
    color: "bg-red-500",
  },
  { country: "UAE", flag: "/uae.png", percentage: 7, color: "bg-green-500" },
];

export default function Demographics() {
  return (
    <section className="p-6 h-full">
      <h5 className="text-white text-2xl font-bold mb-4">Demographics</h5>
      <div className=" flex items-center justify-between gap-6 space-y-3">
        {/* Left: Map Section */}

        {/* Map Image */}
        <Image
          src="/demo.PNG"
          alt="Demographics Map"
          width={700}
          height={400}
          className=""
        />

        {/* Right: Stats Section */}
        <div className="w-1/3 flex flex-col justify-between gap-5">
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
