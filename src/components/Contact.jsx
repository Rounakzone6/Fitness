import { useState } from "react";
import MyMap from "./Map";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Form submitted successfully!");
      event.target.reset();
    } else {
      setResult("❌ " + data.message);
      console.error(data);
    }
  };

  return (
    <div className="md:max-w-[90%] py-4 mx-auto my-6 flex justify-between gap-6 flex-col md:flex-row">
      <form
        onSubmit={onSubmit}
        className="flex md:w-[50vw] flex-col px-2 gap-4"
      >
        <div className="mb-4">
          <hr className="md:w-[5vw] w-[15vw] border-t-2 border-red-500" />
          <h2 className="text-4xl font-medium">Get in Touch</h2>
        </div>
        <input
          className="border p-2 rounded"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="border p-2 rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="border p-2 rounded"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="border p-2 rounded"
          name="message"
          placeholder="Message"
          required
        />
        <button
          className="p-3 rounded text-white font-medium cursor-pointer bg-red-600"
          type="submit"
        >
          Submit
        </button>
        <span>{result}</span>
      </form>
      <div className="w-full h-[400px]">
        <MyMap />
      </div>
    </div>
  );
};

export default Contact;
