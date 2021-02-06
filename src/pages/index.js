import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DisplaySection from '../components/DisplaySection'
import InfoSection from '../components/InfoSection'
import { AboutMeObject, ResumeObject } from '../components/InfoSection/Data'
import { ProjectObject } from '../components/ProjectSection/Data'
import ProjectSection from '../components/ProjectSection'

const Home = () => {

    //Function to change the state to toggle
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); //If true then false, if false then true
    }

    return (
        <>
            <DisplaySection />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* <InfoSection {...DiscoverObject}/> */}
            <InfoSection {...AboutMeObject}/>
            <ProjectSection {...ProjectObject}/>
            <InfoSection {...ResumeObject}/>

        </>
    )
}

export default Home
