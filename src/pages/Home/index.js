import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import DisplaySection from '../../components/DisplaySection'

const Home = () => {

    //Function to change the state to toggle
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); //If true then false, if false then true
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default Home
