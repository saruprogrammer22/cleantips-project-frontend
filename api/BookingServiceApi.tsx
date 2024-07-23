import { IBooking } from '../src/types';
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const useBookingServiceApiRequest = () => {
    // This function sends the booking data to the server
    const bookingServiceApiRequest = async (bookingData: IBooking) => {
        console.log(bookingData)
        const response = await fetch(`${API_BASE_URL}/api/booking/service`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData)
        });

        // If the response is not ok, throw an error
        if (!response.ok) {
            throw new Error("Failed to create a booking service");
        }

        // If everything is ok, return the response data
        return response.json();
    };

    // Use the useMutation hook from react-query
    const { mutateAsync: bookService, isLoading, isSuccess } = useMutation(bookingServiceApiRequest)
    // Return an object with the mutation function and loading state
    if (isSuccess) {
        toast.success("Successfully schedule an booking service")
    }

    return {
        isLoading, bookService
    };
};
