import Page_Layout from '../components/Page_Layout'

const page = () => {
    return (
        <Page_Layout 
            mainTitle="About Elite Estates"
            mainParagraph="The Pinnacle of Luxury Real Estate"
            imageSrc="/images/interior.jpg"
            imageAlt="interior"
            secondaryTitle="Founded in 2023, Elite Estates has redefined the luxury real estate market"
            secondaryParagraph="We specialize in curating a portfolio of the world’s most extraordinary homes"
            backgroundColor="#F2F0E4" 
        />
    )
}

export default page