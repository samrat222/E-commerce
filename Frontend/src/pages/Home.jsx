import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
// import { Slider } from '@material-ui/core'

const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Categories />
        </>
    )
}

export default Home