import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="background min-h-full ">
      <Hero />
      <Projects />
    </div>
  );
}
