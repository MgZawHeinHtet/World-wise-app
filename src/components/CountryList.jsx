import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  const countries = cities.reduce((arr, country) => {
    if (!arr.map((el) => el.country).includes(country.country)) {
      return [...arr, { country: country.country, emoji: country.emoji }];
    } else {
      return arr;
    }
  }, []);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"click any where on the map to add to the list"} />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
