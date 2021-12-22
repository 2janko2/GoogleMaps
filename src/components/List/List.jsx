import cn from "classnames";

import styles from "./List.module.scss";

const List = ({ places, setPlaces }) => {
    const setActive = (index) => {
        let updatedPlaces = [...places];
        updatedPlaces[index].isActive = !updatedPlaces[index].isActive;
        setPlaces(updatedPlaces);
    };

    return (
        <div className={styles.list}>
            <h2 className={styles.list__title}>Hotels in Dubai</h2>

            {places.map((place, index) => (
                <div
                    key={`list-place-${index}`}
                    className={cn(styles.list__item, places[index].isActive && styles.list__item_active)}
                    onClick={() => setActive(index)}
                >
                    {place.name}
                </div>
            ))}
        </div>
    );
};

export default List;
