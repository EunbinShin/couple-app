import { useRef } from "react"

import Card from "../UI/Card"

import AnniversaryCalendar from "./AnniversaryCalendar"
import HeadNavigator from "./HeadNavigator"
import ImageList from "./ImageList"
import SnsContainer from "./SnsContainer"
import './MainContainer.css'

const MainContainer = () => {
    const testRef = useRef([]);

    const scrollToHandler = (index) => {
        testRef.current[index].scrollIntoView({ block: index === 0 ? "end":"start", behavior: 'smooth' })
    }

    return (
        <Card className='main_container'>
            <HeadNavigator onScroll={scrollToHandler}></HeadNavigator>
            <h1 ref={el => testRef.current[0] = el}>Main Container</h1>
            <ImageList ref={el => testRef.current[1] = el}></ImageList>
            <AnniversaryCalendar ref={el => testRef.current[2] = el}></AnniversaryCalendar>
            <SnsContainer ref={el => testRef.current[3] = el}></SnsContainer>
        </Card>
    )
}

export default MainContainer