import React, { useState } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

import { LocationForm } from "./LocationForm";

import { Title, SubInfo, MainWrapper } from "../../../CommonStyles";

export const UserInfo = ({ chosen }) => {
  const [visibleRight, setVisibleRight] = useState(false);

  const { locName, addr1, addr2, city, zip, phone, email, zoneName } = chosen;

  return (
    <React.Fragment>
      <Sidebar
       
        className="p-sidebar-md"
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <LocationForm  chosen={chosen} />
      </Sidebar>
      <Button
        icon="pi pi-arrow-left"
        label="Edit"
        onClick={() => setVisibleRight(true)}
        className="mr-2"
      />
      <MainWrapper>
        <Title>{locName}</Title>

        <div></div>
        <div>
          <SubInfo>{addr1}</SubInfo>
          <SubInfo>{addr2}</SubInfo>
          <SubInfo>{city}</SubInfo>
          <SubInfo>{zip}</SubInfo>
        </div>
        <div>
          <SubInfo>{phone}</SubInfo>
          <SubInfo>{email}</SubInfo>
          <SubInfo>{zoneName}</SubInfo>
        </div>
      </MainWrapper>
    </React.Fragment>
  );
};