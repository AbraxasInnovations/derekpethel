import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing | Derek Pethel on Trade Finance & SPV Structures",
  description: "Thought leadership articles by Derek Pethel on trade finance, SPV structures, Section 301 tariff refunds, and non-custodial asset management.",
  alternates: {
    canonical: "https://derekpethel.com/writing",
  },
};

export default function Writing() {
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
              <Link href="/writing" className="text-blue-600 font-medium">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Writing</h1>
          <p className="text-xl text-gray-600">
            Thought leadership on trade finance, SPV structures, and emerging opportunities
          </p>
        </div>

        <div className="space-y-12">
          {/* Article 1 */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Trade Finance
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  How SPVs Engineer Asymmetric Payoffs in Litigation Finance
                </h2>
                <p className="text-gray-600 mb-4">
                  October 20, 2024 • 8 min read
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Special Purpose Vehicles (SPVs) have emerged as powerful tools for structuring 
              litigation finance investments, particularly in complex regulatory environments 
              like international trade disputes. This article explores how sophisticated SPV 
              structures can create asymmetric payoff profiles that traditional investment 
              vehicles cannot replicate.
            </p>
            
            <p className="text-gray-700 mb-6">
              The key lies in understanding the unique risk-return characteristics of litigation 
              finance and designing structures that maximize upside potential while managing 
              downside risk through careful portfolio construction and risk management techniques.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Read more on US Finance Moves</span>
              <a
                href="https://usfinancemoves.com/spv-asymmetric-payoffs"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Full Article →
              </a>
            </div>
          </article>

          {/* Article 2 */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Section 301
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  The Hidden Value in Section 301 Tariff Refund Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  October 15, 2024 • 6 min read
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Section 301 tariff refund rights represent one of the most overlooked opportunities 
              in the current market. While most investors focus on traditional asset classes, 
              the complex regulatory landscape surrounding international trade disputes has 
              created a unique opportunity for sophisticated investors.
            </p>
            
            <p className="text-gray-700 mb-6">
              This article examines the structural advantages of aggregating these rights through 
              SPV structures and the potential for significant returns as the regulatory environment 
              continues to evolve.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Read more on US Finance Moves</span>
              <a
                href="https://usfinancemoves.com/section-301-hidden-value"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Full Article →
              </a>
            </div>
          </article>

          {/* Article 3 */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Asset Management
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Non-Custodial Asset Management: The Future of Investment Structures
                </h2>
                <p className="text-gray-600 mb-4">
                  October 10, 2024 • 7 min read
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Traditional custodial arrangements are being challenged by innovative non-custodial 
              approaches that offer greater flexibility and efficiency. This shift represents a 
              fundamental change in how sophisticated investors approach asset management and 
              risk control.
            </p>
            
            <p className="text-gray-700 mb-6">
              The article explores the technical and regulatory considerations that make non-custodial 
              structures particularly attractive for complex investment strategies and alternative 
              asset classes.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Read more on US Finance Moves</span>
              <a
                href="https://usfinancemoves.com/non-custodial-asset-management"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Full Article →
              </a>
            </div>
          </article>

          {/* Article 4 */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Cybersecurity
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Cybersecurity Frameworks in Financial Services: A Strategic Perspective
                </h2>
                <p className="text-gray-600 mb-4">
                  October 5, 2024 • 5 min read
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              As financial services become increasingly digitized, cybersecurity frameworks 
              have evolved from technical requirements to strategic business enablers. This 
              article examines how modern cybersecurity approaches can create competitive 
              advantages in the financial services sector.
            </p>
            
            <p className="text-gray-700 mb-6">
              The discussion covers both technical implementation and strategic considerations, 
              providing insights for financial services professionals looking to enhance their 
              security posture while maintaining operational efficiency.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Read more on US Finance Moves</span>
              <a
                href="https://usfinancemoves.com/cybersecurity-financial-services"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Full Article →
              </a>
            </div>
          </article>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Get the latest insights on trade finance, SPV structures, and emerging opportunities 
            delivered to your inbox.
          </p>
          <a
            href="https://usfinancemoves.com/newsletter"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Subscribe to US Finance Moves
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
