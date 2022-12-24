import React, { useState } from 'react'
import { getAutocompleteData } from '../../lib/autocomplete-api'
import Container from '../Container/Container'
import Location from '../Location/Location'
import styles from './SearchBox.module.scss'
const SearchBox = () => {
  
      const [AutoComplete, setAutoComplete] = useState();
      let text
      let inDebounce;
      const searchApi = async (text) => {
       
        clearTimeout(inDebounce);
        return (function () {
          inDebounce = setTimeout(async () => {
            const response = await getAutocompleteData(text)
            setAutoComplete(response.data);
          }, 300);
        })();
        // call api
      };

  return (
    <Container>

    
    <div className={styles.searchBox}>

        <input 
            type="text" 
            placeholder='Enter Location'
            onChange={(e) => {
                text = e.target.value
                if (text.length >= 3) {
                  searchApi(text);
                  
                }
                
              }}
        />
        {
        AutoComplete  &&
            
           <Location data={AutoComplete}/>
        }
        
        <h1 className={styles.instructions}>Please type an address in the search box above to see weather results.</h1>
    </div>
    
    </Container>
  )
}

export default SearchBox
