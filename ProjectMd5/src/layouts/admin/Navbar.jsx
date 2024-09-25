import React from "react";

export default function Navbar() {
  return (
    <header className="app-header">
      <div className="h-16 flex items-center px-5 gap-4 bg-white lg:rounded-t-xl border-b border-default-100">
        {/* Topbar Brand Logo */}
        <a className="md:hidden flex" href="index.html">
          <img
            src="/assets/images/logo-sm.png"
            className="h-6"
            alt="Small logo"
          />
        </a>
        {/* Sidenav Menu Toggle Button */}
        <button
          id="button-toggle-menu"
          className="text-default-500 hover:text-default-600 p-2 rounded-full cursor-pointer"
          data-hs-overlay="#app-menu"
          aria-label="Toggle navigation"
        >
          <i className="i-tabler-menu-2 text-2xl" />
        </button>
        {/* Language Dropdown Button */}
        <div className="ms-auto hs-dropdown relative inline-flex [--placement:bottom-right]">
          <button
            type="button"
            className="hs-dropdown-toggle inline-flex items-center"
          >
            <img
              src="/assets/images/flags/us.jpg"
              alt="user-image"
              className="h-4 w-6"
            />
          </button>
          <div className="hs-dropdown-menu duration mt-2 min-w-48 rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 hidden">
            <a
              href="javascript:void(0);"
              className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
            >
              <img
                src="/assets/images/flags/germany.jpg"
                alt="user-image"
                className="h-4"
              />
              <span className="align-middle">German</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
            >
              <img
                src="/assets/images/flags/italy.jpg"
                alt="user-image"
                className="h-4"
              />
              <span className="align-middle">Italian</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
            >
              <img
                src="/assets/images/flags/spain.jpg"
                alt="user-image"
                className="h-4"
              />
              <span className="align-middle">Spanish</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
            >
              <img
                src="/assets/images/flags/russia.jpg"
                alt="user-image"
                className="h-4"
              />
              <span className="align-middle">Russian</span>
            </a>
          </div>
        </div>

        {/* Profile Dropdown Button */}
        <div className="relative">
          <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
            <button
              type="button"
              className="hs-dropdown-toggle nav-link flex items-center gap-2"
            >
              <img
                src="/assets/images/users/avatar-4.jpg"
                alt="user-image"
                className="rounded-full h-10"
              />
              <i className="i-tabler-chevron-down text-sm ms-2" />
            </button>
            <div className="hs-dropdown-menu duration mt-2 min-w-48 rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 hidden">
              <a
                className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                href="#"
              >
                Profile
              </a>
              <a
                className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                href="#"
              >
                Feed
              </a>
              <a
                className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                href="#"
              >
                Analytics
              </a>
              <a
                className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                href="#"
              >
                Settings
              </a>
              <a
                className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                href="#"
              >
                Support
              </a>
              <hr className="my-2" />
              <a
                className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                href="#"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
