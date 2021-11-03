import React, {useState, useEffect, useRef} from "react";
import './monsterslist.scss';
import { CardList } from "../cardList/cardlist";

const Monsters = () => {
    const [monsters, setMonsters] = useState([]);
    const [monsterName, setSearchedMonster] = useState('');
    const [error, setError] = React.useState('');

    const inputRef = useRef('');
    const handleChange = event => {
        setSearchedMonster(event.target.value);
    };
    useEffect(() => {
        const abortController = new AbortController();

        let isSubscribed = true;
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => 
            isSubscribed ? setMonsters(response) : null
        )
        .catch(error => (isSubscribed ? setError(error.toString()) : null));;
        
        (inputRef.current != null) && inputRef.current.addEventListener("input", handleChange);

        // return () => (isSubscribed = false);
        
        // cancel subscription to useEffect
        return () => {
            abortController.abort(); // cancel pending fetch request on component unmount
        }
    }, []);

    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(monsterName.toLowerCase()));

    return (
        <div className="monster_container">
            <div>Monsters List</div>
            <input type="text" placeholder="EnterMonster" defaultValue={monsterName} ref={inputRef}/>
            
            {!error && !filteredMonster && 
                <div className="loading">loading...</div>
            }
            {!error && filteredMonster &&
                <CardList monsters={filteredMonster} />
            }
        </div>
       )
}

export default Monsters;