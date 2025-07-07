import React, { useState } from "react";
import Swal from "sweetalert2" 

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


 const isComplete = (item) => {
      const firstname = item.firstname || '';
      const lastname = item.lastname || '';
      const email = item.email || '';
      const message = item.message || '';
      const phone = item.phone || '';
  
      return firstname !== '' && lastname !== '' && email !== '' && message !== '' && phone !== '';
    };
 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const data = {
    firstname: form.firstName,
    lastname: form.lastName,
    email: form.email,
    phone: form.phone,
    message: form.message,
  };

const isFormComplete = isComplete(data)

let url = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzZTA0MzM1MjY5NTUzNzUxMzUi_pc"
let swallMsg = {
        title:"Welcom aboard",
        text:"Your message has ben sent",
        icon:"success"
      }
if (!isFormComplete) {
     url = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZiMDYzZTA0MzM1MjY5NTUzMDUxMzUi_pc" 
     swallMsg = {
        title:"Success",
        text:"Your message has ben sent but is laking some infos",
        icon:"warning"
      }
}

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    
    if (res.status="success") {
      Swal.fire(swallMsg)
    }

  } catch (error) {
    console.error("Error sending data:", error);
    alert("There was a problem submitting the form.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-xl shadow-xl space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Join Us
      </h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 resize-none"
        
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
      >
        Get Strated →
      </button>
    </form>
  );
};

export default ContactForm;
