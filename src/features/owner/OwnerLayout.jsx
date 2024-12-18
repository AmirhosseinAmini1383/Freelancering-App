import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavLink>
        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
