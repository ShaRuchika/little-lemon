import React, {useState} from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setItems] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="book-date">Choose date : </label>
                                <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                            </div>
                            {/* for timw selection */}
                            <div>
                                <label htmlFor="book-time">Choose time : </label>
                                <select id="book-time" value={times} onChange={(e) => setItems(e.target.value)} required>
                                    <option value="">Select a time</option>
                                    {
                                        props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                    }
                                </select>
                            </div>
                            {/* for number of guests */}
                            <div>
                                <label htmlFor="book-guests">Number of guests : </label>
                                <input type="number" min="1" id="book-guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                            </div>
                            {/* for occasion selection */}
                            <div>
                                <label htmlFor="book-occasion">Occasion : </label>
                                <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                    <option value="">Select an occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </div>
                            <div className="btnReceive">
                                <input aria-label="On Click" type="submit" value={"Make your resarvation"} />
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    );
}

export default BookingForm;