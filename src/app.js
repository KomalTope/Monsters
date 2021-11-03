import React from "react";
import './app.scss';

import Monsters from "./components/monstersList/monsterslist";

const App = () => {
    return (
        <div className="app">
            <Monsters />
        </div>
    )
}

export default App;