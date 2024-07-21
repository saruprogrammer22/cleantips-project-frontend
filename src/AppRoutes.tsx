import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import OurServicesPage from "./pages/OurServicesPage"
import GalleryPage from "./pages/GalleryPage"
import OurBlogPage from "./pages/OurBlogPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import CostCalculatorPage from "./pages/CostCalculatorPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
            <Route />

            <Route path="/services" element={<Layout ><OurServicesPage /></Layout>} />
            <Route path="/gallery" element={<Layout ><GalleryPage /></Layout>} />
            <Route path="/blog" element={<Layout ><OurBlogPage /></Layout>} />
            <Route path="/about" element={<Layout ><AboutPage /></Layout>} />
            <Route path="/contact" element={<Layout ><ContactPage /></Layout>} />
            <Route path="/cost-calculator" element={<Layout ><CostCalculatorPage /></Layout>} />
        </Routes>
    )
}

export default AppRoutes