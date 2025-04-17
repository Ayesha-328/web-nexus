import { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (field) => (e) => {
    const value = e?.target ? e.target.value : e;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log(formData);
        // toast(
        //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //     <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
        //   </pre>
        // );
      } catch (error) {
        console.error("Form submission error", error);
        // toast.error("Failed to submit the form. Please try again.");
      }
    }
  };

  return (
    <div className="text-white p-6 md:p-10 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold text-center">Contact Us</h1>
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-3xl mx-auto py-10"
    >
      {/* First Name */}
      <div>
        <label className="block font-medium mb-1">First Name</label>
        <Input
          placeholder="John"
          value={formData.firstName}
          onChange={handleChange("firstName")}
        />
        {errors.firstName && (
          <p className="text-sm text-red-500">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="block font-medium mb-1">Last Name</label>
        <Input
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange("lastName")}
        />
        {errors.lastName && (
          <p className="text-sm text-red-500">{errors.lastName}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block font-medium mb-1">Company</label>
        <Input
          placeholder="Tesla"
          value={formData.companyName}
          onChange={handleChange("companyName")}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium mb-1">Email</label>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block font-medium mb-1">Phone Number</label>
        {/* <PhoneInput
                  id="phone"
                  name ="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  defaultCountry="PK"
                  required
                  className="PhoneInput"
                /> */}
      </div>

      {/* Message */}
      <div>
        <label className="block font-medium mb-1">Message</label>
        <Textarea
          placeholder="Write your concern here ..."
          className="resize-none"
          value={formData.message}
          onChange={handleChange("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
    
    </div>
  );
}
