import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import './Parallax.css'



function Parallax() {
  const ref = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "50% 50%",
          end: "450% 50%",
          markers: true,
          scrub: true,
          pin: true,
        },
      });
      // 'a ' gives taging to the animations should work simultaniously
      tl.to(
        ".svg",
        {
          maskSize: "500%",
        },
        "a"
      );

      tl.to(
        ".img",
        {
          height: "100%",
        },
        "a"
      );

      tl.to(
        ".svg2",
        {
          maskSize: "200%",
        },
        "b"
      );
      tl.to(
        ".img2",
        {
          height: "100%",
        },
        "b"
      );
      tl.to(
        ".svg3",
        {
          maskSize: "200%",
        },
        "c"
      );

      tl.to(
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
          className=" relative text-white flex items-end justify-center  "
        >
          <div className="img flex items-end  ">
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