import { useState } from "react";

import List from "components/List/List";
import Map from "components/Map/Map";

import placesData from "../../places.json";
import styles from "./App.module.scss";

const App = () => {
    const [places, setPlaces] = useState(placesData);

    return (
        <div className={styles.app}>
            <div className={styles.app__list}>
                <List places={places} setPlaces={setPlaces} />
            </div>
            <div className={styles.app__map}>
                <Map places={places} />
            </div>
        </div>
    );
};

export default App;
