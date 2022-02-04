import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import ThemeContextWrapper from "./themes/contextWrapper";

const Home = React.lazy(() => import("./routes/App/components/App"));
const Details = React.lazy(() => import("./routes/App/components/Details"));

ReactDOM.render(
  <ThemeContextWrapper>
    <AppContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/Details" component={Details} />
            <Route exact path="/" component={Home} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppContainer>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
