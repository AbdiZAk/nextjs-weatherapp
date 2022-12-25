import React, { useState } from 'react'
import { getAutocompleteData } from '../../lib/autocomplete-api'
import Container from '../Container/Container'
import Locations from '../Locations/Locations'
import styles from './SearchBox.module.scss'
import Input from '../Input/Input'

const SearchBox = () => {

    const [AutoComplete, setAutoComplete] = useState();
    let inDebounce;

    const searchApi = async (text) => {
    clearTimeout(inDebounce);
    return (function () {
        inDebounce = setTimeout(async () => {
        const response = await getAutocompleteData(text)
        setAutoComplete(response.data);
        }, 200);
    })();
    // call api
    };

    return (
        // <Container>
            <div className={styles.searchBox}>
                <Input
                    type="text" 
                    placeHolder='Enter Location'
                    handleChange={(e) => {
                    let text = e.target.value;
                    
                    if (text.length >= 3) {
                        // searchApi(text);
                    }
                        
                    }}
                />
               
                    <Locations
                       
                        data={AutoComplete}   
                    />
                
                {/* { AutoComplete && currentInput ? 
                <Locations data={AutoComplete}/>
                : 
                <h1 className={styles.instructions}>Please type an address in the search box above to see weather results.</h1>
                } */}  
            </div>
        // </Container>
    )
}

export default SearchBox
