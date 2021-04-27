import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";

enum MenuName {
  Home = "home",
  Streams = "streams",
  Login = "login",
  QR = "qr",
}
const menuItems: MenuItemProps[] = [
  { pathName: "/", name: MenuName.Home },
  { pathName: "/streams", name: MenuName.Streams },
  { pathName: "/qr", name: MenuName.QR },
  { pathName: "/login", name: MenuName.Login, position: "right" },
];
export const Header = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Menu pointing>
      {menuItems.map((item) => {
        return (
          <Menu.Item
            key={item.pathName}
            name={item.name}
            active={location.pathname === item.pathName}
            onClick={() => history.push(item.pathName)}
            position={item.position}
          />
        );
      })}
    </Menu>
  );
};
