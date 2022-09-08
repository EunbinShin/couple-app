import { useRef } from "react"

import Card from "../UI/Card"

import AnniversaryCalendar from "./AnniversaryCalendar"
import HeadNavigator from "./HeadNavigator"
import ImageList from "./ImageList"
import SnsContainer from "./SnsContainer"

import myData from '../data.json'

import './MainContainer.css'

const MainContainer = () => {
    const compRef = useRef([]);

    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = `${myData.name[0]} ❤️ ${myData.name[1]}`;
    
    const scrollToHandler = (index) => {
        compRef.current[index].scrollIntoView({ block: index === 0 ? "end":"start", behavior: 'smooth' })
    }

    return (
        <Card className='main_container'>
            <HeadNavigator onScroll={scrollToHandler}></HeadNavigator>
            <h1 ref={el => compRef.current[0] = el}>{myData.main_text}</h1>
            <ImageList images={myData.images} ref={el => compRef.current[1] = el}></ImageList>
            <AnniversaryCalendar anniversary={myData.anniversary} ref={el => compRef.current[2] = el}></AnniversaryCalendar>
            <SnsContainer snsData={myData.sns} ref={el => compRef.current[3] = el}></SnsContainer>
        </Card>
    )
}

export default MainContainer