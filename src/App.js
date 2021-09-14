import react from 'react'
import  { robots } from './robots';
import CardsList from './components/CardsList';

const App = () => {
    return (
        <div>
            <h1>RoboFriends</h1>
            <CardsList robots={robots}/>
        </div>
    );
};




export default App;