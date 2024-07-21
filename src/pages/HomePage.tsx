import AboutUs from "@/components/AboutUs"
import ContactDetails from "@/components/ContactDetails"
import Gallery from "@/components/Gallery"
import OurBlog from "@/components/OurBlog"
import OurService from "@/components/OurService"
import Testimonials from "@/components/Testimonials"
import { useEffect } from "react"
import { useLocation } from "react-router"



function HomePage() {
    {/*Automatic Scroll up whenever it clicks */ }
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="w w-full flex flex-col">
            <OurService />
            <Gallery />
            <OurBlog />
            <Testimonials />
            <AboutUs />
            <ContactDetails />
        </div>
    )
}

export default HomePage