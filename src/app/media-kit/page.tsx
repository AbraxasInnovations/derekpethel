import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        <div className="text-center mb-20 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-name">Media Kit</h1>
          <p className="text-xl text-gray-600 font-sans">
            Press resources and downloadable assets for media coverage
          </p>
        </div>

        {/* Bio Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-crimson">Biography</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-crimson">Short Bio (1-2 sentences)</h3>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-crimson">Headshots</h3>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-crimson">Company Logos</h3>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-crimson">Key Facts & Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">Abraxas Innovations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Founded: 2024</li>
                <li>• Focus: SPV structures and Section 301 tariff refunds</li>
                <li>• Recent Achievement: $5M tariff refund rights acquisition</li>
                <li>• Headquarters: Ohio, United States</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">US Finance Moves</h3>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-crimson">Press Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">Media Inquiries</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">Interview Requests</h3>
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
      <footer className="bg-emerald-card border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/media/dpsignature.PNG"
                alt="Derek Pethel Signature"
                width={120}
                height={40}
                className="opacity-80"
              />
            </div>
            <div className="text-gray-400 mb-6">
              © 2025 Derek Pethel. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <Link href="/media-kit" className="text-gray-400 hover:text-white transition-colors">
                Media Kit
              </Link>
              <a href="https://www.linkedin.com/in/derekpethel" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://x.com/derekpethel" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
