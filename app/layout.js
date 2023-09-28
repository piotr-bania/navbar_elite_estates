import './globals.scss'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

export const metadata = {
    title: 'Elite Estates: Luxury Real Estate',
    description: 'Experience the epitome of luxury with Elite Estates. Browse exclusive listings, take 3D tours, and find your dream home today.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Banner />
                <Navbar />
                {children}
            </body>
        </html>
    )
}