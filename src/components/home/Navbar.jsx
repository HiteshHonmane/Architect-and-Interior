import React from "react";

const NAV_LINK_CLASSES = "py-2 text-sm text-zinc-900 font-semibold";
const SUB_NAV_LINK_CLASSES = "block py-1 text-sm text-zinc-700";

const Navbar = ({navWidth}) => {
  return (
    <nav className="bg-white shadow-lg  h-full flex justify-center items-center  absolute z-40 ">
      <div className="container mx-auto px-6 py-3 flex justify-center">
        <div className="text-zinc-700">
          <div className="flex flex-col">
            <a href="#" className={NAV_LINK_CLASSES}>
              HOME
            </a>
            <a href="#" className={NAV_LINK_CLASSES}>
              ABOUT
            </a>
            <div className="py-2">
              <span className="text-sm text-zinc-900 font-semibold">
                SERVICES
              </span>
              <div className="ml-4">
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  ALL
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  ARCHITECTURAL DESIGN
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  INTERIOR DESIGN
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  URBAN PLANNING
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  LANDSCAPING DESIGN
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  CONSTRUCTION MANAGEM.
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  BUILDING RENOVATION
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  LIGHTING DESIGN
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  FEASIBILITY STUDIES
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  BUILDING CODE COMPLIANCE
                </a>
                <a href="#" className={SUB_NAV_LINK_CLASSES}>
                  3D VISUALIZATION
                </a>
              </div>
            </div>
            <a href="#" className={NAV_LINK_CLASSES}>
              PROJECTS
            </a>
            <a href="#" className={NAV_LINK_CLASSES}>
              GALLERY
            </a>
            <a href="#" className={NAV_LINK_CLASSES}>
              BLOGS
            </a>
            <a href="#" className={NAV_LINK_CLASSES}>
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
