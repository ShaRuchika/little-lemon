//to fixed props issue
import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <div>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
        </div>
    );
};

export default Booking;