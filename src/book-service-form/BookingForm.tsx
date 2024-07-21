import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Home, MessageSquare } from 'lucide-react';
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
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    phone: z.string().regex(/^\d{10}$/, { message: 'Invalid phone number.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    date: z.date({
        required_error: 'Please select a date.',
        invalid_type_error: "Thats not a valid date!",
    }),
    time: z.string().min(1, { message: 'Please select a time.' }),
    serviceType: z.string().min(1, { message: 'Please select a service type.' }),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingForm: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        reset();
        setIsDialogOpen(false);
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="default" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    Book Your Cleaning
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">Book Your Premium Cleaning Service</DialogTitle>
                    <DialogDescription className="text-center text-gray-600 dark:text-gray-300">
                        Experience spotless living with our professional cleaning service.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Home className="text-blue-500" />
                            <div className="flex-grow">
                                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    className="mt-1"
                                    {...register('name')}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Clock className="text-blue-500" />
                            <div className="grid grid-cols-2 gap-4 flex-grow">
                                <div>
                                    <Label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Date
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="date"
                                        render={({ field }) => (
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}

                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        )}
                                    />
                                    {errors.date && (
                                        <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
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
                                                    <SelectItem value="09:00">09:00 AM</SelectItem>
                                                    <SelectItem value="12:00">12:00 PM</SelectItem>
                                                    <SelectItem value="15:00">03:00 PM</SelectItem>
                                                    <SelectItem value="18:00">06:00 PM</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.time && (
                                        <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <MessageSquare className="text-blue-500" />
                            <div className="flex-grow">
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
                        </div>

                        <div className="flex items-center space-x-4">
                            <MessageSquare className="text-blue-500" />
                            <div className="flex-grow">
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
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        >
                            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BookingForm;