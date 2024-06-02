import React from "react";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Link,
  Text,
} from "@fluentui/react-components";
import { DismissFilled } from "@fluentui/react-icons";
import { toolbarStyles } from "./Toolbar.styles";
import { useNavigate } from "react-router-dom";
import { navData } from "../Routes";

interface SideNavProps {
  status: boolean;
  changeStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const raviGit = <Link href="https://github.com/ravighale77" style={{marginRight:'12px'}}>Ravi Ghale</Link>;
const darshGit = (
  <Link href="https://github.com/Darshana748">Darshana Chinde</Link>
);
const textFooter = (
  <div>
    {raviGit}
    {darshGit}
  </div>
);

export const SideNav = (props: SideNavProps) => {
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
        <div className={classes.drawerHeader}>
          {navData.map((item) => (
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
        </div>
        <Text font={"monospace"} className={classes.drawerFooter} size={300}>
          For more React projects check out {textFooter}
        </Text>
      </DrawerBody>
    </Drawer>
  );
};
