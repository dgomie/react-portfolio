function Contact() {
  return (
    <section className="my-5 formContainer">
      <form
        className="bg-white"
        action="https://formsubmit.co/4725e9540d3eeede68595f4a2189170d"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Ned Flanders" />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="nedflanders@email.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
