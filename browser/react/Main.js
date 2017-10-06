import React from 'react'
import Footer from './Footer.js'
import Sidebar from './Sidebar.js'


export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            greeting: ":D" // Tom's law here dataType
        }
    }
    render() {     
        return (<div id="main" className="container-fluid">
        <h1>Hello world! {this.state.greeting}</h1>
        <Sidebar />
        <Footer />
      </div>)
    }
}

/* 

*/