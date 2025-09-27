import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Derek Pethel | Founder of Abraxas Innovations",
  description: "Learn about Derek Pethel's background in trade finance, SPV structures, and Section 301 tariff refunds. Founder of Abraxas Innovations and US Finance Moves.",
  alternates: {
    canonical: "https://derekpethel.com/about",
  },
};

export default function About() {
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
              <Link href="/about" className="text-blue-600 font-medium">
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
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Derek Pethel</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Derek Pethel is the founder and managing director of <strong>Abraxas Innovations</strong>, 
            a specialized investment firm focused on SPV structures and Section 301 tariff refund opportunities. 
            With deep expertise in trade finance, non-custodial asset management, and cybersecurity, 
            Derek has built a reputation for identifying and capitalizing on asymmetric investment opportunities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Professional Background</h2>
          
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

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Abraxas Innovations</h2>
          
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

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">US Finance Moves</h2>
          
          <p className="text-gray-700 mb-6">
            Derek is also the founder of <strong>US Finance Moves</strong>, a financial media platform 
            that provides in-depth analysis of complex financial transactions and market opportunities. 
            The platform serves as both an educational resource and a means of sharing insights about 
            the sophisticated strategies employed by Abraxas Innovations.
          </p>

          <p className="text-gray-700 mb-6">
            Through US Finance Moves, Derek has established himself as a thought leader in the space, 
            regularly publishing analysis on trade finance, SPV structures, and emerging opportunities 
            in litigation finance. The platform has become a trusted source for professionals seeking 
            to understand complex financial instruments and market dynamics.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trade Finance</h3>
              <p className="text-gray-700">
                Deep expertise in international trade financing structures, risk management, 
                and regulatory compliance across multiple jurisdictions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 301 Refunds</h3>
              <p className="text-gray-700">
                Specialized knowledge in tariff refund strategies and the complex litigation 
                landscape surrounding international trade disputes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SPV Structures</h3>
              <p className="text-gray-700">
                Expert in designing and implementing special purpose vehicles for complex 
                financial transactions and investment strategies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cybersecurity</h3>
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
