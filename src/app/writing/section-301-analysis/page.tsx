import Header from '@/components/Header'
import Image from 'next/image'

export default function Section301Analysis() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-xl max-w-none">
          <div className="mb-8">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Section 301 Analysis
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-crimson">
              Analysis of Section 301c Refund Rights and Market Overlay
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-sans">
              July 1, 2025 • 12 min read
            </p>
          </div>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            Success is capital, analysis, and execution.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            It's boring for some (Alex Skarsgård), but the execution of this combination to the best of one's ability is the task that we all, as businessmen, strive to do.
          </p>
          
          <div className="my-12 flex justify-center">
            <Image
              src="/media/alexs.jpg"
              alt="Alex Skarsgård"
              width={600}
              height={450}
              className="rounded-lg"
            />
          </div>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            <em>Note: This analysis was covered by <a href="#" className="text-blue-600 hover:text-blue-700 underline">US Finance Moves</a>.</em>
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            LBOs. Spinoffs. Special Situations.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            The words change, but the process is still the same. You are still on the same set of rails wherever you go in finance, so you better start getting used to navigating them.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-name">The Situation</h2>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            An interesting case that came across my desk was the proposition of refund rights from the recent tariffs imposed on U.S. manufacturers and importers. Most were received with disgust, but the most contentious of them all was of course the China tariffs — the egregious Section 301c, 100%+ rate tariffs.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            The tariffs weren't suggestive or performative. They were implemented, paid, and continued to be paid by increasingly upset U.S. firms.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            This set two things in motion:
          </p>
          
          <ul className="list-disc list-inside text-xl text-gray-800 mb-8 space-y-4 ml-6 font-medium font-sans">
            <li>A scathing lawsuit against the U.S. that put the tariffs on the constitutional challenge track (arguing they were unconstitutional).</li>
            <li>A separate lawsuit by a toy firm on the trade law challenge track (arguing a violation of IEEPA).</li>
          </ul>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            The administration leaned hard on both, granting stays and appeals, but the litigation still moves forward.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-name">The Action</h2>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            Purchase the rights to possible Section 301c refunds.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            <strong>Payoff:</strong> Firms would receive refunds, in force, for all tariffs paid from the beginning of implementation through final decision.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            <strong>Timeframe:</strong> With a 90th percentile range, analysis suggests both cases ultimately reach certiorari (Supreme Court), extending the timeline to roughly 12–15 months.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            <strong>Risk:</strong> The Supreme Court could rule the tariffs were legal, wiping out the capital invested in purchased rights.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            Other branches (dismissals or lower-court rulings) shorten the path but do not change the ultimate payoff distribution.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-name">Structuring the Trade</h2>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            The risk-averse trade is a purchase of these rights where your internal probability of refund &gt; 50%, net of legal/operational costs.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            That makes it a positive-EV setup, not a guaranteed win. Over time, expectancy tilts positive if the odds are accurately estimated and disciplined sizing is applied.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-name">Overlay With Prediction Markets</h2>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            The challenge is drawdown. If rights go to zero, CAGR collapses. Enter the hedge: prediction markets (e.g., Kalshi, Polymarket).
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            By overlaying contracts on "Tariffs struck down" vs. "Tariffs upheld," you can smooth returns.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-name">Example: Hypothetical Numbers</h2>
          
          <h3 className="text-2xl font-bold mb-4 mt-8 font-name">Base Rights Trade</h3>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            Purchase $1,000,000 of refund rights at 30¢ on the dollar (implied value of $3,333,333 if successful).
          </p>
          
          <ul className="list-disc list-inside text-xl text-gray-800 mb-8 space-y-4 ml-6 font-medium font-sans">
            <li>If SCOTUS rules for refunds: return = +$2,333,333 profit.</li>
            <li>If SCOTUS upholds tariffs: return = –$1,000,000 (total loss).</li>
          </ul>
          
          <h3 className="text-2xl font-bold mb-4 mt-8 font-name">Overlay With Prediction Markets</h3>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            Add $200,000 in Kalshi contracts at odds 25% refund / 75% no-refund.
          </p>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            Payout = $1 contract pays $1 if correct.
          </p>
          
          <h3 className="text-2xl font-bold mb-4 mt-8 font-name">Scenario A (Profitable):</h3>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            SCOTUS rules for refunds.
          </p>
          
          <ul className="list-disc list-inside text-xl text-gray-800 mb-8 space-y-4 ml-6 font-medium font-sans">
            <li>Rights: +$2,333,333.</li>
            <li>Contracts: Lose $200,000 (betting partial hedge against refund).</li>
            <li>Net profit = $2,133,333. CAGR boosted, Sharpe intact.</li>
          </ul>
          
          <h3 className="text-2xl font-bold mb-4 mt-8 font-name">Scenario B (Non-profitable):</h3>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            SCOTUS upholds tariffs.
          </p>
          
          <ul className="list-disc list-inside text-xl text-gray-800 mb-8 space-y-4 ml-6 font-medium font-sans">
            <li>Rights: –$1,000,000.</li>
            <li>Contracts: Win $600,000 (because $200k at 75% no-refund pays $800k, minus stake).</li>
            <li>Net loss = –$400,000. Damage controlled, downside hedged.</li>
          </ul>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 font-name">Closing Thought</h2>
          
          <p className="text-xl text-gray-800 mb-8 font-medium font-sans">
            This is not certainty, but it is positive expectancy with hedged distribution tails. The expected value math is what counts, and the combination of refund rights plus prediction contracts creates a portfolio with tolerable downside and high optionality upside.
          </p>
          
          <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
            <p className="text-sm text-gray-600 italic">
              <strong>Disclaimer:</strong> The numbers, odds, and payout examples above are entirely hypothetical and for illustrative purposes only. They do not represent actual market prices, contract availability, or legal outcomes. This is not financial advice.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
