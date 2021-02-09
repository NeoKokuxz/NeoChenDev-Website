import React, {useState} from 'react'
import {DisplayContainer, VideoBg, DisplayBg, DisplayContent, DisplayH1, DisplayP, DisplayBtnWrapper, ArrowForward, ArrowRight, DisplayH2} from './DisplayElements'
import Video from '../../videos/view.mp4'
import { Button } from '../Misc/ButtonElements'
import TextLoop from "react-text-loop"

const DisplaySection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <DisplayContainer id="display">
            <DisplayBg>
            <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />     Your browser does not support the video tag.
            </DisplayBg>
            <DisplayContent>
                <DisplayH1>
                    Hi, I'm Neo Chen
                </DisplayH1>
                <DisplayH2>
                    I'm a full stack developer 
                </DisplayH2>
                <TextLoop interval={2000} springConfig={{ stiffness: 340, damping: 20 }} mask={true}>
                    <DisplayP>💻  Java</DisplayP>
                    <DisplayP>💻  NodeJS</DisplayP>
                    <DisplayP>💻  ReactJS</DisplayP>
                    <DisplayP>💻  AWS</DisplayP>
                    <DisplayP>💻  SpringBoot</DisplayP>
                    
                </TextLoop>{" "}
                <DisplayBtnWrapper>
                    <Button to="about" smooth={true}
                                        duration={500}
                                        spy={true} exact="true"
                                        offset={-80} 
                                        onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark="true">
                        Learn more {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </DisplayBtnWrapper>
            </DisplayContent>
        </DisplayContainer>
    )
}

export default DisplaySection
