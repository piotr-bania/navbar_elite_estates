import Image from 'next/image'
import styles from './Page_Layout.scss'

const Page_Layout = ({ mainTitle, mainParagraph, imageSrc, imageAlt, secondaryTitle, secondaryParagraph, backgroundColor }) => {
    return (
        <section className='page' style={{ backgroundColor: backgroundColor }}>
            <h1 className='heading_1'>{mainTitle}</h1>
            <p className='paragraph_1'>{mainParagraph}</p>

            <Image className='image' src={imageSrc} alt={imageAlt} width={1920} height={1200} />

            <h1 className='text_shadow heading_2'>{secondaryTitle}</h1>
            <p className='text_shadow paragraph_2'>{secondaryParagraph}</p>
        </section>
    )
}

export default Page_Layout