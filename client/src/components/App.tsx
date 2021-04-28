import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import StreamCreate from "./pages/Streams/StreamCreate";
import { StreamDelete } from "./pages/Streams/StreamDelete";
import { StreamEdit } from "./pages/Streams/StreamEdit";
import { StreamList } from "./pages/Streams/StreamList";
import { StreamShow } from "./pages/Streams/StreamShow";
import { Header } from "./shared/Header";
import "semantic-ui-css/semantic.min.css";
import Login from "./pages/Login";
import { QR } from "./pages/QR";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/qr" exact component={QR} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/login" exact component={Login} />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
