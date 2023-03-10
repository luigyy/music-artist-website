import "./App.css";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
//
import { useEffect, useState } from "react";
import { useCursorContext } from "./contexts/CursorContext";
import Merch from "./components/Merch";
import Footer from "./components/Footer";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { isHovering } = useCursorContext();
  useEffect(() => {
    function followCursor(e: MouseEvent) {
      const { clientX, clientY } = e;

      setPos({ x: clientX, y: clientY });
    }

    window.addEventListener("mousemove", followCursor);

    return () => {
      window.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = {
    transform: `translate(${pos.x}px, ${pos.y + scrollY}px)`,
  };
  return (
    <div className=" relative overflow-hidden">
      {/* cursor follower */}
      <div
        style={followCursor}
        className={`${
          isHovering ? "w-24 h-24" : "w-0 h-0 opacity-0"
        } absolute transition-all ease-out duration-[3s] flex justify-center items-center text-2xl font-anton text-zinc-200 tracking-widest border-4 border-zinc-200 z-50 rounded-full`}
      >
        <p>{isHovering}</p>{" "}
      </div>
      {/* cursor follower */}

      <Hero />
      <Section1 width={pos.x} />
      <Section2 />
      <Merch />
      <Footer />
    </div>
  );
}

export default App;
