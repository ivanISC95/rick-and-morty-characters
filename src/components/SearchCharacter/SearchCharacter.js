
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '../../App.css';
import Characters from "./Characters";
export default function SearchCharacter() {
    const [keyword, SetKeyword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();        
    }
    const handeChange = event => {
        SetKeyword(event.target.value);
    }
    return (
        <section className='App-content-search'>
            <div className='Details-info'>
                <h1>Search Characters</h1>
                <form onSubmit={handleSubmit}> 
                    <Form.Control
                    onChange={handeChange} type='text' value={keyword}
                    placeholder="Search Here!"                        
                    />
                </form>
            </div>
            <Characters keyword={keyword}/>
        </section>
    )
}