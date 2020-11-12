import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShelterCard from '../components/ShelterCard'
import Content from '../components/Content';
import ButtonContext from '../utils/ButtonContext';
import TypeContext from '../utils/TypeContext';


export default function Home() {
    // const headerName = "Welcome Idiont"
    const [alert, setAlert] = useState({
        display: false,
        type: "all",
        onClick: (type, display) => setAlert({...alert, type, display})
    });
    
    return(
        <ButtonContext.Provider value={alert}>
            <TypeContext.Provider value={"all"}>

                <div className="container container-fluid">
                    <Header headerName={"What Do You Need?"}/>
                    <Content />
                </div>
                
            </TypeContext.Provider>
        </ButtonContext.Provider>
    )
};