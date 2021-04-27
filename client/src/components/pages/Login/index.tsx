import { useCallback } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Button } from "semantic-ui-react";
// import { RootState } from "../../../redux/reducers";
import { authenticationSelectors, login, logout } from "./store";

type ReduxProps = ConnectedProps<typeof connector>;
interface MatchParams {
  name: string;
}
type Props = RouteComponentProps<MatchParams> & ReduxProps;

export const Login = (props: Props) => {
  const dispatch = useDispatch();
  const userLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const userLogin = useCallback(() => dispatch(login()), [dispatch]);
  const auth = useSelector(authenticationSelectors.getAuthState);

  return auth.isLoggedIn ? (
    <Button onClick={userLogout}>Logout</Button>
  ) : (
    <Button onClick={userLogin}>Please login</Button>
  );
};

const mapDispatchToProps = {
  login,
  logout,
};
const connector = connect(null, mapDispatchToProps);
export default connector(Login);
