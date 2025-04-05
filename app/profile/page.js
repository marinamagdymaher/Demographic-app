import { IoPerson } from "react-icons/io5";
import Image from "next/image";

export default function Page() {
  return (
    <section className="w-full grid grid-cols-4 grid-rows-4 gap-6">
      <div className="col-span-4 row-span-2 ">
        <ProfilePerson />
      </div>
      <div className="col-span-2 row-span-2 ">
        <FoundedCo />
      </div>
      <div className="col-span-2 row-span-2 ">
        <Experience />
      </div>
    </section>
  );
}

function ProfilePerson() {
  const socialIcons = [
    "/Rectangle 26.png",
    "/twitter-logo-2 1.png",
    "/gmail-icon-logo 1.png",
  ];

  return (
    <div className="space-y-3">
      <h5 className="text-2xl font-bold text-white">Overview</h5>
      <div className="bg-black p-6 flex items-center gap-8 rounded-lg shadow-md border border-gray-700">
        <IoPerson className="w-32 h-32 text-3xl" />
        <div className="flex flex-col justify-between gap-2">
          <h6 className="text-lg font-semibold">Mr A</h6>
          <p className="text-sm flex gap-2">
            Co-Founder & CEO @Vertx
            <Image
              src="/Group 36.png"
              alt="social-icon"
              width={15}
              height={15}
            />
          </p>
          <span className="bg-white text-black w-20 p-1 text-xs rounded-md font-medium">
            Entrepreneur
          </span>
          <div className="flex gap-3 py-5">
            {socialIcons.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="social-icon"
                width={30}
                height={30}
                className="opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FoundedCo() {
  return (
    <div className="bg-black p-6 flex flex-col gap-6 rounded-lg shadow-md border border-gray-700">
      <h5 className="text-xl font-bold text-white">Founded Companies</h5>
      <h3 className="text-6xl font-bold text-white">02</h3>
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
            <Image
              src="/Group 7.png"
              alt="company-logo"
              width={30}
              height={30}
            />
          </div>
          <div>
            <p className="font-semibold text-white">Vertx</p>
            <p className="text-gray-400 text-sm">
              Founded in 2025 in <span className="font-semibold">Fintech</span>.
            </p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          View Profile
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm"></div>
          <div>
            <p className="font-semibold text-white">Company 1</p>
            <p className="text-gray-400 text-sm">
              Details/Information <br /> like acquired /exit/m&a
            </p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          View Profile
        </button>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md border border-gray-700">
      <h5 className="text-2xl font-bold text-white">Experience</h5>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="flex justify-between items-start gap-3 py-5">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm" />
            <div>
              <p className="font-semibold text-white">Company 1</p>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
}
