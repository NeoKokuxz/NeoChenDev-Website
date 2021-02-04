import React from 'react'
import {DisplayContainer, VideoBg, DisplayBg} from './DisplayElements'
import Video from '../../videos/display.mp4'

const DisplaySection = () => {
    return (
        <DisplayContainer id="display">
            <DisplayBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </DisplayBg>
        </DisplayContainer>
    )
}

export default DisplaySection
