import React, {useState} from 'react'
import {DisplayContainer, VideoBg, DisplayBg, DisplayContent, DisplayH1, DisplayP, DisplayBtnWrapper, ArrowForward, ArrowRight} from './DisplayElements'
import Video from '../../videos/display.mp4'
import { Button } from '../ButtonElements'

const DisplaySection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <DisplayContainer id="display">
            <DisplayBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </DisplayBg>
            <DisplayContent>
                <DisplayH1>
                    Hi, I'm Neo Chen
                </DisplayH1>
                <DisplayP>
                    Java Developer / Full Stack Developer / Software Engineer
                </DisplayP>
                <DisplayBtnWrapper>
                    <Button to="email" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Contact {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </DisplayBtnWrapper>
            </DisplayContent>
        </DisplayContainer>
    )
}

export default DisplaySection
