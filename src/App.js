import react, { Component } from 'react'
import  { robots } from './robots';
import CardsList from './components/CardsList';
import Searchbox from './Searchbox';

const state = {
    robots: robots,
    searchfield: ''

}

class App extends { Component }{
    render () {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox />
                <CardsList robots={robots}/>
            </div>
        );
    }
}



export default App;
