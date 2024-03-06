import me from "../assets/2nd.jpg";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
export default function Hero() {
  let git = "https://github.com/christweaver";

  return (
    <div className="background h-screen flex trans ">
      <div className="flex flex-col ">
        <div className="ml-28 pt-12 ">
          <h1 className="text-[78px] font-semibold text-white  ">
            Hi, I&apos;m Christy!
          </h1>
          <h2 className="text-[40px] font-mono text-white">
            A frontend <span className="text-blue-500">developer</span> <br />
            who writes <span className="text-blue-500">clean</span> and{" "}
            <span className="text-blue-500">efficient</span> code.
          </h2>
        </div>
        <div className="ml-28 mt-14">
          <Link
            href="mailto:christyweaver.cw@gmail.com"
            className="buttonBackground mr-16 text-white text-[25px] py-3 px-12 w-[200px] h-full rounded-lg"
          >
            Get in Touch
          </Link>
          <Link
            href={git}
            className=" bg-indigo-800 text-[25px] text-white py-3 px-20 w-[200px] h-full rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="ml-36 mt-20 relative">
        <div className="-ml-8 -mt-6 rounded-md h-80 w-80 absolute border-white border-2"></div>
        <div className=" relative">
          <Image
            src={me}
            alt=""
            width={"auto"}
            height={320}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
