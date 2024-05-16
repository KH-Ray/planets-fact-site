"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const linkMobileNavStyle = "py-6 px-2 flex justify-between items-center";

function ChevronRight() {
  return (
    <div>
      <Image
        src="/assets/icon-chevron.svg"
        alt="mobile link icon"
        width={12}
        height={16}
      />
    </div>
  );
}

function LinkMobileNav({ planet, openMobileNav, setOpenMobileNav }) {
  let planetColor = "w-5 h-5 block rounded-full ";

  switch (planet) {
    case "mercury":
      planetColor += "bg-mercury";
      break;

    case "venus":
      planetColor += "bg-venus";
      break;

    case "earth":
      planetColor += "bg-earth";
      break;

    case "mars":
      planetColor += "bg-mars";
      break;

    case "jupiter":
      planetColor += "bg-jupiter";
      break;

    case "saturn":
      planetColor += "bg-saturn";
      break;

    case "uranus":
      planetColor += "bg-uranus";
      break;

    case "neptune":
      planetColor += "bg-neptune";
      break;

    default:
      break;
  }

  return (
    <Link
      href={`/${planet}`}
      onClick={() => setOpenMobileNav(!openMobileNav)}
      className={linkMobileNavStyle}
    >
      <div className="flex items-center justify-center gap-4 uppercase">
        <div className={planetColor}></div>
        <div>{planet}</div>
      </div>
      <ChevronRight />
    </Link>
  );
}

export default function NavBar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <>
      <nav className="mb-32 border-b-2 border-solid border-dark-gray">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 p-4 md:flex-col md:gap-y-8 lg:flex-row">
          <h1 className="font-antonio text-2xl font-semibold">THE PLANETS</h1>

          <div className="hidden gap-8 font-spartan text-xs font-bold tracking-widest text-light-gray md:flex">
            <Link href="/mercury">MERCURY</Link>
            <Link href="/venus">VENUS</Link>
            <Link href="/earth">EARTH</Link>
            <Link href="/mars">MARS</Link>
            <Link href="/jupiter">JUPITER</Link>
            <Link href="/saturn">SATURN</Link>
            <Link href="/uranus">URANUS</Link>
            <Link href="/neptune">NEPTUNE</Link>
          </div>

          <button
            onClick={() => setOpenMobileNav(!openMobileNav)}
            className="md:hidden"
          >
            <Image
              src="/assets/icon-hamburger.svg"
              alt="hamburger icon"
              width={24}
              height={17}
              className="!fill-red-500 !stroke-red-500"
            />
          </button>
        </div>

        {openMobileNav && (
          <div className="fixed top-0 z-10 min-h-screen w-full bg-main-black md:hidden">
            <div className="border-b-2 border-solid border-dark-gray">
              <div className="flex justify-between p-4">
                <h1 className="font-antonio text-2xl font-semibold">
                  THE PLANETS
                </h1>
                <button
                  onClick={() => setOpenMobileNav(!openMobileNav)}
                  className="md:hidden"
                >
                  <Image
                    src="/assets/icon-hamburger.svg"
                    alt="hamburger icon"
                    width={24}
                    height={17}
                    className="!fill-red-500 !stroke-red-500"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col divide-y-2 divide-dark-gray p-4 font-spartan text-xl font-semibold tracking-widest">
              <LinkMobileNav
                planet="mercury"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="venus"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="earth"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="mars"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="jupiter"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="saturn"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="uranus"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
              <LinkMobileNav
                planet="neptune"
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
