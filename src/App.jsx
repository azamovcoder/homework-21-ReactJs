import "./scss/app.scss";

import Decrement from "./components/Decrement";
import { Fragment } from "react";
import Increment from "./components/Increment";
import Res from "./components/Res";
import Value from "./components/Value";

function App() {
  return (
    <Fragment>
      <div className="count__frame">
        <div className="count__frame__info">
          <Decrement />
          <Value />
          <Increment />
        </div>
        <Res />
      </div>
    </Fragment>
  );
}

export default App;
