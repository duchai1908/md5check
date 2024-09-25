import React from "react";

export default function Footer() {
  return (
    <footer className="footer h-16 flex items-center px-6 border-t border-gray-200">
      <div className="flex md:justify-between justify-center w-full gap-4">
        <div>© Windzon</div>
        <div className="md:flex hidden gap-2 item-center md:justify-end">
          Design &amp; Develop by
          <a href="#" className="text-primary">
            MyraStudio
          </a>
        </div>
      </div>
    </footer>
  );
}
