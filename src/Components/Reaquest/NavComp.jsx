import React from "react";
import logo from "./logoKhushel.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import Navleftbar from "./Navleftbar";
function NavComp() {
    return (
        <>
            <header class="text-gray-700 body-font border-b border-gray-200">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a
                        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                        href="https://tailblocks.cc"
                        target="_blank"
                    >
                        <img src={logo} className="w-30 h-10" />
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <FaArrowLeft />
                        <h1 className="mx-2">Good morning John</h1>
                        <form className="ml-4">
                            <input
                                type="search"
                                id="default-search"
                                class="block w-full  pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search"
                                required
                            />
                        </form>
                    </nav>
                    <div>
                        <button
                            type="button"
                            class="relative inline-flex items-center p-3 mx-2 text-sm font-medium text-center border-1   rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <MdOutlineNotifications />
                            <span class="sr-only">Notifications</span>
                            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                                01
                            </div>
                        </button>
                    </div>
                    <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
            <Navleftbar />
        </>
    );
}

export default NavComp;
