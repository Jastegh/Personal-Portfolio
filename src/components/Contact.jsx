const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xpwwknqj", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-4 rounded bg-gray-700 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="p-4 rounded bg-gray-700 text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="p-4 bg-blue-500 rounded text-white hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
