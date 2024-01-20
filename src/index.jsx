
import React from "react";
import ReactDom from "react-dom/client";
import Aplication from "./Aplication";
import "./css/style.css"


class App extends React.Component{
    

    render () {
        return (
            <React.Fragment>

                <><p>გამარჯობა</p>
                <Aplication></Aplication></>
            </React.Fragment>
                
        );

    }
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render (<App />);
