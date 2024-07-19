import AboutUs from "@/components/AboutUs"
import ContactDetails from "@/components/ContactDetails"
import Gallery from "@/components/Gallery"
import OurBlog from "@/components/OurBlog"
import OurService from "@/components/OurService"
import Testimonials from "@/components/Testimonials"



function HomePage() {
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