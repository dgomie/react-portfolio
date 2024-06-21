import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
    } else {
      setError('');
    }
  };

  return (
    <section className="my-5 formContainer text-gray-900">
      <form
        className="bg-white"
        action="https://formsubmit.co/4725e9540d3eeede68595f4a2189170d"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Ned Flanders" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="nedflanders@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit"><span className="text-white">Submit</span></button>
      </form>
    </section>
  );
}

export default Contact;