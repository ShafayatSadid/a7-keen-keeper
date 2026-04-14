import Friends from "@/components/Friends/Friends";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-[#F8FAFC] ">
        <Hero/>
        <Friends/>
      </main>
    </div>
  );
}
