import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = ( e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): Partial<FormErrors> => {
    const newErrors: Partial<FormErrors> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...validationErrors }));
      return;
    }
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-500 via-red-400 to-purple-500 text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12">
        <div className="flex-1 bg-white text-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-xl transition duration-300">
          <h2 className="text-4xl font-extrabold mb-8 text-center lg:text-left text-gray-900">
            Contact us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-red-500 mt-1 text-sm" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.subject
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-red-500 mt-1 text-sm" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                className={`w-full border p-4 rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300 border-0">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456!2d85.324!3d27.717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900abcdef%3A0x123456789abcdef!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ minHeight: "500px", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}