import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { AboutMeObject, ResumeObject, ProjectObject } from '../components/Misc/Data'
import ProjectSection from '../components/ProjectSection'

const Home = () => {

    //Function to change the state to toggle
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); //If true then false, if false t
    }    




    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <InfoSection {...AboutMeObject}/>

            <ProjectSection {...ProjectObject}/>

            <InfoSection {...ResumeObject}/>

        </>
    )
}

export default Home
