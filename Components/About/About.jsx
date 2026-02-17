import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900 text-white">

      {/* Features Section */}
      <section className="py-20 bg-indigo-950/30 backdrop-blur-md">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          Why Choose <span className="text-yellow-400">DJ Zaibii</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
          <div className="p-6 bg-indigo-800/40 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              Premium Sound Quality
            </h3>
            <p className="text-gray-300">
              High-end sound systems that deliver crystal-clear audio and deep bass
              for every type of event.
            </p>
          </div>
          <div className="p-6 bg-indigo-800/40 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              Professional Team
            </h3>
            <p className="text-gray-300">
              Experienced DJs and sound engineers ensuring smooth, seamless, and
              energetic event experiences.
            </p>
          </div>
          <div className="p-6 bg-indigo-800/40 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              Custom Packages
            </h3>
            <p className="text-gray-300">
              From weddings to concerts, tailor your sound setup to fit your budget
              and event requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-black">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to make your event unforgettable?
        </h2>
        <p className="text-lg mb-6">
          Book DJ Zaibii Sound System today and let the music do the magic!
        </p>
        <Link
          href="/bookings"
          className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300"
        >
          Reserve Your Slot 🎧
        </Link>
      </section>
    </div>
  );
}
