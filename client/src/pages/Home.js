import React, { useState } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import ButtonContext from '../utils/ButtonContext';
import TypeContext from '../utils/TypeContext';


export default function Home() {
    const [alert, setAlert] = useState({
        display: false,
        type: "all",
        onClick: (type, display) => setAlert({...alert, type, display})
    });
    
    return(
        <ButtonContext.Provider value={alert}>
            <TypeContext.Provider value={"all"}>

                <div className="container container-fluid">
                    <Header />
                    <Content />
                </div>
                
            </TypeContext.Provider>
        </ButtonContext.Provider>
    )
};