import React, { useState } from "react";
import { Button, mergeClasses, Text } from "@fluentui/react-components";
import { NavigationFilled, NavigationRegular } from "@fluentui/react-icons";
import { SideNav } from "./SideNav.tsx";
import { toolbarStyles } from "./Toolbar.styles.ts";

export const Toolbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const classes = toolbarStyles();

  return (
    <>
      <div className={classes.toolbar}>
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
      {navStatus && <SideNav status={navStatus} changeStatus={setNavStatus} />}
    </>
  );
};
