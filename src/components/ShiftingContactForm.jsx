import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ShiftingContactForm = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <section className="p-4 bg-slate-100">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({ selected, setSelected }) => {
  const [loading,setLoading] = useState(false);
  const form = useRef(null);

  console.log(selected)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Add the selected type to the form data
    data.selectedType = selected;

    // Construct HTML table from form data
    const tableRows = Object.entries(data)
      .map(
        ([key, value]) => `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">${key}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${value || "N/A"}</td>
      </tr>
    `
      )
      .join("");

    const htmlTable = `
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-family: Arial, sans-serif;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Field</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Value</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
      setLoading(true);
    // Send the email with the HTML table
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...data,
          htmlTable: htmlTable, // Pass the HTML table as a variable
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message: " + error.text);
        }
      );
  };
  return (
    <form
    ref={form}
      onSubmit={handleSubmit}
      className={`p-8 w-full text-white transition-colors duration-750ms ${
        selected === "company" ? "bg-indigo-600" : "bg-red-600"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
      <input type="hidden" name="selectedType" value={selected} />
      {/* Name Input */}
      <InputField
        label="Hi 👋! My name is..."
        name="name"
        placeholder="Your name..."
        selected={selected}
      />

      {/* Selection Toggle */}
      <p className="text-2xl mb-2">and I represent...</p>
      <FormSelect selected={selected} setSelected={setSelected} />

      <AnimatePresence>
        {selected === "individual" ? (
          <IndividualFields selected={selected} />
        ) : (
          <CompanyFields selected={selected} />
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={loading}
        className={`mt-4 ${
          selected === "company"
            ? "bg-white text-indigo-600"
            : "bg-white text-red-600"
        } transition-colors duration-750ms text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        {loading?"Sending...":"Send Message"}
      </motion.button>
    </form>
  );
};

const IndividualFields = ({ selected }) => (
  <>
    <InputField
      label="Educational Qualification"
      name="qualification"
      placeholder="Your qualification..."
      selected={selected}
    />
    <InputField
      label="Interested Job Designation"
      name="jobDesignation"
      placeholder="Your desired job..."
      selected={selected}
    />
    <InputField
      label="Work Experience"
      name="experience"
      placeholder="Years of experience..."
      selected={selected}
    />
    <InputField
      label="Location"
      name="location"
      placeholder="Your location..."
      selected={selected}
    />
    <InputField
      label="Salary Expectation"
      name="salaryExpectation"
      placeholder="Expected salary..."
      selected={selected}
    />
    <InputField
      label="Job Type"
      name="jobType"
      placeholder="Full-time, Part-time, etc..."
      selected={selected}
    />
    <InputField
      label="Gender"
      name="gender"
      placeholder="Your gender..."
      selected={selected}
    />
    <InputField
      label="Contact Number"
      name="contactNumber"
      placeholder="Your contact number..."
      selected={selected}
    />
    <InputField
      label="Email Address"
      name="email"
      placeholder="Your email address..."
      selected={selected}
    />
    <InputField
      label="Age"
      name="age"
      placeholder="Your age..."
      selected={selected}
    />
  </>
);

const CompanyFields = ({ selected }) => (
  <>
    <InputField
      label="Company Name"
      name="companyName"
      placeholder="Your company name..."
      selected={selected}
    />
    <InputField
      label="Job Requirement"
      name="jobRequirement"
      placeholder="Job role needed..."
      selected={selected}
    />
    <InputField
      label="Salary Compensation"
      name="salaryCompensation"
      placeholder="Salary offered..."
      selected={selected}
    />
    <InputField
      label="Company Location"
      name="companyLocation"
      placeholder="Company address..."
      selected={selected}
    />
    <InputField
      label="Job Type"
      name="companyJobType"
      placeholder="Full-time, Part-time, etc..."
      selected={selected}
    />
    <InputField
      label="Number of employees needed"
      name="employeesNeeded"
      placeholder="1,10,50,100, etc..."
      selected={selected}
    />
    <InputField
      label="Contact Number"
      name="contactNumber"
      placeholder="Your contact number..."
      selected={selected}
    />
    <InputField
      label="Email Address"
      name="email"
      placeholder="Your email address..."
      selected={selected}
    />
    <textarea
      name="additionalInfo"
      placeholder="Additional information..."
      className={`mt-4 ${
        selected === "company" ? "bg-indigo-700" : "bg-red-700"
      } transition-colors border-none duration-750ms min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
    />
  </>
);

const InputField = ({ label, name, placeholder, selected }) => (
  <div className="mb-4">
    <p className="text-2xl mb-2">{label}</p>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className={`${
        selected === "company" ? "bg-indigo-700" : "bg-red-700"
      } border-none transition-colors duration-750ms placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
    />
  </div>
);

const FormSelect = ({ selected, setSelected }) => (
  <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit mb-6">
    <button
      type="button"
      className={`${
        selected === "individual" ? "text-red-600" : "text-white"
      } text-sm px-3 py-1.5 transition-colors duration-750ms relative`}
      onClick={() => setSelected("individual")}
    >
      <span className="relative z-10">An individual</span>
      {selected === "individual" && (
        <motion.div
          transition={BASE_TRANSITION}
          layoutId="form-tab"
          className="absolute inset-0 bg-white z-0"
        />
      )}
    </button>
    <button
      type="button"
      className={`${
        selected === "company" ? "text-indigo-600" : "text-white"
      } text-sm px-3 py-1.5 transition-colors duration-750ms relative`}
      onClick={() => setSelected("company")}
    >
      <span className="relative z-10">A company</span>
      {selected === "company" && (
        <motion.div
          transition={BASE_TRANSITION}
          layoutId="form-tab"
          className="absolute inset-0 bg-white z-0"
        />
      )}
    </button>
  </div>
);

const Images = ({ selected }) => (
  <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
    <motion.div
      initial={false}
      animate={{ x: selected === "individual" ? "0%" : "100%" }}
      transition={BASE_TRANSITION}
      className="absolute inset-0 bg-slate-200"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <motion.div
      initial={false}
      animate={{ x: selected === "company" ? "0%" : "-100%" }}
      transition={BASE_TRANSITION}
      className="absolute inset-0 bg-slate-200"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  </div>
);

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
