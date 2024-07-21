import BookingForm from "@/book-service-form/BookingForm";

type Props = {
    title?: string;
    styleButton?: string;
}
function BookingFormSubmit({ title, styleButton }: Props) {
    return (
        <BookingForm title={title} styleButton={styleButton} />
    )
}

export default BookingFormSubmit