import React from "react";
import Layout from "../Common/Layout";
import { Loading } from "../Common/UI";
import CityCard from "./CityCard";
import useWeather from "./useWeather";

/**
 * @name HomePage
 * @description Renders / page
 */
const HomePage = () => {
  const { currentCity, followingCities } = useWeather();

  return (
    <Layout>
      <div className="weather-list">
        {Object.keys(currentCity).length > 0 ? (
          <CityCard city={currentCity} current />
        ) : (
          <Loading />
        )}

        {followingCities.length > 0
          ? followingCities.map((city) => <CityCard city={city} key={city.cityId} />)
          : null}
      </div>
    </Layout>
  );
};

export default HomePage;
