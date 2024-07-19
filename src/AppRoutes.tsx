import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import OurServicesPage from "./pages/OurServicesPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
            <Route />

            <Route path="/services" element={<Layout showHero={false}><OurServicesPage /></Layout>} />
        </Routes>
    )
}

export default AppRoutes