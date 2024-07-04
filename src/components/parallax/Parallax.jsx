import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import "./Parallax.css";

function Parallax() {
  const ref = useRef();

  useGSAP(
    () => {
      const parallaxtl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "50% 50%",
          end: "450% 50%",
          // markers: true,
          scrub: true,
          pin: true,
        },
      });
      // 'a ' gives taging to the animations should work simultaniously
      parallaxtl.to(
        ".svg",
        {
          maskSize: "500%",
        },
        "a"
      );

      parallaxtl.to(
        ".img",
        {
          height: "100%",
        },
        "a"
      );

      parallaxtl.to(
        ".svg2",
        {
          maskSize: "200%",
        },
        "b"
      );
      parallaxtl.to(
        ".img2",
        {
          height: "100%",
        },
        "b"
      );
      parallaxtl.to(
        ".svg3",
        {
          maskSize: "200%",
        },
        "c"
      );

      parallaxtl.to(
        ".img3",
        {
          height: "100%",
        },
        "c"
      );
    },
    { scope: ref }
  );
  // Defining Scope is important.

  return (
    <>
      <div ref={ref} className=" overflow-y-hidden">
        <div
          id="main"
          className="  relative text-black flex items-center justify-center object-cover  "
        >
          {/* change 1 start   */}
          <span className="  absolute flex sm:items-center sm:justify-center text-4xl sm:text-5xl font-Manrope text-center">
            <div>EXPERIENCE THE INTERIOR</div>
          </span>
         {/* change 1 start end  */}

          <div className="img flex items-end z-10  ">
            <div className="img2 flex items-end">
              <div className="img3 flex  items-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parallax;
