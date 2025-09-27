import { Metadata } from "next";
import Link from "next/link";
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Coverage</h1>
          <p className="text-xl text-gray-600">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Press Mentions</h2>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Resources</h2>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Press Inquiries</h2>
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
