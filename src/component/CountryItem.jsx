import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagsapi.com/${country.emoji.toUpperCase()}/flat/32.png`}
        alt={country.country}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
