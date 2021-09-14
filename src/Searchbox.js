import react from 'react';

const Searchbox = ({searchChange}) => {
    return (
    <div className="pa3">
        <input 
        className="pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="Search your robot"
        onChange={searchChange}
        />
    </div>
    );  
}

export default Searchbox;