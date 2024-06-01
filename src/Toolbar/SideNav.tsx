import React from "react";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import {
  BoxFilled,
  BoxRegular,
  Dismiss24Regular,
  DismissFilled,
  HomeFilled,
  HomeRegular,
  PersonCallFilled,
  PersonCallRegular,
  PersonQuestionMarkFilled,
  PersonQuestionMarkRegular,
} from "@fluentui/react-icons";
import { toolbarStyles } from "./Toolbar.styles.ts";

export const SideNav = (props) => {
  const classes = toolbarStyles();
  return (
    <Drawer open={props.status} >
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
        <Button
          appearance={"subtle"}
          className={classes.drawerButton}
          icon={<HomeFilled />}
          href={"/"}
          onClick={() => props.changeStatus(false)}
        >
          Home
        </Button>
        <Button
          appearance={"subtle"}
          className={classes.drawerButton}
          icon={<BoxFilled />}
          href={"/our-products"}
          onClick={() => props.changeStatus(false)}
        >
          Our Products
        </Button>
        <Button
          appearance={"subtle"}
          className={classes.drawerButton}
          icon={<PersonCallFilled />}
          href={"/contact-us"}
          onClick={() => props.changeStatus(false)}
        >
          Contact Us
        </Button>
        <Button
          appearance={"subtle"}
          className={classes.drawerButton}
          icon={<PersonQuestionMarkFilled />}
          href={"/about-us"}
          onClick={() => props.changeStatus(false)}
        >
          About Us
        </Button>
        <Divider
          appearance={"strong"}
          alignContent="start"
          className={classes.drawerDivider}
        />
      </DrawerBody>
    </Drawer>
  );
};
