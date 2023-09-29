'use client'

import './navbar.scss'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {motion as m} from 'framer-motion'
import Page_Layout from './Page_Layout'

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
                
                <Link href='/' className="box_shadow translatedComponent_1">
                    <a className='menu_container_link'>Homepage</a>
                    <Page_Layout 
                        mainTitle="Welcome to Elite Estates"
                        mainParagraph="Where Luxury Meets Elegance"
                        imageSrc="/images/bedroom.jpg"
                        imageAlt="bedroom"
                        secondaryTitle="Discover your dream home among our collection of extraordinary estates"
                        secondaryParagraph="With a focus on luxury and sophistication, Elite Estates brings you the finest real estate that exceeds every expectation"
                        backgroundColor="#F2F0E4"
                    />
                </Link>

                <Link href='/about' className="box_shadow translatedComponent_2">
                    <a className='menu_container_link'>About</a>
                    <Page_Layout 
                        mainTitle="About Elite Estates"
                        mainParagraph="The Pinnacle of Luxury Real Estate"
                        imageSrc="/images/interior.jpg"
                        imageAlt="interior"
                        secondaryTitle="Founded in 2023, Elite Estates has redefined the luxury real estate market"
                        secondaryParagraph="We specialize in curating a portfolio of the world’s most extraordinary homes"
                        backgroundColor="#E6DCCE" 
                    />
                </Link>

                <Link href='/about' className="box_shadow translatedComponent_3">
                    <a className='menu_container_link'>Listings</a>
                    <Page_Layout 
                        mainTitle="Exclusive Listings"
                        mainParagraph="ThA Collection of Prestigious Properties"
                        imageSrc="/images/mansion.jpg"
                        imageAlt="mansion"
                        secondaryTitle="Browse our handpicked listings of luxurious estates"
                        secondaryParagraph="Each property is carefully selected to meet the highest standards of luxury and elegance"
                        backgroundColor="#D9C9B9" 
                    />
                </Link>

                <Link href='/about' className="box_shadow translatedComponent_4">
                    <a className='menu_container_link'>Services</a>
                    <Page_Layout 
                        mainTitle="Our Services"
                        mainParagraph="Tailored Real Estate Solutions"
                        imageSrc="/images/suite.jpg"
                        imageAlt="suite"
                        secondaryTitle="From property scouting to after-sales support, Elite Estates provides a comprehensive range of services"
                        secondaryParagraph="Let our expert team guide you through each step of your luxury real estate journey"
                        backgroundColor="#CCA5A1" 
                    />
                </Link>

                <Link href='/about' className="box_shadow translatedComponent_5">
                    <a className='menu_container_link'>Contact Us</a>
                    <Page_Layout 
                        mainTitle="Contact Elite Estates"
                        mainParagraph="Get in Touch with Our Expert Team"
                        imageSrc="/images/design.jpg"
                        imageAlt="design"
                        secondaryTitle="Have questions or need expert advice? Contact us today"
                        secondaryParagraph="Our team of specialists is always available to assist you"
                        backgroundColor="#BF827A" 
                    />
                </Link>
            </m.div>
        </section>
    )
}

export default Navbar