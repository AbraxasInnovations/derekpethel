import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Abraxas Innovations & US Finance Moves",
  description: "Explore Derek Pethel's key projects including Abraxas Innovations SPV structures and US Finance Moves financial media platform.",
  alternates: {
    canonical: "https://derekpethel.com/projects",
  },
};

export default function Projects() {
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
              <Link href="/projects" className="text-blue-600 font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600">
            Key initiatives and companies founded by Derek Pethel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Abraxas Innovations */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold text-xl">A</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Abraxas Innovations</h2>
                <p className="text-gray-600">Investment Management & SPV Structures</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              <strong>Abraxas Innovations</strong> is a specialized investment firm focused on 
              creating sophisticated SPV structures for complex financial opportunities. The 
              company specializes in aggregating tariff refund rights under Section 301 and 
              other litigation finance opportunities.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Focus Areas:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Section 301 tariff refund rights aggregation</li>
                  <li>• SPV structure design and implementation</li>
                  <li>• Non-custodial asset management</li>
                  <li>• Litigation finance opportunities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recent Achievement:</h3>
                <p className="text-gray-700">
                  Successfully structured and deployed an SPV that acquired $5 million in 
                  tariff refund rights, representing one of the largest known aggregations 
                  in the current market.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://abraxasinnovations.com"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Visit Website
              </a>
              <Link
                href="/press"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Read Coverage
              </Link>
            </div>
          </div>

          {/* US Finance Moves */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold text-xl">U</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">US Finance Moves</h2>
                <p className="text-gray-600">Financial Media & Analysis Platform</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              <strong>US Finance Moves</strong> is a financial media platform that provides 
              in-depth analysis of complex financial transactions, market opportunities, and 
              emerging trends in alternative investments. The platform serves as both an 
              educational resource and a means of sharing insights about sophisticated 
              investment strategies.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Focus:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Trade finance and international markets</li>
                  <li>• SPV structures and litigation finance</li>
                  <li>• Section 301 tariff refund analysis</li>
                  <li>• Alternative investment opportunities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recent Coverage:</h3>
                <p className="text-gray-700">
                  Featured analysis of the Ohio-based SPV acquisition, providing detailed 
                  insights into the structure and implications of the $5 million tariff 
                  refund rights transaction.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://usfinancemoves.com"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Visit Website
              </a>
              <Link
                href="/writing"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Initiatives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cybersecurity Consulting</h3>
              <p className="text-gray-700 mb-4">
                Providing strategic cybersecurity guidance to financial services firms, 
                focusing on risk management frameworks and implementation strategies.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Focus:</strong> Financial services security, risk assessment, compliance frameworks
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Advisory</h3>
              <p className="text-gray-700 mb-4">
                Offering specialized advisory services for complex investment structures 
                and alternative asset opportunities in the litigation finance space.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Focus:</strong> SPV design, risk management, regulatory compliance
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
          <p className="text-gray-600 mb-6">
            Derek is always interested in exploring new opportunities and partnerships 
            in the areas of trade finance, litigation finance, and alternative investments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </Link>
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
