import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
          <span className="text-yellow-400">DJ Zaibii</span> Sound System Organizer
        </h1>
        <p className="max-w-2xl text-gray-300 text-lg sm:text-xl mb-8">
        DJ Zaibii Sound System Organizer is your one-stop solution for high-quality sound and DJ setups. 
  We specialize in creating unforgettable vibes for weddings, parties, concerts, corporate gatherings, and 
  open-air events. From powerful bass beats to crystal-clear vocals, our professional-grade audio systems and 
  expert team ensure every event runs flawlessly. Whether it’s an elegant wedding or a high-energy dance floor, 
  we bring the sound that turns moments into memories. 🎶
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/bookings"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            Book Now
          </Link>
             </div>
      </section>
    </div>
  );
}
