import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"click any where on the map to add to the list"} />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city, index) => (
        <CityItem key={index} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
