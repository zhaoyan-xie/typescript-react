import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { StreamCreate } from "./pages/StreamCreate";
import { StreamDelete } from "./pages/StreamDelete";
import { StreamEdit } from "./pages/StreamEdit";
import { StreamList } from "./pages/StreamList";
import { StreamShow } from "./pages/StreamShow";
import { Header } from "./shared/Header";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
