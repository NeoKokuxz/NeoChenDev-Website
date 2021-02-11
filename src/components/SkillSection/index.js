import React, { useState } from 'react'
import { Button } from '../Misc/ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './SkillElements'
import {ArrowForward, ArrowRight} from '../DisplaySection/DisplayElements'


const SkillSection = ({ lightBg, id, imgStart, topLine, lightText, darkText, heading, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='resume'
                                        smooth={true}
                                        duration={500}
                                        spy={true} exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onMouseEnter={onHover} onMouseLeave={onHover}
                                    >
                                        {buttonLabel}{hover ? <ArrowForward /> : <ArrowRight />}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img alt={alt} src={img} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SkillSection
