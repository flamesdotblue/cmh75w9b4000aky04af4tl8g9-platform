import { Leaf, Trophy, Users, Cpu } from 'lucide-react';

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-14 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/40 to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">What defines Chitradurga House</h2>
          <p className="mt-2 text-neutral-700">Grounded in strong values and forward-looking initiatives, we enable students to compete, collaborate, and care.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={<Trophy className="h-5 w-5 text-red-600" />} title="Achievement Culture" desc="Weekly clubs, inter-house meets, and Olympiad prep build consistency and confidence."/>
          <Card icon={<Users className="h-5 w-5 text-red-600" />} title="Leadership & Service" desc="Mentorship circles and student councils foster ownership, empathy, and teamwork."/>
          <Card icon={<Cpu className="h-5 w-5 text-red-600" />} title="Tech & Innovation" desc="Robotics, coding labs, and maker challenges connect curiosity with real-world impact."/>
          <Card icon={<Leaf className="h-5 w-5 text-red-600" />} title="Green Initiatives" desc="Eco-drives, zero-waste events, and campus audits champion sustainability."/>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">Recent Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-600"></span> Champions of the Inter-House Science Quiz, with record participation and top scores.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-600"></span> Led the annual Tree Census: 300+ saplings adopted and monitored by students.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-600"></span> Coding Hack-Day: 24 teams built education and climate tools using open data.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-red-600"></span> Sports spirit award for fair play and teamwork across athletics events.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm" id="join">
            <h3 className="text-lg font-semibold text-neutral-900">Join the House</h3>
            <p className="mt-2 text-neutral-700">New to school or moving from another house? Here’s how you can participate from day one.</p>
            <ol className="mt-4 space-y-3 text-sm text-neutral-800 list-decimal list-inside">
              <li>Sign up for a club: Robotics, Eco, Arts, or Athletics.</li>
              <li>Attend the House Huddle every Friday for updates and mentorship.</li>
              <li>Volunteer for an upcoming event—earn credits and leadership badges.</li>
              <li>Represent us in inter-house competitions—coaches will guide you.</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#home" className="px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm">I’m In</a>
              <a href="#about" className="px-5 py-3 rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors">House Handbook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-md bg-red-50 border border-red-100 grid place-items-center">
          {icon}
        </div>
        <h3 className="font-semibold text-neutral-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-700">{desc}</p>
    </div>
  );
}
