import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from 'framer-motion';
import { useBookingServiceApiRequest } from '../../api/BookingServiceApi';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';


const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    phone: z.string().regex(/^\d{11}$/, { message: 'Invalid phone number.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    date: z.date({
        required_error: 'Please select a date.',
        invalid_type_error: "That's not a valid date!",
    }),
    time: z.string().min(1, { message: 'Please select a time.' }),
    serviceType: z.string().min(1, { message: 'Please select a service type.' }),
    location: z.string().min(1, { message: 'Please enter a location.' }),
    message: z.string().optional(),
    isSubscribe: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
    title?: string;
    styleButton?: string;
}


const serviceId = import.meta.env.EMAILJS_SERVICE_ID || "service_ltucls2"
const adminId = import.meta.env.EMAILJS_TEMPLATE_ID_ADMIN || "template_g60jbeo"
const userTemplateId = import.meta.env.EMAILJS_TEMPLATE_ID_USER || "template_zhms3jd"
const publicKey = import.meta.env.EMAILJS_PUBLIC_KEY || "KlyD6zYSuUYUcBHzc"



const BookingForm = ({ title = "Book a clean", styleButton, }: Props) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const { bookService, isLoading } = useBookingServiceApiRequest()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            isSubscribe: false,
        },
    });




    const onSubmit = async (data: FormValues) => {
        try {

            // Prepare the email data
            const emailData = {
                name: data.name,
                phone: data.phone,
                email: data.email,
                date: data.date.toLocaleDateString(),
                time: data.time,
                serviceType: data.serviceType,
                location: data.location,
                message: data.message || "No special instructions",
                isSubscribe: data.isSubscribe ? 'Yes' : 'No',
            };

            // Send email to admin
            await emailjs.send(serviceId, adminId, emailData, publicKey);


            // Send email to client/customer
            await emailjs.send(serviceId, userTemplateId, emailData, publicKey);

            console.log("Booking data:", data);
            await bookService(data); // Assuming this saves the booking to your backend

            console.log(data)
            reset();
            setIsDialogOpen(false);
            toast.success("Booking request submitted successfully!");
        } catch (error) {
            toast.error("Failed to submit booking request. Please try again.");
        }
    };


    return (
        <>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <motion.div whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Button className={styleButton ? styleButton : "px-10 py-6 bg-transparent bg-violet-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-violet-600 hover:text-black transition duration-300"}
                        >
                            {title}
                        </Button>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">Book Your Cleaning Service</DialogTitle>
                        <DialogDescription className="text-center text-gray-600 dark:text-gray-300">
                            Get a spotless home with our professional service.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    className="mt-1"
                                    {...register('name')}
                                    placeholder="Joseph De leon"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    className="mt-1"
                                    {...register('phone')}
                                    placeholder="09xxx xxx xxx"
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </Label>
                            <Input
                                id="email"
                                className="mt-1"
                                {...register('email')}
                                placeholder="joseph@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="location" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Location
                            </Label>
                            <Input
                                id="location"
                                className="mt-1"
                                {...register('location')}
                                placeholder="Enter your address"
                            />
                            {errors.location && (
                                <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <Label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Date
                                </Label>
                                <Controller
                                    control={control}
                                    name="date"
                                    render={({ field }) => (
                                        <div className="relative mt-1">
                                            <ReactDatePicker
                                                selected={field.value ?? null}
                                                onChange={(date: Date | null) => field.onChange(date)}
                                                minDate={new Date()}
                                                className="w-full p-3 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-blue-600"
                                                placeholderText="Select date"
                                                dateFormat="MMMM d, yyyy"
                                            />
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                />
                                {errors.date && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500" role="alert">{errors.date.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="time" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Time
                                </Label>
                                <Controller
                                    control={control}
                                    name="time"
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="09:00 AM">09:00 AM</SelectItem>
                                                <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                                <SelectItem value="03:00 PM">03:00 PM</SelectItem>
                                                <SelectItem value="06:00 PM">06:00 PM</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.time && (
                                    <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Service Type
                            </Label>
                            <Controller
                                control={control}
                                name="serviceType"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select service type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="standard">Standard Cleaning</SelectItem>
                                            <SelectItem value="deep">Deep Cleaning</SelectItem>
                                            <SelectItem value="move-in">Move-in/Move-out Cleaning</SelectItem>
                                            <SelectItem value="office">Office Cleaning</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.serviceType && (
                                <p className="mt-1 text-sm text-red-500">{errors.serviceType.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <div className='flex items-center space-x-2'>
                                <Controller
                                    name="isSubscribe"
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            id="isSubscribe"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                                <Label htmlFor="isSubscribe" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Subscribe to our Newsletter
                                </Label>
                            </div>
                            <p className='text-[12px]'>By agreeing, you will receive our Promotions, News, Giveaways (& much more) via Email.
                            </p>
                        </div>

                        <div>
                            <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Special Instructions
                            </Label>
                            <Textarea
                                id="message"
                                className="mt-1"
                                {...register('message')}
                                placeholder="Any specific requirements or areas to focus on?"
                            />
                        </div>

                        <DialogFooter>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            >
                                {isLoading ? 'Booking...' : 'Confirm Booking'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default BookingForm;