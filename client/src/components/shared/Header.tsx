import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";

enum MenuName {
  Home = "home",
  Streams = "streams",
  Login = "login",
}
export const Header = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Menu pointing>
      <Menu.Item name={MenuName.Home} active={location.pathname === "/"} onClick={() => history.push("/")}>
        {MenuName.Home}
      </Menu.Item>
      <Menu.Item
        name={MenuName.Streams}
        active={location.pathname === "/streams"}
        onClick={() => history.push("/streams")}
      >
        {MenuName.Streams}
      </Menu.Item>
      <Menu.Item
        position="right"
        name={MenuName.Login}
        active={location.pathname === "/login"}
        onClick={() => history.push("/login")}
      >
        {MenuName.Login}
      </Menu.Item>
    </Menu>
  );
};
