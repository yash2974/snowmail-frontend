import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar.jsx";
import { UserContext } from "../contexts/usercontext";
import { FiLink } from "react-icons/fi";

const EmailSender = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const [emails, setEmails] = useState("");
  const [resume, setResume] = useState(null);
  const [mailType, setMailType] = useState("job");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [hiringManager, setHiringManager] = useState("");
  const [loading, setLoading] = useState(false);

  // New states for email and app password
  const [emailAddress, setEmailAddress] = useState("");
  const [appPassword, setAppPassword] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      alert("Invalid file format. Please upload a PDF or DOC file.");
      return;
    }
    setResume(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailAddress || !appPassword) {
      alert("Please enter your Gmail and app password.");
      return;
    }

    if (!emails.trim()) {
      alert("Please enter at least one recipient email address.");
      return;
    }

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobTitle || !companyName || !hiringManager) {
      alert("Please fill in all job details.");
      return;
    }

    const emailList = emails
      .split("\n")
      .map(email => email.trim())
      .filter(email => email !== "");

    const formData = new FormData();
    formData.append("email_address", emailAddress);
    formData.append("app_password", appPassword);
    formData.append("job_title", jobTitle);
    formData.append("company_name", companyName);
    formData.append("hiring_manager", hiringManager);
    formData.append("email_receivers", emailList.join(","));
    formData.append("resume", resume);

    setLoading(true);

    try {
      const response = await fetch("https://snowmail-automailing.onrender.com/send-email", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send emails. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex flex-col bg-[#1a1d21]">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1d21]">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Reach More. Achieve More.
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Supercharge your outreach with our powerful cold email platform.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
            Start Your Cold Email Campaign
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Gmail and App Password Inputs */}
            <input
              type="email"
              className="border rounded-md p-3 w-full bg-white text-black"
              placeholder="Your Gmail Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
            <input
              type="password"
              className="border rounded-md p-3 w-full bg-white text-black"
              placeholder="Google App Password"
              value={appPassword}
              onChange={(e) => setAppPassword(e.target.value)}
              required
            />
            <p className="text-sm mt-0.5 flex items-center">
              <a
                href="https://myaccount.google.com/apppasswords"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <FiLink className="mr-1" /> Generate your Google App Password here
              </a>
            </p>

            {/* Job details */}
            <input
              type="text"
              className="border rounded-md p-3 w-full bg-white text-black"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <input
              type="text"
              className="border rounded-md p-3 w-full bg-white text-black"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              className="border rounded-md p-3 w-full bg-white text-black"
              placeholder="Hiring Manager"
              value={hiringManager}
              onChange={(e) => setHiringManager(e.target.value)}
            />

            <textarea
              className="border rounded-md p-3 w-full resize-none bg-white text-black"
              rows="5"
              placeholder="Enter recipient email addresses (one per line)"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />

            <select
              className="border rounded-md p-3 bg-white text-black"
              value={mailType}
              onChange={(e) => setMailType(e.target.value)}
            >
              <option value="job">Job Application</option>
              <option value="internship">Internship Application</option>
            </select>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="border rounded-md p-2 bg-white text-black"
              onChange={handleFileChange}
            />

            <button
              type="submit"
              className="bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Cold Emails"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSender;
