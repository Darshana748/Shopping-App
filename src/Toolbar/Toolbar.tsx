import React, { useState } from "react";
import {
  Button,
  Divider,
  mergeClasses,
  SearchBox,
  Text,
} from "@fluentui/react-components";
import { NavigationFilled, NavigationRegular } from "@fluentui/react-icons";
import { SideNav } from "./SideNav";
import { toolbarStyles } from "./Toolbar.styles";

export const Toolbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const classes = toolbarStyles();

  return (
    <>
      <div className={classes.toolbar}>
        <div className={classes.toolbarStart}>
          <Button
            icon={<NavigationFilled />}
            onClick={() => setNavStatus(true)}
            appearance={"subtle"}
            className={mergeClasses(classes.toolbarItem, classes.toolbarButton)}
          />
          <Text size={500} weight={"semibold"} className={classes.toolbarItem}>
            MegaMart
          </Text>
        </div>
        <div className={classes.toolbarEnd}>
          <SearchBox />
          <Divider vertical/>
        </div>
      </div>
      {navStatus && <SideNav status={navStatus} changeStatus={setNavStatus} />}
    </>
  );
};
