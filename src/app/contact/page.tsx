import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Derek Pethel | Business Inquiries & Media",
  description: "Get in touch with Derek Pethel for business inquiries, media requests, or partnership opportunities. Contact information for Abraxas Innovations and US Finance Moves.",
  alternates: {
    canonical: "https://derekpethel.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Derek Pethel
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/press" className="text-gray-600 hover:text-gray-900">
                Press
              </Link>
              <Link href="/writing" className="text-gray-600 hover:text-gray-900">
                Writing
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-gray-600">
            Get in touch for business inquiries, media requests, or partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a topic</option>
                  <option value="business">Business Inquiry</option>
                  <option value="media">Media Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              {/* General Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Inquiries</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a href="mailto:hello@derekpethel.com" className="text-blue-600 hover:text-blue-700 ml-1">
                      hello@derekpethel.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </div>

              {/* Media Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Media & Press</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a href="mailto:press@derekpethel.com" className="text-blue-600 hover:text-blue-700 ml-1">
                      press@derekpethel.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                  <p className="text-gray-700">
                    <strong>Available for:</strong> Interviews, quotes, expert commentary
                  </p>
                </div>
              </div>

              {/* Business Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Business & Partnerships</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a href="mailto:business@derekpethel.com" className="text-blue-600 hover:text-blue-700 ml-1">
                      business@derekpethel.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Focus Areas:</strong> Investment opportunities, strategic partnerships, advisory services
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/derekpethel"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/derekpethel"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Twitter/X
                  </a>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Abraxas Innovations</h4>
                  <p className="text-gray-700 text-sm">
                    <a href="https://abraxasinnovations.com" className="text-blue-600 hover:text-blue-700">
                      abraxasinnovations.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">US Finance Moves</h4>
                  <p className="text-gray-700 text-sm">
                    <a href="https://usfinancemoves.com" className="text-blue-600 hover:text-blue-700">
                      usfinancemoves.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What types of investment opportunities does Abraxas Innovations focus on?
              </h3>
              <p className="text-gray-700">
                Abraxas Innovations specializes in SPV structures for Section 301 tariff refund rights 
                and other litigation finance opportunities. We focus on asymmetric payoff structures 
                in complex regulatory environments.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is Derek available for speaking engagements or interviews?
              </h3>
              <p className="text-gray-700">
                Yes, Derek is available for speaking engagements, interviews, and expert commentary 
                on topics including trade finance, SPV structures, litigation finance, and cybersecurity 
                in financial services. Please contact press@derekpethel.com for scheduling.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I stay updated on Derek's latest insights and analysis?
              </h3>
              <p className="text-gray-700">
                Follow US Finance Moves for regular analysis and insights on complex financial 
                transactions. You can also follow Derek on LinkedIn and Twitter for real-time 
                updates and commentary.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600">
              © 2024 Derek Pethel. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/media-kit" className="text-gray-600 hover:text-gray-900">
                Media Kit
              </Link>
              <a href="https://www.linkedin.com/in/derekpethel" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </a>
              <a href="https://x.com/derekpethel" className="text-gray-600 hover:text-gray-900">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
