import React, { useState, useEffect } from 'react'
import Container from '../components/Container';
import FBtn from '../components/FBtn';
import DcBtn from '../components/DcBtn';
import HBtn from '../components/HBtn';
import SBtn from '../components/SBtn'
import Nav from '../components/Nav'
import ResultCar from '../components/ResultsCard'
import Submit from '../pages/Submit'




const Home = () => {
    return(
<div>
 
    <Nav />
    <FBtn>
        <ResultCar /> 
    </FBtn>
    <DcBtn>
        <ResultCar /> 
    </DcBtn>   
    <HBtn>
        <ResultCar /> 
    </HBtn>    
    <SBtn>
        <ResultCar /> 
    </SBtn>   
    <Submit />

 
</div>

    )
};


export default Home ;