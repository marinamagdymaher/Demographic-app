import Image from "next/image";


export default function Logo() {
  return (
    <div className="text-white pr-9 pl-3 py-6 border-b border-gray-500 h-16 flex justify-between">
      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <Image
          src="/Vertx New SVG 1 1 1.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
      </span>
      <h1 className="text-lg font-semibold">Vertxlabs, Inc</h1>
    </div>
  );
}
