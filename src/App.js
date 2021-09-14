import react, { Component } from 'react'
import  { robots } from './robots';
import CardsList from './components/CardsList';
import Searchbox from './Searchbox';



class App extends  Component {

    constructor(){
        super()
        this.state = {
                robots: robots,
                searchfield: ''      
        }
    }

    onSearchChange (event){
        console.log(event);
    }

    render () {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <CardsList robots={this.state.robots}/>
            </div>
        );
    }
}



export default App;
