import React from "react";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Text,
} from "@fluentui/react-components";
import { DismissFilled } from "@fluentui/react-icons";
import { toolbarStyles } from "./Toolbar.styles.ts";
import { useNavigate } from "react-router-dom";
import { pageData } from "../Routes.tsx";

export const SideNav = (props) => {
  const classes = toolbarStyles();
  const navigate = useNavigate();
  const clickHandler = (link: string) => {
    navigate(link);
    props.changeStatus(false);
  };
  return (
    <Drawer open={props.status}>
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              icon={<DismissFilled />}
              onClick={() => props.changeStatus(false)}
            />
          }
        >
          Nagivate
        </DrawerHeaderTitle>
      </DrawerHeader>
      <DrawerBody className={classes.drawerBody}>
        {pageData.map((item) => (
          <Button
            appearance={"subtle"}
            className={classes.drawerButton}
            icon={item.icon}
            onClick={() => clickHandler(item.path)}
          >
            {item.title}
          </Button>
        ))}
        <Divider appearance={"strong"} className={classes.drawerDivider} />
        <Text></Text>
      </DrawerBody>
    </Drawer>
  );
};
