import React from "react";
import ReactDOM from "react-dom";
import NameForm from "./NameForm";
import "./css/jira-react-example.css";


AJS.toInit(() => {
    ReactDOM.render(
        <div>
            <h3 className="react-example">Jira React General Configuration</h3>
            <NameForm/>
        </div>,
        document.getElementById('root')
    );
});
