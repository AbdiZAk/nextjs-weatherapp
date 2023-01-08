import React, { useState } from 'react'
import { getAutocompleteData } from '../../lib/autocomplete-api'
import SpiningLoader from '../Loaders/SpiningLoader'
import Locations from '../Locations/Locations'
import styles from './SearchBox.module.scss'
import Input from '../Input/Input'

const SearchBox = () => {
    const [currentInput, setcurrentInput] = useState('')
    const [AutoCompleteData, setAutoCompleteData] = useState();
    const [loading, setLoading] = useState(false);
    let inDebounce;

    const searchApi = async (text) => {
    clearTimeout(inDebounce);
    return (function () {
        inDebounce = setTimeout(async () => {
        const response = await getAutocompleteData(text)
        setAutoCompleteData(response.data);
        setLoading(false);
        }, 200);
    })();
    
    };// call api

    return (
        
            <div className={styles.searchBox}>
                <div className={styles.input_loader}>
                    <Input
                        type="text" 
                        placeHolder='Enter Location'
                        handleChange={(e) => {
                        let text = e.target.value;
                        setcurrentInput(text)
                        if (text.length >= 3) {
                            searchApi(text);
                            setLoading(true)
                            
                        } 
                        }}
                    />
                    {loading ?
                        <SpiningLoader />
                    : ''}
                </div>
               

                {AutoCompleteData && currentInput?
                    <Locations data={AutoCompleteData}/>
                :
                
                <h1 className={styles.instructions}>Please type an address in the search box above to see weather results.</h1>
                }  

                
            </div>
         
    )
}

export default SearchBox
