import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { AboutMeObject, ResumeObject, ProjectObject, SkillObject } from '../components/Misc/Data'
import ProjectSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'

import { useInView } from "react-intersection-observer";

const Home = () => {

    //Function to change the state to toggle
    const [isOpen, setIsOpen] = useState(false);

    const [InfoRef, InfoRefInView] = useInView({rootMargin:'-80px', threshold: 0.3 });
    const [ProjectRef, ProjectRefInView] = useInView({rootMargin:'-80px',  threshold: 0.3 });
    const [SkillRef, SkillRefInView] = useInView({rootMargin:'-80px',  threshold: 0.3 });
    const [ResumeRef, ResumeRefInView] = useInView({rootMargin:'-80px',  threshold: 0.3 });

    const toggle = () => {
        setIsOpen(!isOpen); //If true then false, if false t
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <Navbar toggle={toggle} navColor={
                InfoRefInView
                ? "#646c74"
                : ProjectRefInView
                ? "#051323"
                : SkillRefInView 
                ? "#646c74" 
                : ResumeRefInView 
                ? "#051323"
                : "#646c74"} />

            <section ref={InfoRef} >
                <InfoSection {...AboutMeObject} />
            </section>

            <section ref={ProjectRef}>
                <ProjectSection  {...ProjectObject} />
            </section>

            <section ref={SkillRef}>
                <SkillSection {...SkillObject} />
            </section>

            <section ref={ResumeRef}>
                <InfoSection  {...ResumeObject} />
            </section>

        </>
    )
}

export default Home