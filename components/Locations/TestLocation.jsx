import styles from './Locations.module.scss'
import axios from 'axios'
import { Fragment } from 'react'
import { useState, useEffect} from 'react'
import { getAutocompleteData } from '../../lib/autocomplete-api'
const TestLocation =() => {
  const result = [
    {
      "syracuse": {
        "fomatted": "Syracuse New York"
      },
      "syracuse": {
        "fomatted": "Syracuse New York"
      },
      "syracuse": {
        "fomatted": "Syracuse New York"
      },
      "syracuse": {
        "fomatted": "Syracuse New York"
      },
    }
  ]
  const [AutoComplete, setAutoComplete] = useState();
	
  let inDebounce;
  const searchApi = async (text) => {
    console.log(text);
    clearTimeout(inDebounce);
    return (function () {
      console.log(text);
      inDebounce = setTimeout(async () => {
        const response = await getAutocompleteData(text)
        setAutoComplete(response.data);
      }, 400);
    })();
    // call api
  };
  return (
    <div className={styles.location}>
      <h1>Hello Debounce</h1>
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value.length >= 3) {
            searchApi(e.target.value);
            // console.log(result.results[0].formatted);
            
          }
        }}
      />

       {/* {result ?
        <>
            {result.results.map((place) => {
                return <h3>{place.formatted}</h3>
            })}
        </>

       : ''} */}

       {
        <>
            {result.map((place) => {
                return <h3>{place.formatted}</h3>
            })}
        </>

       }

    </div>
  );
}

export default TestLocation