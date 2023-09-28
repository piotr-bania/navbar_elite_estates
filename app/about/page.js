import '../page.scss'
import Image from 'next/image'

const page = () => {
    return (
        <section className='page'>
            <h1 className='heading_1'>About Elite Estates</h1>
            <p className='paragraph_1'>The Pinnacle of Luxury Real Estate</p>

            <Image className='image' src="/images/interior.jpg" alt='bedroom' width={1920} height={1200} />
            
            <h1 className='text_shadow heading_2'>Founded in 2023, Elite Estates has redefined the luxury real estate market.</h1>
            <p className='text_shadow paragraph_2'>We specialize in curating a portfolio of the world’s most extraordinary homes.</p>
        </section>
    )
}

export default page