import { useCallback } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Button } from "semantic-ui-react";
import { RootState } from "../../../redux/reducers";
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
  const { authentication } = props;

  return authentication.isLoggedIn ? (
    <Button onClick={userLogout}>Logout</Button>
  ) : (
    <Button onClick={userLogin}>Please login</Button>
  );
};

const mapStateToProps = (state: RootState) => {
  return { authentication: authenticationSelectors.getAuthState(state) };
};
const mapDispatchToProps = {
  login,
  logout,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Login);
