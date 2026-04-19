import Image from "next/image";

export default function HelpHubLanding() {
  return (
    <div className="min-h-screen bg-hh-bg text-hh-dark font-sans selection:bg-hh-accent/30">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-hh-accent rounded-full"></div>
            HelpHub AI
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="text-hh-dark">Home</a>
            <a href="#">Explore</a>
            <a href="#">Leaderboard</a>
            <a href="#">AI Center</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-xs text-gray-500 uppercase tracking-widest">Live community signals</span>
          <button className="bg-hh-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold">
            Join the platform
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Main Hero Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-12 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-400 mb-6 uppercase">SMIT Grand Coding Night 2024</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                Find help faster.<br />
                Become help that matters.
              </h1>
              <p className="text-gray-500 max-w-lg mb-10 text-lg leading-relaxed">
                HelpHub AI is a community-powered support network for students, mentors, creators, and builders.
                Ask for help, offer help, track impact, and let AI surface smarter matches.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <button className="bg-hh-dark text-white px-8 py-3.5 rounded-lg font-medium">Open product demo</button>
                <button className="bg-transparent text-hh-dark border border-gray-200 px-8 py-3.5 rounded-lg font-medium">Post a request</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold">384+</p>
                <p className="text-sm text-gray-400">Members in the loop</p>
              </div>
              <div>
                <p className="text-3xl font-bold">54+</p>
                <p className="text-sm text-gray-400">Support posts</p>
              </div>
              <div>
                <p className="text-3xl font-bold">23+</p>
                <p className="text-sm text-gray-400">Problems solved</p>
              </div>
            </div>
          </div>

          {/* Side Feature Card */}
          <div className="lg:col-span-4 bg-hh-dark text-white rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mr-10 -mt-10 blur-3xl opacity-20"></div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-4">LIVE PRODUCT FEEL</p>
              <h2 className="text-3xl font-medium leading-tight mb-4">More than a form.<br />More like an ecosystem.</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">A polished multi-page experience inspired by product platforms, with AI summaries and leaderboard momentum.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-sm font-medium">AI request intelligence</p>
                <p className="text-[10px] text-gray-400 mt-1">Auto-categorization, urgency detection, tags.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-sm font-medium">Community trust graph</p>
                <p className="text-[10px] text-gray-400 mt-1">Badges, helper rankings, trust score boosts.</p>
              </div>
              <div className="flex items-center gap-4 p-2">
                <p className="text-3xl font-bold">92%</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Top trust score currently active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Steps Section */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Core Flow</p>
              <h3 className="text-3xl font-bold tracking-tight">From struggling alone to solving together</h3>
            </div>
            <button className="text-sm font-semibold border-b-2 border-hh-dark pb-1">Try onboarding AI</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Ask for help clearly", desc: "Create structured requests with category, urgency, and tags that attract the right people." },
              { title: "Discover the right people", desc: "Use the explore feed, helper lists, and messaging to move quickly once a match happens." },
              { title: "Track real contribution", desc: "Trust scores, badges, and solved requests help the community recognize support." }
            ].map((step, i) => (
              <div key={i} className="group">
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Requests Grid */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Community problems currently in motion</h3>
            <button className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-xs font-bold">View full feed</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RequestCard
              category="Web Development"
              urgency="High"
              status="Open"
              title="Need help making my portfolio responsive before demo day"
              desc="My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening."
              tags={['HTML/CSS', 'Responsive', 'Portfolio']}
              author="Sara Noor"
            />
            <RequestCard
              category="Design"
              urgency="Medium"
              status="Open"
              title="Looking for Figma feedback on a volunteer event poster"
              desc="I have a draft poster for a campus community event and want sharper hierarchy and spacing."
              tags={['Figma', 'Poster', 'Design Review']}
              author="Ayesha Khan"
            />
            <RequestCard
              category="Career"
              urgency="Low"
              status="Solved"
              title="Need mock interview support for internship applications"
              desc="Applying to frontend internships and need someone to practice behavioral and technical questions."
              tags={['Interview Prep', 'Career', 'Frontend']}
              author="Sara Noor"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// Sub-component for the cards at the bottom
function RequestCard({ category, urgency, status, title, desc, tags, author }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between h-full">
      <div>
        <div className="flex gap-2 mb-4">
          <span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500">{category}</span>
          <span className={`text-[10px] font-bold px-2 py-1 rounded ${urgency === 'High' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>{urgency}</span>
          <span className="text-[10px] font-bold bg-green-100 text-green-600 px-2 py-1 rounded">{status}</span>
        </div>
        <h4 className="font-bold text-sm mb-2 leading-snug">{title}</h4>
        <p className="text-gray-400 text-xs mb-4 line-clamp-3 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t: string) => <span key={t} className="text-[9px] border border-gray-100 px-2 py-0.5 rounded text-gray-400 italic">#{t}</span>)}
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div className="text-[10px]">
          <span className="font-bold">{author}</span>
          <p className="text-gray-400">Karachi • 1 helper interested</p>
        </div>
        <button className="text-[10px] font-bold border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">Open details</button>
      </div>
    </div>
  )
}
