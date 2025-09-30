import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

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
      <Header activePage="/writing" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-20 mt-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 font-name">Writing</h1>
                <p className="text-xl text-gray-600 font-sans">
                  Thought leadership on trade finance, SPV structures, and emerging opportunities
                </p>
              </div>

        <div className="space-y-16">
          {/* Featured Article */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Section 301 Analysis
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 font-crimson">
                  Analysis of Section 301c Refund Rights and Market Overlay
                </h2>
                <p className="text-xl text-gray-600 mb-4 font-sans">
                  July 1, 2025 • 12 min read
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              Success is capital, analysis, and execution.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              It's boring for some (Alex Skarsgård), but the execution of this combination to the best of one's ability is the task that we all, as businessmen, strive to do.
            </p>
            
            <div className="my-6 flex justify-center">
              <Image
                src="/media/alexs.jpg"
                alt="Alex Skarsgård"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              <em>Note: This analysis was covered by <a href="#" className="text-blue-600 hover:text-blue-700 underline">US Finance Moves</a>.</em>
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              LBOs. Spinoffs. Special Situations. The words change, but the process is still the same. You are still on the same set of rails wherever you go in finance, so you better start getting used to navigating them.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              An interesting case that came across my desk was the proposition of refund rights from the recent tariffs imposed on U.S. manufacturers and importers. Most were received with disgust, but the most contentious of them all was of course the China tariffs — the egregious Section 301c, 100%+ rate tariffs.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              The tariffs weren't suggestive or performative. They were implemented, paid, and continued to be paid by increasingly upset U.S. firms. This set two things in motion: a scathing lawsuit against the U.S. that put the tariffs on the constitutional challenge track, and a separate lawsuit by a toy firm on the trade law challenge track.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              The risk-averse trade is a purchase of these rights where your internal probability of refund &gt; 50%, net of legal/operational costs. That makes it a positive-EV setup, not a guaranteed win. Over time, expectancy tilts positive if the odds are accurately estimated and disciplined sizing is applied.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Read the full analysis</span>
              <Link
                href="/writing/section-301-analysis"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Full Article →
              </Link>
            </div>
          </article>

          {/* Cybersecurity Article */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Cybersecurity
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 font-crimson">
                  The Hidden Vulnerability Costing Small Businesses Trust (and Traffic)
                </h2>
                <p className="text-xl text-gray-600 mb-4 font-sans">
                  January 15, 2025 • 8 min read
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              Most business owners don't think twice about what's missing from their website.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              They hire a designer, launch the page, maybe write a few blog posts — and assume it's secure by default.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              But beneath the surface, an invisible layer of protection is often forgotten: HTTP security headers. These small, silent pieces of code are designed to protect customers, preserve trust, and lock down the front door of your business before a breach ever happens.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              And most sites don't have them.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              Take a real-world example — anonymized here as NatureRoot Collective — an eCommerce business generating roughly 20,000 visits per month. The site looks polished, loads quickly, and is built on a popular CMS. But behind the scenes, it's missing all critical security headers.
            </p>
            
            <div className="my-6 flex justify-center">
              <Image
                src="/media/traffic.png"
                alt="Site Traffic Dashboard showing 20,000 visits per month"
                width={500}
                height={375}
                className="rounded-lg"
              />
            </div>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              Security headers are instructions sent from the server to your visitor's browser. They define what kinds of content can be loaded, how to treat scripts, and how strict the browser should be in protecting the user.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              Without them, attackers can inject malicious scripts, hijack ad space, embed your website in phishing pages, and load external scripts that appear legitimate to the user. The worst part? It all happens invisibly.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              Traffic gets siphoned. Trust erodes. And you might never realize why conversion dropped.
            </p>
            
            <p className="text-xl text-gray-800 mb-4 font-medium font-sans">
              This is where <strong>ABX Security</strong> steps in. We specialize in diagnosing and patching these silent vulnerabilities with minimal interference to your stack. Whether your site runs on WordPress, custom code, or a commercial builder, we identify what's missing and secure it — often in less than 48 hours.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Read the full analysis</span>
              <Link
                href="/writing/cybersecurity-vulnerability"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Full Article →
              </Link>
            </div>
          </article>

          {/* Article 1 */}
          <article className="border-b border-gray-200 pb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Trade Finance
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-crimson">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-crimson">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-crimson">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-crimson">
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
