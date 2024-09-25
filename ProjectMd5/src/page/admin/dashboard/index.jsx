import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* Page Title Start */}
      <div className="flex items-center md:justify-between flex-wrap gap-2 mb-6">
        <h4 className="text-default-900 text-lg font-medium mb-2">Dashboard</h4>
      </div>
      {/* Page Title End */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
        <div className="card group">
          <div className="p-5 flex items-center justify-between">
            <span>
              <div className="text-slate-600 font-semibold block">
                Total Order
              </div>
              <div className="text-2xl text-slate-800 font-semibold mt-2">
                $2198
              </div>
            </span>
            <span className="rounded-full flex justify-center items-center size-16 bg-primary/10 text-primary">
              <i className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">
                person
              </i>
            </span>
          </div>
        </div>
        {/*end*/}
        <div className="card group">
          <div className="p-5 flex items-center justify-between">
            <span>
              <div className="text-slate-600 font-semibold block">
                Today's Sales
              </div>
              <div className="text-2xl text-slate-800 font-semibold mt-2">
                $150
              </div>
            </span>
            <span className="rounded-full flex justify-center items-center size-16 bg-success/10 text-success">
              <i className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">
                shopping_cart
              </i>
            </span>
          </div>
        </div>
        {/*end*/}
        <div className="card group">
          <div className="p-5 flex items-center justify-between">
            <span>
              <div className="text-slate-600 font-semibold block">
                Today's Revenue{" "}
              </div>
              <div className="text-2xl text-slate-800 font-semibold mt-2">
                $1200
              </div>
            </span>
            <span className="rounded-full flex justify-center items-center size-16 bg-info/10 text-info">
              <i className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">
                favorite
              </i>
            </span>
          </div>
        </div>
        {/*end*/}
        <div className="card group">
          <div className="p-5 flex items-center justify-between">
            <span>
              <div className="text-slate-600 font-semibold block">
                Today's Visits{" "}
              </div>
              <div className="text-2xl text-slate-800 font-semibold mt-2">
                7.2k
              </div>
            </span>
            <span className="rounded-full flex justify-center items-center size-16 bg-danger/10 text-danger">
              <i className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">
                visibility
              </i>
            </span>
          </div>
        </div>
        {/*end*/}
      </div>
    </>
  );
}
