import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  mergeClasses,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  SearchBox,
  teamsDarkTheme,
  teamsLightTheme,
  Text,
  Theme,
} from "@fluentui/react-components";
import {
  ArrowExitFilled,
  bundleIcon,
  NavigationFilled,
  WeatherMoonFilled,
  WeatherMoonRegular,
  WeatherSunnyFilled,
  WeatherSunnyRegular,
} from "@fluentui/react-icons";
import { SideNav } from "./SideNav";
import { toolbarStyles } from "./Toolbar.styles";
import { useNavigate } from "react-router-dom";

interface ToolbarProps {
  theme: Theme;
  changeTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const Toolbar = (props: ToolbarProps) => {
  const [navStatus, setNavStatus] = useState(false);
  const classes = toolbarStyles();
  const navigate = useNavigate();

  const Moon = bundleIcon(WeatherMoonFilled, WeatherMoonRegular);
  const Sun = bundleIcon(WeatherSunnyFilled, WeatherSunnyRegular);

  const themeIcon = props.theme === teamsLightTheme ? <Moon /> : <Sun />;

  const changeTheme = () => {
    if (props.theme === teamsLightTheme) {
      props.changeTheme(teamsDarkTheme);
    } else {
      props.changeTheme(teamsLightTheme);
    }
  };

  const popOverHeader = (
    <div className={classes.popHeader}>
      <div className={classes.popAvatar}>
        <Avatar name="Ravi Ghale" color={"colorful"} size={64} />
      </div>
      <div className={classes.popContent}>
        <Text size={400} weight={"semibold"}>
          Ravi Ghale
        </Text>
        <Text size={300} weight={"medium"}>
          ravighale777@gmail.com
        </Text>
      </div>
    </div>
  );

  const popOverFooter = (
    <div className={classes.popFooter}>
      <Button icon={<ArrowExitFilled />} appearance={"subtle"}>
        Sign Out
      </Button>
      <Button icon={themeIcon} appearance={"subtle"} onClick={changeTheme} />
    </div>
  );

  const popOver = (
    <Popover>
      <PopoverTrigger>
        <Avatar
          name="Ravi Ghale"
          color={"colorful"}
          className={classes.toolbarItem}
        />
      </PopoverTrigger>
      <PopoverSurface >
        <div className={classes.popSurface}>
          {popOverHeader}
          {popOverFooter}
        </div>
      </PopoverSurface>
    </Popover>
  );

  const toolbarEndItems = (
    <>
      <SearchBox className={classes.toolbarItem} />
      <Divider vertical appearance={"strong"} className={classes.toolbarItem} />
      <Button
        appearance={"secondary"}
        className={classes.toolbarItem}
        onClick={() => navigate("/login")}
      >
        Sign Up
      </Button>
      <Button
        appearance={"primary"}
        className={classes.toolbarItem}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Divider vertical appearance={"strong"} className={classes.toolbarItem} />
    </>
  );

  const toolbarStartItems = (
    <>
      <Button
        icon={<NavigationFilled />}
        onClick={() => setNavStatus(true)}
        appearance={"subtle"}
        className={mergeClasses(classes.toolbarItem, classes.toolbarButton)}
      />
      <Text
        size={500}
        weight={"semibold"}
        className={mergeClasses(classes.toolbarItem, classes.toolbarTitle)}
        onClick={() => navigate("/")}
      >
        MegaMart
      </Text>
    </>
  );

  return (
    <>
      <div className={classes.toolbar}>
        <div className={classes.toolbarStart}>{toolbarStartItems}</div>
        <div className={classes.toolbarEnd}>
          {toolbarEndItems}
          {popOver}
        </div>
      </div>
      <SideNav status={navStatus} changeStatus={setNavStatus} />
    </>
  );
};
