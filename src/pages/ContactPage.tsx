import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaComments, FaHandSparkles, FaChair, FaYoutube, FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().regex(/^\d{11}$/, { message: 'Invalid phone number.' }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

// env COntact emailjs
const serviceId = import.meta.env.EMAILJS_SERVICE_ID_CONTACT || "service_frbebwi"
const adminIdTemplate = import.meta.env.EMAILJS_TEMPLATE_ID_ADMIN_CONTACT || "template_qr7oexg"
const clientIdTemplate = import.meta.env.EMAILJS_TEMPLATE_ID_USER_CONTACT || "template_lfkknhc"
const publicKey = import.meta.env.EMAILJS_PUBLIC_KEY_CONTACT || "P7dQGOaCv17UJqghG"


const ContactPage: React.FC = () => {
    const controls = useAnimation();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = async (data: FormValues) => {
        try {
            setIsLoading(true)
            if (isLoading) {
                toast.loading("Please wait, we're processing your request and sending your message.");
            }
            // for admin
            await emailjs.send(serviceId, adminIdTemplate, data, publicKey);
            // for client
            await emailjs.send(serviceId, clientIdTemplate, data, publicKey);
            toast.success("Booking request submitted successfully!");
            setIsLoading(false)
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false)
            toast.error("Failed to submit booking request. Please try again.");
        }
    };

    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, type: 'spring', stiffness: 100 }
        }));

        gsap.from('.icon', {
            duration: 1,
            rotate: 360,
            ease: 'power2.out',
            stagger: 0.2
        });
    }, [controls]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [useLocation().pathname]);

    return (
        <div className='flex flex-col py-20 h-full'>
            <div className="h-20 w-full bg-slate-200 rounded-lg flex justify-between items-center md:px-20 px-5">
                <h2 className='text-2xl md:text-4xl font-bold'>Contact</h2>
                <div className='flex'>
                    <Link to="/" className="text text-blue-600 mr-4 hover:underline">Home</Link>
                    <span className="text text-gray-600">{`>`} Contact Us</span>
                </div>
            </div>

            <div className="min py-14 bg-gradient-to-br from-neutral-100 to-slate-100 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl"
                >
                    <div className="flex flex-row md:flex-row items-center mb-8">
                        <FaChair className="text-5xl md:text-5xl text-violet-600 mr-4" />
                        <h1 className="text-3xl font-bold text-violet-600">CleanTips Services</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl text-gray-700 font-semibold mb-4">Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                Get in touch with us for top-notch cleaning services. We're here to make your space sparkle!
                            </p>
                            {['Professional cleaning', 'Flexible scheduling', 'Eco-friendly products'].map((feature, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <FaHandSparkles className="text-violet-600 mr-2" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                            <h2 className="text-2xl text-gray-700 font-semibold mt-5 mb-5">Social Networks</h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={controls} custom={0}
                                className="flex space-x-8 mb-10 md:mb-0"
                            >
                                {[
                                    { Icon: FaYoutube, color: 'text-red-600 hover:text-red-700', url: "#" },
                                    { Icon: FaTiktok, color: 'text-black hover:text-gray-800', url: "#" },
                                    { Icon: FaFacebook, color: 'text-blue-600 hover:text-blue-700', url: "https://www.facebook.com/CleanTipsServices" },
                                    { Icon: FaInstagram, color: 'text-pink-600 hover:text-pink-700', url: "#" }
                                ].map(({ Icon, color, url }, index) => (
                                    <Link to={url}>
                                        <Icon key={index} className={`text-3xl ${color} transition-colors`} />
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-1/2 space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <Input placeholder="Joseph De leon" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <Input placeholder="(+63) 9xxx-xxx-xxxx" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <Input placeholder="joseph@example.com" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <FaComments className="absolute left-3 top-3 text-gray-400" />
                                                    <Textarea
                                                        placeholder="Tell us about your cleaning needs..."
                                                        {...field}
                                                        className="pl-10 min-h-[100px]"
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button disabled={isLoading} type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                                    {isLoading ? "Please wait..." : "Send Message"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;