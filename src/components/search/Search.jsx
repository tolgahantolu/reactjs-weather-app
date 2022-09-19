import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, GEO_API_URL } from "../../api";

const Search = (props) => {
  const [search, setSearch] = useState(null);

  const onChangeHandler = (e) => {
    setSearch(e);
    props.onSearchChange(e);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search for your city"
      loadOptions={loadOptions}
      debounceTimeout={600}
      value={search}
      onChange={onChangeHandler}
    />
  );
};

export default Search;
