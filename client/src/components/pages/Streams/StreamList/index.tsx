import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "semantic-ui-react";
import { fetchStreams, streamSelector } from "../store";

export const StreamList = () => {
  const dispatch = useDispatch();
  const streams = useSelector(streamSelector.getAllStreams);

  useEffect(() => {
    dispatch(fetchStreams());
  });

  return (
    <List divided relaxed>
      {Object.values(streams).map((stream) => {
        return (
          <List.Item key={stream.id}>
            <List.Icon name="camera" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header>{stream.title}</List.Header>
              <List.Description>{stream.description}</List.Description>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};
