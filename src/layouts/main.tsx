import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <main className="main-layout">
      <Outlet />
    </main>
  );
};

export default MainLayout;
