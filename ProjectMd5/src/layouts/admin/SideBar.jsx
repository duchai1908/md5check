import React from "react";

export default function SideBar() {
  return (
    <>
      <aside
        id="app-menu"
        className="hs-overlay fixed inset-y-0 start-0 z-60 hidden w-sidenav min-w-sidenav -translate-x-full transform overflow-y-auto bg-default-900 transition-all duration-300 hs-overlay-open:translate-x-0 lg:bottom-0 lg:end-auto lg:z-30 lg:block lg:translate-x-0 rtl:translate-x-full rtl:hs-overlay-open:translate-x-0 rtl:lg:translate-x-0 print:hidden [--body-scroll:true] [--overlay-backdrop:true] lg:[--overlay-backdrop:false]"
      >
        <div className="sticky top-0 flex h-16 items-center justify-center px-6">
          <a href="index.html">
            <img
              src="/assets/images/logo-light.png"
              alt="logo"
              className="flex h-10"
            />
          </a>
        </div>
        <div className="h-[calc(100%-64px)] p-4" data-simplebar="">
          <ul className="admin-menu hs-accordion-group flex w-full flex-col gap-1.5">
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5"
                href="index.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  home
                </i>
                Dashboard
              </a>
            </li>
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-default-100/5"
                href="starter-page.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  article
                </i>
                <span className="menu-text"> Starter Pages </span>
              </a>
            </li>
            <li className="px-5 py-2 text-sm font-medium text-default-600">
              Elements
            </li>
            <li className="menu-item hs-accordion">
              <a
                href="javascript:void(0)"
                className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  grid_view
                </i>
                <span className="menu-text"> Components </span>
                <span className="i-tabler-chevron-right ms-auto text-sm transition-all hs-accordion-active:rotate-90" />
              </a>
              <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                <ul className="mt-2 space-y-2">
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-accordion.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Accordion
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-alerts.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Alert
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-avatars.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Avatars
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-buttons.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Buttons
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-badges.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Badges
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-breadcrumbs.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Breadcrumbs
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-cards.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Cards
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-collapse.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Collapse
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-dropdowns.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Dropdowns
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-progress.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Progress
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-spinners.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Spinners
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-skeleton.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Skeleton
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-ratio.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Ratio
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-modals.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Modals
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-offcanvas.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Offcanvas
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-popovers.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Popovers
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-tooltips.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Tooltips
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="ui-typography.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item hs-accordion">
              <a
                href="javascript:void(0)"
                className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  description
                </i>
                <span className="menu-text"> Forms </span>
                <span className="i-tabler-chevron-right ms-auto text-sm transition-all hs-accordion-active:rotate-90" />
              </a>
              <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                <ul className="mt-2 space-y-2">
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="forms-inputs.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Inputs</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="forms-check-radio.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Checkbox &amp; Radio</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="forms-masks.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Input Masks</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="forms-editor.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Editor</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="forms-validation.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Validation</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                      href="forms-layout.html"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Form Layout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5"
                href="maps-vector.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  map
                </i>
                <span className="menu-text"> Maps </span>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary"
                href="tables-basic.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  table_chart
                </i>
                <span className="menu-text"> Tables </span>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary"
                href="charts-apex.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  leaderboard
                </i>
                <span className="menu-text"> Chart </span>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5"
                href="icons.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  Palette
                </i>
                <span className="menu-text"> Icons </span>
              </a>
            </li>
            <li className="menu-item">
              <a
                className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5"
                href="pages-blank.html"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  article
                </i>
                Blank Pages
              </a>
            </li>
            <li className="menu-item hs-accordion">
              <a
                href="javascript:void(0)"
                className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  share
                </i>
                <span className="menu-text"> Level </span>
                <span className="i-tabler-chevron-right ms-auto text-sm transition-all hs-accordion-active:rotate-90" />
              </a>
              <div
                id="sidenavLevel"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              >
                <ul className="mt-2 space-y-2">
                  <li className="menu-item">
                    <a
                      href="javascript: void(0)"
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Item 1</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="javascript: void(0)"
                      className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                    >
                      <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75" />
                      <span className="menu-text">Item 2</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a
                href="javascript:void(0)"
                className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary"
              >
                <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">
                  verified
                </i>
                <span className="menu-text"> Badge Items </span>
                <span className="ms-auto inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded-md font-semibold text-xs bg-gray-800 text-white">
                  Hot
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
