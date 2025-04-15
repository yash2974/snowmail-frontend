import Navbar from "./navbar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,email')" }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to SnowMail</h1>
            <p className="text-xl md:text-2xl mb-8">Automate your cold emails and maximize your outreach effortlessly.</p>
            <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Why Choose SnowMail?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl text-blue-600 mb-4 flex">
                🚀
                <h3 className="text-xl text-blue-800 font-semibold m-3">Automated Outreach</h3>
              </div>
              <p className="text-gray-600">Send personalized cold emails at scale with minimal effort.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl text-blue-600 mb-4 flex">
                📊
                <h3 className="text-xl text-blue-800 font-semibold m-3">Performance Tracking</h3>
              </div>
              <p className="text-gray-600">Analyze open rates, responses, and conversions with real-time analytics.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl text-blue-600 mb-4 flex">
                🎯
                <h3 className="text-xl text-blue-800 font-semibold m-3">Targeted Campaigns</h3>
              </div>
              <p className="text-gray-600">Optimize your outreach with AI-driven email personalization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Scaling Your Outreach Today!</h2>
          <p className="mb-8">Sign up now and supercharge your email campaigns with SnowMail.</p>
          <a href="/login" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SnowMail. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
