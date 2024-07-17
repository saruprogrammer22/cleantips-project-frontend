import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero={true}><HomePage /></Layout>} />
            <Route />
        </Routes>
    )
}

export default AppRoutes