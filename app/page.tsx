export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-purple-900">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">Go Lakers!</h1>
      <p className="text-2xl text-yellow-400 mb-12">17-Time NBA Champions</p>

      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">BREAKING NEWS</h2>
        <h3 className="text-2xl font-semibold text-purple-900 mb-2">Lakers Sign Luka Doncic in Blockbuster Deal</h3>
        <p className="text-gray-700 mb-4">
          In a shocking move that has stunned the basketball world, the Los Angeles Lakers have announced the signing of
          superstar Luka Doncic. The Slovenian phenom will join LeBron James and Anthony Davis to form what many are
          already calling the most formidable trio in NBA history.
        </p>
        <p className="text-gray-700 mb-4">
          "We're thrilled to welcome Luka to the Lakers family," said team management in a statement. "His exceptional
          playmaking abilities, scoring prowess, and basketball IQ make him the perfect addition to our championship
          roster."
        </p>
        <p className="text-gray-700 mb-4">
          Doncic, known for his step-back threes and court vision, expressed excitement about joining the storied
          franchise. "It's a dream come true to wear the purple and gold. I can't wait to get to work with my new
          teammates and bring another championship to this amazing city."
        </p>
        <div className="text-sm text-gray-500 mt-6">
          Note: This is fictional news created for demonstration purposes only.
        </div>
      </div>
    </main>
  )
}

