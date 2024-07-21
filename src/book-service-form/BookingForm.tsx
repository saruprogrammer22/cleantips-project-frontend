import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { FaHandSparkles } from 'react-icons/fa';
import { motion } from 'framer-motion';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    phone: z.string().regex(/^\d{10}$/, { message: 'Invalid phone number. Please enter 10 digits.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    date: z.date({
        required_error: 'Please select a date.',
    }),
    message: z.string().max(500, { message: 'Message must not exceed 500 characters.' }).optional(),
});

export default function BookingForm() {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            date: undefined,
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // Here you would typically send the form data to your backend
        setIsDialogOpen(false);
    }




    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="px-8 h-14 bg-violet-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-violet-700 transition duration-300"
                    variant="outline">
                    <motion.button
                        className="px-8 py-3 bg-violet-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-violet-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaHandSparkles /> Book a Clean
                    </motion.button>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Book a Home Cleaning Service</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to schedule your home cleaning service.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" {...form.register('name')} />
                        {form.formState.errors.name && (
                            <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" {...form.register('phone')} />
                        {form.formState.errors.phone && (
                            <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...form.register('email')} />
                        {form.formState.errors.email && (
                            <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Controller
                            name="date"
                            control={form.control}
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
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                        {form.formState.errors.date && (
                            <p className="text-sm text-red-500">{form.formState.errors.date.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Special Requests or Additional Details</Label>
                        <Textarea
                            id="message"
                            placeholder="Let us know about any specific cleaning needs, areas to focus on, or special instructions."
                            className="min-h-[100px]"
                            {...form.register('message')}
                        />
                        {form.formState.errors.message && (
                            <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                        )}
                    </div>
                    <DialogFooter>
                        <Button type="submit">Schedule Cleaning</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}