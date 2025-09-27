import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto h-32 w-32 relative mb-8">
            <Image
              src="/media/derek-pethel.png"
              alt="Derek Pethel, founder of Abraxas Innovations"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Derek Pethel
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Founder, <strong>Abraxas Innovations</strong> — Specializing in SPV structures, 
            Section 301 tariff refunds, and non-custodial asset management.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://abraxasinnovations.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Abraxas Innovations
            </Link>
            <Link
              href="https://usfinancemoves.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              US Finance Moves
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Press Coverage
            </Link>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trade Finance
              </h3>
              <p className="text-gray-600">
                Specialized knowledge in international trade financing structures and risk management.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Section 301 Refunds
              </h3>
              <p className="text-gray-600">
                Expert in tariff refund strategies and Section 301 litigation finance opportunities.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                SPV Structures
              </h3>
              <p className="text-gray-600">
                Designing and implementing special purpose vehicles for complex financial transactions.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Non-Custodial Asset Management
              </h3>
              <p className="text-gray-600">
                Innovative approaches to asset management without traditional custodial arrangements.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cybersecurity
              </h3>
              <p className="text-gray-600">
                Deep understanding of cybersecurity frameworks and risk mitigation strategies.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Litigation Finance
              </h3>
              <p className="text-gray-600">
                Structuring and managing litigation finance investments with asymmetric payoff potential.
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
