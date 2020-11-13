import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import FBtn from '../components/FBtn';
import DcBtn from '../components/DcBtn';
import HBtn from '../components/HBtn';
import SBtn from '../components/SBtn'
import ResultCard from '../components/ResultsCard'
import API from '../utils/API'


export default function Home() {

    const [ shelter, setShelter] = useState([])

function LoadShelter() {
    useEffect(() => {
        API.getShelter()
        .then(res => {
          console.log("res form api call: ", res);
          setShelter(res.data)
        })
        .catch((err) => console.log(err));
      }, []); 
 }
   

    return(
        
         <Container>
            <div className="row col-9">
                <FBtn onClick={() => <ResultCard /> }>
                </FBtn>
                <DcBtn>
                    <ResultCard /> 
                </DcBtn>
            </div>
            <div className="row col-9">
                <HBtn>
                    <ResultCard /> 
                </HBtn>    
                <SBtn>
                    <ResultCard /> 
                </SBtn>
            </div> 
               
        </Container>
    )
};