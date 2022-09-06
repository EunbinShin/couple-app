import { useRef } from "react"

import Card from "../UI/Card"

import AnniversaryCalendar from "./AnniversaryCalendar"
import HeadNavigator from "./HeadNavigator"
import ImageList from "./ImageList"
import SnsContainer from "./SnsContainer"

import './MainContainer.css'

const MainContainer = () => {
    return (
        <Card className='main_container'>
            <HeadNavigator></HeadNavigator>
            <h1>Main Container</h1>
            <ImageList></ImageList>
            <AnniversaryCalendar></AnniversaryCalendar>
            <SnsContainer></SnsContainer>
        </Card>
    )
}

export default MainContainer