import React from "react"
import LanguageContext from "./my-context"
export default class CenterUI extends React.Component{
    render(){
        // let lang = this.context;
        return <div>
        <h1 key={"abc"}>My favourite programming language is: {this.context}</h1>
        <button onClick={this.props.click}>Toggle Button</button>
    </div>
    }
}

CenterUI.contextType = LanguageContext;


