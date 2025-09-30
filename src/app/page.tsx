import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
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
          
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl mb-6 tracking-tight font-name">
            Derek Pethel
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Derek Pethel is the founder of <span className="text-white font-semibold">Abraxas Innovations</span>, 
            specializing in SPV structures, Section 301 tariff refunds, and non-custodial asset management.
          </p>
          
          <div className="mt-16 flex justify-center items-center">
            <Link
              href="https://abraxasinnovations.com"
              className="inline-flex items-center justify-center px-6 py-4 border border-white text-base font-medium rounded-lg text-black bg-white hover:bg-gray-100 transition-all duration-300 w-64 h-20"
            >
              <Image
                src="/media/abraxasabx.png"
                alt="Abraxas Innovations"
                width={200}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-white text-center mb-16 font-crimson">
            At a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-emerald-card rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 font-crimson">
                Trade Finance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized knowledge in international trade financing structures and risk management.
              </p>
            </div>
            <div className="text-center p-8 bg-emerald-card rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 font-crimson">
                Section 301 Refunds
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Expert in tariff refund strategies and Section 301 litigation finance opportunities.
              </p>
            </div>
            <div className="text-center p-8 bg-emerald-card rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 font-crimson">
                SPV Structures
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Designing and implementing special purpose vehicles for complex financial transactions.
              </p>
            </div>
            <div className="text-center p-8 bg-emerald-card rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 font-crimson">
                Non-Custodial Asset Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Innovative approaches to asset management without traditional custodial arrangements.
              </p>
            </div>
            <div className="text-center p-8 bg-emerald-card rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 font-crimson">
                Cybersecurity
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Deep understanding of cybersecurity frameworks and risk mitigation strategies.
              </p>
            </div>
            <div className="text-center p-8 bg-emerald-card rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 font-crimson">
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
