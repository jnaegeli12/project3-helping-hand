import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import FBtn from '../components/FBtn';
import DcBtn from '../components/DcBtn';
import HBtn from '../components/HBtn';
import SBtn from '../components/SBtn'
import ResultCard from '../components/ResultsCard'


export default function Home() {
    return(
        
         <Container>
            <div className="row col-9">
                <FBtn>
                    <ResultCard />                                                                    
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