import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <nav className="flex justify-between bg-yellow-50 w-full p-4">
        <h3 className="font-bold">Logo</h3>
        <ul className="text-style-none flex gap-4">
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </nav>
      <main className="w-full">{props.children}</main>
    </div>
  );
};

export default Layout;
