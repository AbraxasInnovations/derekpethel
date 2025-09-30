import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Derek Pethel | Founder of Abraxas Innovations",
  description: "Learn about Derek Pethel's background in trade finance, SPV structures, and Section 301 tariff refunds. Founder of Abraxas Innovations.",
  alternates: {
    canonical: "https://derekpethel.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header activePage="/about" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-20 mt-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 font-name">About Derek Pethel</h1>
            
            <p className="text-xl text-gray-600 mb-8 font-sans">
              Derek Pethel is the founder and managing director of <strong>Abraxas Innovations</strong>, 
              a specialized investment firm focused on SPV structures and Section 301 tariff refund opportunities. 
              With deep expertise in trade finance, non-custodial asset management, and cybersecurity, 
              Derek has built a reputation for identifying and capitalizing on asymmetric investment opportunities.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-crimson">Professional Background</h2>
          
          <p className="text-gray-700 mb-6">
            Derek&apos;s career has been defined by his ability to identify complex financial opportunities 
            that others overlook. His expertise spans multiple domains, from traditional trade finance 
            to cutting-edge cybersecurity frameworks. This multidisciplinary approach has enabled him 
            to structure innovative investment vehicles that capture value in niche markets.
          </p>

          <p className="text-gray-700 mb-6">
            As the founder of <strong>Abraxas Innovations</strong>, Derek has focused on creating 
            special purpose vehicles (SPVs) that aggregate tariff refund rights under Section 301. 
            This unique approach combines deep understanding of international trade law with sophisticated 
            financial engineering to create compelling risk-adjusted returns for investors.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-crimson">Abraxas Innovations</h2>
          
          <p className="text-gray-700 mb-6">
            <strong>Abraxas Innovations</strong> represents Derek&apos;s vision for modern investment management. 
            The firm specializes in non-custodial asset management approaches, leveraging technology and 
            innovative structures to provide investors with exposure to previously inaccessible opportunities.
          </p>

          <p className="text-gray-700 mb-6">
            The company's flagship strategy focuses on Section 301 tariff refund rights, where Derek has 
            identified significant value in the complex litigation and regulatory landscape surrounding 
            international trade disputes. Through carefully structured SPVs, Abraxas Innovations provides 
            investors with exposure to these opportunities while managing the associated risks.
          </p>


          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-crimson">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">Trade Finance</h3>
              <p className="text-gray-700">
                Deep expertise in international trade financing structures, risk management, 
                and regulatory compliance across multiple jurisdictions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">Section 301 Refunds</h3>
              <p className="text-gray-700">
                Specialized knowledge in tariff refund strategies and the complex litigation 
                landscape surrounding international trade disputes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">SPV Structures</h3>
              <p className="text-gray-700">
                Expert in designing and implementing special purpose vehicles for complex 
                financial transactions and investment strategies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-crimson">Cybersecurity</h3>
              <p className="text-gray-700">
                Comprehensive understanding of cybersecurity frameworks, risk mitigation 
                strategies, and their application to financial services.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
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
