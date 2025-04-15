import Navbar from "./navbar.jsx";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 bg-opacity-50 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-2xl">
            Simplifying job and internship applications with automated cold emails.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-blue-800 font-bold text-center mb-8">Our Mission</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            At SnowMail, our mission is to help job seekers and students connect with potential employers efficiently. By automating cold emails, we remove the hassle and boost outreach success.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="/shrey1.jpg"
                alt="Shreyash Singh"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">Shreyash Singh</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Developer</p>
                <p className="text-gray-700">
                  Passionate about automating tasks and streamlining job applications, Shreyash works on building an efficient and user-friendly platform.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="/yashu.jpg"
                alt="Yash Bisht"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Yash Bisht</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Developer</p>
                <p className="text-gray-700">
                  Our tech-genius co-founder ensures the platform delivers seamless email automation with high efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 bg-opacity-50 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8">
            Have questions or feedback? Reach out to us!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SnowMail. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
