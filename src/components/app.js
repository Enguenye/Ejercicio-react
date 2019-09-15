import React, { Component } from 'react';
import 'bootstrap';
import ToDo from './toDo.js';
import Doing from './doing.js';
import Done from './done.js';
class App extends Component {
    render() {
        return (
            <div id="parent">
            <div className= "row-xs-1" align ="center">My Kanban app</div>
            <div className= "row" >
                <div className="col-lg-4"><ToDo/></div>
                <div className="col-lg-4"><Doing/></div>
                <div className="col-lg-4"><Done/></div>
             </div> 
             </div>

        );
    }
}

export default App;