'use client'

import './navbar.scss'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {motion as m} from 'framer-motion'

const variant = {
    open: {x: '0%'},
    closed: {x: "100%"},
}

const Navbar = () => {

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [])

    return (
        <section id='logo'>
            <Link className='logo' href="/"><h2>Elite Estates</h2></Link>

            <div className='inactive_link link_1'>shop all</div>
            <div className='inactive_link link_2'>whishlist</div>
            <div className='inactive_link link_3'>search</div>
            <div className='inactive_link link_4'>cart</div>

            <div className={`menu ${isOpen ? 'open' : 'closed'}`}
                onClick={() => setIsOpen(!isOpen)}>
                <svg className='line top'></svg>
                <svg className='line bottom'></svg>
            </div>

            <m.div className='menu_container'
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                variants={variant}
                transition={{duration: .75, ease: 'easeInOut'}}
            >
                <div className='menu_container_1'>
                    <Link className='link' href="/">
                        <div className='menu_container_link'>Homepage</div>

                        <h1 className='heading_1'>Welcome to Elite Estates</h1>
                        <p className='paragraph_1'>Where Luxury Meets Elegance</p>

                        <Image className='image' src="/images/bedroom.jpg" alt='bedroom' width={1920} height={1200} />
                    </Link>
                </div>

                <div className='menu_container_2'>
                    <Link className='link' href="/about">
                        <div className='menu_container_link'>About us</div>

                        <h1 className='heading_1'>Welcome to Elite Estates</h1>
                        <p className='paragraph_1'>Where Luxury Meets Elegance</p>

                        <Image className='image' src="/images/interior.jpg" alt='bedroom' width={1920} height={1200} />
                    </Link>
                </div>
            </m.div>

                    {/* <Link className='link' href="/about"><h2>About us</h2></Link>
                    <Link className='link' href="/listings"><h2>Listings</h2></Link>
                    <Link className='link' href="/services"><h2>Services</h2></Link>
                    <Link className='link' href="/contact"><h2>Contact Us</h2></Link> */}
        </section>
    )
}

export default Navbar