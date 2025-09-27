import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Media Kit | Derek Pethel Press Resources",
  description: "Download high-resolution photos, company logos, and press materials for Derek Pethel, Abraxas Innovations, and US Finance Moves.",
  alternates: {
    canonical: "https://derekpethel.com/media-kit",
  },
};

export default function MediaKit() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Media Kit</h1>
          <p className="text-xl text-gray-600">
            Press resources and downloadable assets for media coverage
          </p>
        </div>

        {/* Bio Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Short Bio (1-2 sentences)</h3>
              <p className="text-gray-700 bg-white p-4 rounded border">
                Derek Pethel is the founder and managing director of Abraxas Innovations, 
                a specialized investment firm focused on SPV structures and Section 301 
                tariff refund opportunities. He is also the founder of US Finance Moves, 
                a financial media platform providing analysis of complex financial transactions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Bio (3-4 sentences)</h3>
              <p className="text-gray-700 bg-white p-4 rounded border">
                Derek Pethel is the founder and managing director of Abraxas Innovations, 
                a specialized investment firm focused on creating sophisticated SPV structures 
                for complex financial opportunities, particularly in the areas of Section 301 
                tariff refunds and litigation finance. With deep expertise in trade finance, 
                non-custodial asset management, and cybersecurity, Derek has built a reputation 
                for identifying and capitalizing on asymmetric investment opportunities that 
                others overlook. He is also the founder of US Finance Moves, a financial media 
                platform that provides in-depth analysis of complex financial transactions and 
                emerging opportunities in alternative investments. Derek's multidisciplinary 
                approach combines technical expertise with strategic insight to create innovative 
                solutions in the financial services sector.
              </p>
            </div>
          </div>
        </div>

        {/* Downloadable Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Headshots */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Headshots</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Professional Headshot</span>
              </div>
              <div className="space-y-2">
                <a
                  href="/media/derek-pethel-headshot-hires.jpg"
                  download
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Download High-Res (JPG)
                </a>
                <a
                  href="/media/derek-pethel-headshot-web.jpg"
                  download
                  className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
                >
                  Download Web Version (JPG)
                </a>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Company Logos</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-500 text-sm">Abraxas Innovations Logo</span>
              </div>
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">US Finance Moves Logo</span>
              </div>
              <div className="space-y-2">
                <a
                  href="/media/abraxas-innovations-logo.zip"
                  download
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Download Abraxas Logos (ZIP)
                </a>
                <a
                  href="/media/us-finance-moves-logo.zip"
                  download
                  className="block w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
                >
                  Download USFM Logos (ZIP)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Facts & Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Abraxas Innovations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Founded: 2024</li>
                <li>• Focus: SPV structures and Section 301 tariff refunds</li>
                <li>• Recent Achievement: $5M tariff refund rights acquisition</li>
                <li>• Headquarters: Ohio, United States</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">US Finance Moves</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Founded: 2024</li>
                <li>• Focus: Financial media and analysis</li>
                <li>• Content: Trade finance, SPV structures, litigation finance</li>
                <li>• Platform: Web-based financial news and analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Media Inquiries</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> press@derekpethel.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Response Time:</strong> Within 24 hours
              </p>
              <p className="text-gray-700">
                <strong>Availability:</strong> Monday - Friday, 9 AM - 5 PM EST
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Interview Requests</h3>
              <p className="text-gray-700 mb-2">
                Derek is available for interviews on topics including:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• SPV structures and litigation finance</li>
                <li>• Section 301 tariff refund strategies</li>
                <li>• Non-custodial asset management</li>
                <li>• Cybersecurity in financial services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Guidelines</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• All images and logos are provided for editorial use only</li>
            <li>• Please maintain proper attribution when using materials</li>
            <li>• For commercial use or licensing inquiries, please contact press@derekpethel.com</li>
            <li>• High-resolution versions available upon request</li>
          </ul>
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
              <Link href="/media-kit" className="text-blue-600 font-medium">
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
