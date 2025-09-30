import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Press Coverage | Derek Pethel & Abraxas Innovations",
  description: "Media coverage and press mentions featuring Derek Pethel, Abraxas Innovations, and US Finance Moves. Latest news on SPV structures and Section 301 tariff refunds.",
  alternates: {
    canonical: "https://derekpethel.com/press",
  },
};

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/press" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-name">Press Coverage</h1>
          <p className="text-xl text-gray-600 font-sans">
            Media coverage and press mentions featuring Derek Pethel, Abraxas Innovations, and US Finance Moves
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                Featured Story
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-crimson">
                Ohio-Based SPV Quietly Acquires $5 Million in Tariff Refund Rights
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>US Finance Moves</strong> • September 26, 2024
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            An Ohio-based special purpose vehicle (SPV) has quietly acquired approximately $5 million 
            in tariff refund rights under Section 301, marking one of the largest known aggregations 
            of such rights in the current market. The acquisition, structured by <strong>Abraxas Innovations</strong>, 
            represents a sophisticated approach to litigation finance in the international trade arena.
          </p>
          
          <p className="text-gray-700 mb-6">
            Derek Pethel, founder of Abraxas Innovations, explained that the SPV structure allows 
            for efficient aggregation of smaller tariff refund claims while providing investors with 
            exposure to the potential upside of successful litigation outcomes. "This represents a 
            unique opportunity to capture value in a complex regulatory environment," Pethel noted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://usfinancemoves.com/spv-tariff-refund-rights"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Read Full Report on USFM
            </a>
            <Link
              href="/media-kit"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Download Media Kit
            </Link>
          </div>
        </div>

        {/* Press Mentions */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-crimson">Recent Press Mentions</h2>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-crimson">
              "Innovative SPV Structures in Litigation Finance"
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Trade Finance Weekly</strong> • October 15, 2024
            </p>
            <p className="text-gray-700">
              Derek Pethel of Abraxas Innovations discusses the growing role of SPVs in litigation 
              finance, particularly in the context of international trade disputes and tariff refund strategies.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-crimson">
              "Section 301 Refunds: A New Asset Class Emerges"
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Alternative Investment Review</strong> • October 8, 2024
            </p>
            <p className="text-gray-700">
              Analysis of the emerging market for Section 301 tariff refund rights, featuring insights 
              from Derek Pethel on the structural advantages of SPV-based approaches to litigation finance.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-crimson">
              "Non-Custodial Asset Management Gains Traction"
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Financial Technology Today</strong> • September 30, 2024
            </p>
            <p className="text-gray-700">
              Derek Pethel shares his perspective on the evolution of non-custodial asset management 
              and its applications in complex financial structures and alternative investments.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-crimson">
              "Cybersecurity in Financial Services: A Founder's View"
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Security Weekly</strong> • September 22, 2024
            </p>
            <p className="text-gray-700">
              Derek Pethel discusses the critical importance of cybersecurity frameworks in modern 
              financial services, drawing from his experience in both technology and finance.
            </p>
          </div>
        </div>

        {/* Media Kit CTA */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-crimson">Media Resources</h2>
          <p className="text-gray-600 mb-6">
            Download high-resolution photos, company logos, and press materials for your coverage.
          </p>
          <Link
            href="/media-kit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Download Media Kit
          </Link>
        </div>

        {/* Contact for Press */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 font-crimson">Press Inquiries</h2>
          <p className="text-gray-600 mb-4">
            For media inquiries, interviews, or additional information, please contact:
          </p>
          <a
            href="mailto:press@derekpethel.com"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            press@derekpethel.com
          </a>
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
