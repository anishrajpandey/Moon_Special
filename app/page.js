import Image from "next/image";
import MoonBackground from "./MoonBackground";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative grid ">
      <div className="">
        <MoonBackground />
      </div>
      <section className="text-white h-[62vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-45 p-12 rounded-lg outline-orange-400  text-2xl  z-10">
        {" "}
        “The way I love you is inexplicable. It’s so much more than just wanting
        to be with you. I need you, because without you, something will always
        be missing in this life, just out of reach. Because you make everything
        better, and everything makes sense.”
      </section>
    </main>
  );
}
