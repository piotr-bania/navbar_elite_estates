import './page.scss'
import Image from 'next/image'

export default function Home() {
    return (
        <section className='page'>
            <h1 className='heading_1'>Welcome to Elite Estates</h1>
            <p className='paragraph_1'>Where Luxury Meets Elegance</p>

            <Image className='image' src="/images/bedroom.jpg" alt='bedroom' width={1920} height={1200} />
            
            <h1 className='text_shadow heading_2'>Discover your dream home among our collection of extraordinary estates.</h1>
            <p className='text_shadow paragraph_2'>With a focus on luxury and sophistication, Elite Estates brings you the finest real estate that exceeds every expectation.</p>
        </section>
    )
}
