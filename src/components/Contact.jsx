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
    // <section id="contact" className="p-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    <section id="contact" className="p-10 bg-gradient-to-b from-black to-gray-900 text-white">

      <div className="max-w-5xl mx-auto p-6 border border-gray-600 rounded-lg bg-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
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
      </div>
    </section>
  );
};

export default Contact;











// const Contact = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const response = await fetch("https://formspree.io/f/xpwwknqj", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: formData,
//     });

//     if (response.ok) {
//       alert("Message sent successfully!");
//       e.target.reset();
//     } else {
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className="bg-gray-800 text-white py-10">
//       {/* Outer container with reduced width */}
//       <div className="max-w-5xl mx-auto p-6 rounded-lg bg-gray-900">
//         <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="p-4 rounded bg-gray-700 text-white"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="p-4 rounded bg-gray-700 text-white"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             className="p-4 rounded bg-gray-700 text-white"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="p-4 bg-blue-500 rounded text-white hover:bg-blue-600"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
