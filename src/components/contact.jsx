function Contact () {
    return (
        <section className="my-5 formContainer">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Ned Flanders" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="nedflanders@email.com" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Enter your message" />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact