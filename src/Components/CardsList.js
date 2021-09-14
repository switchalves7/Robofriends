// import react from 'react'

import Card from './Card'

const CardsList = ({robots}) => {
   const CardsArray = robots.map((user, i) => {
    return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
   });
   
    return (
        <div>
            {CardsArray}
        </div>
    );
}

export default CardsList;   