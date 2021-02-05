import React, {useState} from 'react'
import {DisplayContainer, VideoBg, DisplayBg, DisplayContent, DisplayH1, DisplayP, DisplayBtnWrapper, ArrowForward, ArrowRight} from './DisplayElements'
import Video from '../../videos/display.mp4'
import { Button } from '../ButtonElements'
import TextLoop from "react-text-loop"

const DisplaySection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <DisplayContainer id="display">
            <DisplayBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' playsInline='true' webkit-playsInline='true'/>
            </DisplayBg>
            <DisplayContent>
                <DisplayH1>
                    Hi, I'm Neo Chen
                </DisplayH1>
                <TextLoop interval={2000} springConfig={{ stiffness: 340, damping: 20 }} mask={true}>
                    <DisplayP>💻  Java Developer</DisplayP>
                    <DisplayP>💻  Software Engineer</DisplayP>
                    <DisplayP>💻  FullStack Developer</DisplayP>
                </TextLoop>{" "}
                <DisplayBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark="true">
                        Learn more {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </DisplayBtnWrapper>
            </DisplayContent>
        </DisplayContainer>
    )
}

export default DisplaySection
