import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Projects | Abraxas Innovations",
  description: "Explore Derek Pethel's key projects including Abraxas Innovations SPV structures and investment management.",
  alternates: {
    canonical: "https://derekpethel.com/projects",
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/projects" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-name">Projects</h1>
          <p className="text-xl text-gray-600 font-sans">
            Key initiatives and companies founded by Derek Pethel
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Abraxas Innovations */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold text-xl">A</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-crimson">Abraxas Innovations</h2>
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
                <h3 className="font-semibold text-gray-900 mb-2 font-crimson">Key Focus Areas:</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Non-Custodial Investment Advisory</h3>
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
