import AboutUs from "@/components/AboutUs"
import ContactDetails from "@/components/ContactDetails"
import OurService from "@/components/OurService"
import Testimonials from "@/components/Testimonials"



function HomePage() {
    return (
        <div className="w w-full flex flex-col">
            <OurService />
            <Testimonials />
            <AboutUs />
            <ContactDetails />
        </div>
    )
}

export default HomePage