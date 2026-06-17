import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Landmark,
  LineChart,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import landingHero from "@/assets/landing-page-hero.jpg";
import featureGrow from "@/assets/landing-feature-grow.jpg";

export function LandingScreen() {
  const benefits = [
    {
      icon: PiggyBank,
      title: "Start from KES 250",
      description:
        "No big capital, no waiting. Top up directly from M-Pesa in seconds.",
      iconWrap: "bg-emerald-100 text-emerald-700",
      cardWrap: "bg-[#edf8f3]",
    },
    {
      icon: LineChart,
      title: "Daily growth, visible",
      description:
        "Watch your earnings tick up live. No guesswork, no hidden fees.",
      iconWrap: "bg-blue-100 text-blue-700",
      cardWrap: "bg-[#f2f3fb]",
    },
    {
      icon: ShieldCheck,
      title: "Regulated & safe",
      description:
        "CBK licensed, CMA regulated. Your money protected by Kenyan law.",
      iconWrap: "bg-fuchsia-100 text-fuchsia-700",
      cardWrap: "bg-[#f8eff7]",
    },
  ];

  const livePoints = [
    "Instant M-Pesa deposits & withdrawals",
    "Daily yield up to 10%",
    "Smart goal tracker",
    "Quarterly NSE dividends",
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8faf8] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8faf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-md">
              <Sparkles className="h-5 w-5" strokeWidth={2.4} />
            </div>
            <div>
              <p className="text-base font-extrabold leading-none tracking-tight">PATAFEDHA</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Micro-investing
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#why" className="transition-colors hover:text-slate-950">Why PataFedha</a>
            <a href="#earnings" className="transition-colors hover:text-slate-950">Live earnings</a>
            <a href="#cta" className="transition-colors hover:text-slate-950">Get started</a>
          </nav>
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Start Earning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-100/50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-800">
              <Sparkles className="h-3.5 w-3.5" />
              Kenya&apos;s #1 micro-investment app
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              <span className="text-emerald-600">Get Money.</span>
              <br />
              <span className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Every Single
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Day.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-[1.72rem] md:leading-[1.45] md:text-[clamp(1.15rem,1.3vw,1.45rem)]">
              Start investing from <span className="font-extrabold text-emerald-700">KES 250</span> in
              M-Pesa Plus, KCB Wekeza, Safaricom Hisa and more. Watch your money grow daily
              straight from your phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/login"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95"
              >
                Start Earning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#why"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-950 transition-colors hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/40 via-amber-200/40 to-orange-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-3 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
              <img
                src={landingHero}
                alt="PataFedha app preview with growth stats"
                width={1536}
                height={1280}
                className="h-full w-full rounded-[2rem] object-cover"
              />
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-[1.6rem] bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Today</p>
                  <p className="text-3xl font-black leading-none text-emerald-700">+KES 1,240</p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-[1.6rem] bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Members</p>
                  <p className="text-2xl font-black leading-none text-fuchsia-700">50,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto w-full max-w-7xl px-5 py-20">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700">
            Why PataFedha
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
            Built for the <span className="text-blue-600">hustler</span>, the{" "}
            <span className="text-orange-500">saver</span>, and the{" "}
            <span className="text-emerald-500">dreamer</span>.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className={`rounded-[2rem] border border-slate-200/80 ${item.cardWrap} p-7 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-1`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${item.iconWrap}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-[2rem] font-black leading-tight tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-lg leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="earnings"
        className="mx-auto w-full max-w-7xl px-5 pb-20"
      >
        <div className="grid items-center gap-10 rounded-[2.5rem] border border-[#ebe5d6] bg-[linear-gradient(135deg,#f5f8ef_0%,#f6f0de_48%,#f8f4ea_100%)] p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.28)] md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <span className="inline-flex rounded-full bg-[#f3dfac] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#bb5b00]">
              Live earnings
            </span>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-tight md:text-6xl">
              Your money,
              <br />
              <span className="text-orange-500">growing in real-time.</span>
            </h2>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-slate-500">
              Every second your portfolio earns. See the counter tick. See the progress.
              Withdraw to M-Pesa instantly, anytime.
            </p>

            <ul className="mt-8 space-y-4">
              {livePoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-xl font-semibold text-slate-950">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/login"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-extrabold text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              Try it now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/25 to-yellow-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/30 p-3">
              <img
                src={featureGrow}
                alt="Phone showing stacked coins and earnings growth"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full rounded-[2rem] object-cover shadow-[0_35px_90px_-35px_rgba(15,23,42,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto w-full max-w-7xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 p-10 text-center text-white shadow-2xl md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

          <Landmark className="mx-auto h-10 w-10 text-amber-300" />
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Ready to start earning daily?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Open your account, fund from M-Pesa, and start tracking growth from your phone.
          </p>
          <Link
            to="/login"
            className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-emerald-700 shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            Start Earning <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} PataFedha. Kenya&apos;s micro-investment app.</p>
          <p>Built for everyday growth.</p>
        </div>
      </footer>
    </div>
  );
}
