function Contact() {
  return (
    <section className="my-5 formContainer">
      <form
        className="bg-white"
        name="contact"
        method="POST"
        data-netlify="true"
      >
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
      </form>
    </section>
  );
}

export default Contact;
