import React from "react";
import logo from "./logoKhushel.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import Navleftbar from "./Navleftbar";
import avaratImg from "./photo-1542909168-82c3e7fdca5c.jpeg";
import { Grid } from "@mui/material";
import NavRight from "./NavRight";
function NavComp() {
  return (
    <>
      <header class="text-gray-700 body-font border-b border-gray-200">
        <div class="container mr-24 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="https://tailblocks.cc"
            target="_blank"
            rel="sdkjf"
          >
            <img src={logo} className="w-30 h-10" alt="img" />
          </a>
          <nav class="md: ml-10 flex flex-wrap items-center text-base justify-center">
            <FaArrowLeft />
            <h1 className="mx-2 md:text-4*1 font-bold">Good morning John</h1>
            <form className=" ml-8">
              <input
                type="search"
                id="default-search"
                class="block w-full md: mr-28 pl-2 md text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </form>
          </nav>
          <div className="items-center ml-11">
            <div className="flex  space-x-6">
              <h1 className="font-bold text-md">Sa</h1>

              <h1 className="font-bold text-md">12</h1>
              <p className="font-extrabold text-md">:</p>
              <h1 className="font-bold text-md">59</h1>
              <p className="font-extrabold text-md">:</p>
              <h1 className="font-bold text-md">09</h1>
            </div>
            <div className="flex  ">
              <h2 className="text-gray text-sm ">day</h2>
              <h2 className="text-gray text-sm ml-4">hours</h2>
              <h2 className="text-gray text-sm ml-9">min</h2>
              <h2 className="text-gray text-sm ml-12">sec</h2>
            </div>
          </div>
          <div className=" ml-auto">
            <button
              type="button"
              class="relative mr-7 inline-flex items-center p-2 text-xl font-medium text-center border-2 border-gray-500/25    rounded-lg focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MdOutlineNotifications />
              <span class="sr-only">Notifications</span>
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs  font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                01
              </div>
            </button>
          </div>

          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-1"
              src={avaratImg}
              alt="Rounded avatar"
            />

            <button
              id="dropdownDelayButton"
              data-dropdown-toggle="dropdownDelay"
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
              class="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              John Deo
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownDelay"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDelayButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Grid container>
          <Grid xs={2}>
            <Navleftbar />
          </Grid>
          <Grid>
            <NavRight />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default NavComp;
