function Contact () {
    return (
        <section className="my-5">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
                <label htmlFor="message">Message:</label>
                <input type="textarea" id="message" placeholder="Enter your message" />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact