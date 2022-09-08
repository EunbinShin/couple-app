import { useRef } from "react"

import Card from "../UI/Card"

import AnniversaryCalendar from "./AnniversaryCalendar"
import HeadNavigator from "./HeadNavigator"
import ImageList from "./ImageList"
import SnsContainer from "./SnsContainer"

import myData from '../data.json'

import './MainContainer.css'

const MainContainer = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = `${myData.name[0]} ❤️ ${myData.name[1]}`;
    
    return (
        <Card className='main_container'>
            <HeadNavigator></HeadNavigator>
            <h1>{myData.main_text}</h1>
            <ImageList images={myData.images}></ImageList>
            <AnniversaryCalendar anniversary={myData.anniversary}></AnniversaryCalendar>
            <SnsContainer snsData={myData.sns}></SnsContainer>
        </Card>
    )
}

export default MainContainer