import React from "react";
import ReactDOM from "react-dom";

import NameForm from "./NameForm";
import Data from "./Data";
import "./css/jira-react-example.css";
import 'bootstrap/dist/css/bootstrap.css';


AJS.toInit(() => {
    ReactDOM.render(
        <div>
            <h3 className="react-example">Jira React General Configuration</h3>
            <NameForm/>
            {/*<ReactFromApi/>*/}
            <Data/>
        </div>,
        document.getElementById('root')
    );
});
