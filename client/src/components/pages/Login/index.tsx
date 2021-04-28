import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Button, Container, Input } from "semantic-ui-react";
import { authenticationSelectors, login, logout } from "./store";

// TODO: to understand
interface MatchParams {
  name: string;
}
type Props = RouteComponentProps<MatchParams>;

export const Login = (props: Props) => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();
  const userLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const userLogin = useCallback(() => dispatch(login(userInput)), [dispatch, userInput]);
  const auth = useSelector(authenticationSelectors.getAuthState);

  return auth.isLoggedIn ? (
    <Button onClick={userLogout}>Logout</Button>
  ) : (
    <Container>
      <Button onClick={userLogin}>Please login</Button>
      <Input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
    </Container>
  );
};

export default Login;
