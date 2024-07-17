import OurService from "@/components/OurService"
import Testimonials from "@/components/Testimonials"



function HomePage() {
    return (
        <div className="w w-full flex flex-col">
            <OurService />
            <Testimonials />
        </div>
    )
}

export default HomePage