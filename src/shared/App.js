import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Room } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/room/:_id" component={Room}/>
            </div>
        );
    }
}

export default App;