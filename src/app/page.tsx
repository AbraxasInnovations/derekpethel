import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mx-auto h-64 w-64 relative mb-12">
            <Image
              src="/media/derek-pethel.png"
              alt="Derek Pethel, founder of Abraxas Innovations"
              fill
              className="rounded-full object-cover border-4 border-gray-600 shadow-2xl"
              priority
            />
          </div>
          
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl mb-6 tracking-tight">
            Derek Pethel
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founder, <span className="text-white font-semibold">Abraxas Innovations</span> — 
            Specializing in SPV structures, Section 301 tariff refunds, and non-custodial asset management.
          </p>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://abraxasinnovations.com"
              className="inline-flex items-center px-8 py-4 border border-white text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 transition-all duration-300"
            >
              Abraxas Innovations
            </Link>
            <Link
              href="https://usfinancemoves.com"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-base font-medium rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              US Finance Moves
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-base font-medium rounded-lg text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Press Coverage
            </Link>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Trade Finance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized knowledge in international trade financing structures and risk management.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Section 301 Refunds
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Expert in tariff refund strategies and Section 301 litigation finance opportunities.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                SPV Structures
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Designing and implementing special purpose vehicles for complex financial transactions.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Non-Custodial Asset Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Innovative approaches to asset management without traditional custodial arrangements.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Cybersecurity
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Deep understanding of cybersecurity frameworks and risk mitigation strategies.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">
                Litigation Finance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Structuring and managing litigation finance investments with asymmetric payoff potential.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2024 Derek Pethel. All rights reserved.
            </div>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="/media-kit" className="text-gray-400 hover:text-white transition-colors">
                Media Kit
              </Link>
              <a href="https://www.linkedin.com/in/derekpethel" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://x.com/derekpethel" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
