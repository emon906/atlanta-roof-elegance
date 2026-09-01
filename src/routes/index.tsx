import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Hammer,
  HardHat,
  Home,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/perimeter-roofing-hero.mp4.asset.json";
import residentialImage from "@/assets/featured-residential.jpg";
import commercialImage from "@/assets/featured-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perimeter Roofing | Atlanta Roofing Experts" },
      { name: "description", content: "Premium residential and commercial roofing built for Atlanta. Get a complimentary roof assessment from Perimeter Roofing." },
      { property: "og:title", content: "Perimeter Roofing | Atlanta Roofing Experts" },
      { property: "og:description", content: "Premium residential and commercial roofing built for Atlanta." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Residential Roofing", text: "Architectural systems selected to elevate your home and protect it through every Georgia season." },
  { icon: Building2, title: "Commercial Roofing", text: "High-performance flat and low-slope systems engineered around your property and operations." },
  { icon: ShieldCheck, title: "Roof Replacement", text: "A disciplined, detail-led replacement process with premium materials and clear communication." },
  { icon: Hammer, title: "Repairs & Restoration", text: "Fast diagnostics and lasting repairs—from storm damage and leaks to full exterior restoration." },
];

const projects = [
  { image: residentialImage, title: "Buckhead Estate", type: "Residential · Architectural Shingle", size: "md:col-span-7" },
  { image: commercialImage, title: "Midtown Commerce", type: "Commercial · TPO System", size: "md:col-span-5" },
];

const reviews = [
  { quote: "Perimeter handled every detail with absolute professionalism. The crew was immaculate, the communication was excellent, and the finished roof transformed our home.", name: "Lauren M.", place: "Buckhead" },
  { quote: "They approached our commercial property like a long-term asset, not just another job. On schedule, highly organized, and the workmanship speaks for itself.", name: "Marcus T.", place: "Atlanta" },
  { quote: "From inspection through cleanup, the process was exceptional. We always knew what was happening and the result exceeded our expectations.", name: "David R.", place: "Sandy Springs" },
];

function Brand() {
  return <a href="#top" aria-label="Perimeter Roofing home" className="flex items-center gap-3"><span className="relative flex h-9 w-9 items-center justify-center text-primary"><Home className="h-8 w-8" strokeWidth={1.5} /><span className="absolute bottom-1.5 h-2.5 w-2.5 bg-background" /></span><span className="font-display text-lg font-bold uppercase leading-none">Perimeter<span className="mt-1 block text-[0.58rem] font-medium uppercase tracking-[0.34em] text-primary">Roofing</span></span></a>;
}

function SectionIntro({ label, title, copy, center = false }: { label: string; title: string; copy?: string; center?: boolean }) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-primary"><span className="inline-block h-px w-8 bg-primary" />{label}</p><h2 className="text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h2>{copy && <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>}</div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const nav = ["About", "Services", "Projects", "Process", "Contact"];

  return (
    <main id="top" className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10"><Brand /><nav className="hidden items-center gap-8 lg:flex">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">{item}</a>)}</nav><div className="hidden items-center gap-6 md:flex"><a href="tel:+14045550192" className="flex items-center gap-2 text-sm font-semibold"><Phone className="h-4 w-4 text-primary" />(404) 555-0192</a><Button asChild variant="premium"><a href="#contact">Free Estimate <ArrowRight /></a></Button></div><Button variant="ghost" size="icon" aria-label="Toggle navigation" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-6 md:hidden">{nav.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="block border-b border-border py-4 text-sm font-semibold uppercase tracking-widest">{item}</a>)}</nav>}
      </header>

      <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-20">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" aria-label="Aerial view of premium roofing work in Atlanta"><source src={heroVideo.url} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/25" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20"><div className="max-w-4xl animate-rise"><p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary"><MapPin className="h-4 w-4" /> Atlanta, Georgia</p><h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-8xl">Above everything.<br /><span className="text-primary">Built to endure.</span></h1><p className="mt-7 max-w-xl text-base leading-7 text-foreground/75 md:text-lg">Atlanta’s premium roofing partner for homes and commercial properties that demand exceptional protection and precise craftsmanship.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" variant="premium"><a href="#contact">Get a Free Estimate <ArrowRight /></a></Button><Button asChild size="lg" variant="glass"><a href="#projects">Explore Our Work</a></Button></div></div><div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-foreground/20 pt-6 text-xs uppercase tracking-[0.16em] text-foreground/60"><span>Licensed & Insured</span><span>Premium Materials</span><span>Atlanta Owned</span></div></div>
      </section>

      <section className="border-y border-border bg-surface-raised"><div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 md:px-10">{[["15+", "Years of craft"], ["1,200+", "Roofs completed"], ["4.9", "Average rating"], ["25 yr", "Workmanship warranty"]].map(([n,l]) => <div key={l} className="px-4 py-9 text-center"><div className="font-display text-3xl font-semibold text-primary md:text-4xl">{n}</div><div className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">{l}</div></div>)}</div></section>

      <section id="about" className="py-24 md:py-36"><div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-10"><SectionIntro label="Our standard" title="Roofing, elevated." /><div><p className="text-2xl leading-relaxed text-foreground/90 md:text-3xl">We believe a roof is more than protection. It’s a defining architectural element and a long-term investment in everything beneath it.</p><p className="mt-8 max-w-2xl leading-8 text-muted-foreground">Perimeter Roofing combines exacting installation standards, premium material systems, and responsive project management. From historic homes to complex commercial properties, we build with intention and stand behind every detail.</p><a href="#services" className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Discover our approach <ArrowRight className="h-4 w-4" /></a></div></div></section>

      <section id="services" className="border-y border-border bg-surface-raised py-24 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><SectionIntro label="Roofing services" title="Complete capability. One exacting standard." copy="Specialized residential and commercial solutions built around your property, priorities, and performance goals." /><div className="mt-16 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">{services.map(({icon: Icon,title,text}, i) => <article key={title} className="group min-h-80 border-b border-r border-border p-8 transition-colors hover:bg-accent/40"><span className="text-xs text-muted-foreground">0{i+1}</span><Icon className="mt-12 h-9 w-9 text-primary" strokeWidth={1.4}/><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><ChevronRight className="mt-7 h-5 w-5 text-primary transition-transform group-hover:translate-x-2" /></article>)}</div></div></section>

      <section className="grid lg:grid-cols-2"><div className="relative min-h-[520px]"><img src={residentialImage} alt="Premium charcoal roof on a luxury Atlanta residence" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex items-center bg-foreground px-6 py-20 text-background md:px-16"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Residential excellence</p><h2 className="mt-6 text-4xl font-semibold md:text-6xl">Designed for the home you’ve built.</h2><p className="mt-7 leading-8 text-background/65">Thoughtful recommendations. Uncompromising installation. Clean, beautifully finished roofing systems that complement your architecture and protect your family.</p><ul className="mt-8 grid gap-4 text-sm font-semibold sm:grid-cols-2">{["Architectural shingles", "Standing seam metal", "Storm restoration", "Skylights & ventilation"].map(x => <li key={x} className="flex items-center gap-3"><CircleCheck className="h-4 w-4 text-primary" />{x}</li>)}</ul><Button asChild variant="premium" size="lg" className="mt-10"><a href="#contact">Start Your Project <ArrowRight /></a></Button></div></div></section>

      <section className="grid lg:grid-cols-2"><div className="order-2 flex items-center px-6 py-20 md:px-16 lg:order-1"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Commercial performance</p><h2 className="mt-6 text-4xl font-semibold md:text-6xl">Protecting Atlanta business.</h2><p className="mt-7 leading-8 text-muted-foreground">Roofing assets engineered for uptime, efficiency, and a lower total cost of ownership—installed with minimal disruption to your operation.</p><div className="mt-9 flex gap-8"><div><div className="text-3xl font-semibold text-primary">24/7</div><div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Emergency response</div></div><div><div className="text-3xl font-semibold text-primary">100%</div><div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Safety compliant</div></div></div></div></div><div className="relative order-1 min-h-[520px] lg:order-2"><img src={commercialImage} alt="Commercial flat roofing system overlooking the Atlanta skyline" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" /></div></section>

      <section id="projects" className="border-y border-border bg-surface-raised py-24 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro label="Featured projects" title="Work that speaks for itself." /><Button asChild variant="glass"><a href="#contact">Discuss Your Project <ArrowRight /></a></Button></div><div className="mt-14 grid gap-5 md:grid-cols-12">{projects.map((p) => <article key={p.title} className={`group relative h-[440px] overflow-hidden ${p.size}`}><img src={p.image} alt={`${p.title} roofing project`} loading="lazy" width={1600} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"/><div className="absolute bottom-0 p-7"><p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">{p.type}</p><h3 className="mt-2 text-2xl font-semibold">{p.title}</h3></div></article>)}</div></div></section>

      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden"><video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover"><source src={heroVideo.url} type="video/mp4" /></video><div className="absolute inset-0 bg-background/60"/><div className="relative px-5 text-center"><button aria-label={playing ? "Pause film" : "Play film"} onClick={() => setPlaying(!playing)} className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-foreground/60 bg-background/20 backdrop-blur-md transition-transform hover:scale-110"><Play className="ml-1 h-7 w-7 fill-current" /></button><p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-primary">The Perimeter standard</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">Precision you can see. Protection you can trust.</h2></div></section>

      <section className="py-24 md:py-36"><div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:grid-cols-2 md:px-10"><SectionIntro label="Why Perimeter" title="Built differently, from first call to final nail." copy="We pair the accountability of a trusted local team with the systems, talent, and materials expected from a premier construction partner."/><div className="grid gap-px bg-border sm:grid-cols-2">{[[Award,"Master craftsmanship"],[ShieldCheck,"Premium warranties"],[Clock3,"On-time execution"],[HardHat,"Dedicated supervision"]].map(([Icon,label]) => { const I = Icon as typeof Award; return <div key={String(label)} className="bg-background p-8"><I className="h-7 w-7 text-primary"/><h3 className="mt-6 font-semibold">{String(label)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Every detail managed by experienced professionals who respect your property and your time.</p></div>})}</div></div></section>

      <section id="process" className="border-y border-border bg-surface-raised py-24 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><SectionIntro label="Our process" title="Clear at every step." center/><div className="relative mt-16 grid gap-8 md:grid-cols-4"><div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-line-bright md:block"/>{[["01","Assess","A thorough roof and property evaluation."],["02","Design","The right system, scope, and selections."],["03","Build","Disciplined installation and daily oversight."],["04","Stand behind","Final walkthrough and lasting warranty."]].map(([n,t,c]) => <div key={n} className="relative text-center"><span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-surface-raised text-xs font-bold text-primary">{n}</span><h3 className="mt-6 text-xl font-semibold">{t}</h3><p className="mx-auto mt-3 max-w-52 text-sm leading-6 text-muted-foreground">{c}</p></div>)}</div></div></section>

      <section className="py-24 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><SectionIntro label="Client results" title="Confidence, covered."/><div className="mt-14 grid gap-5 lg:grid-cols-3">{reviews.map((r) => <figure key={r.name} className="border border-border p-8"><div className="flex gap-1 text-primary">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}</div><blockquote className="mt-7 text-lg leading-8 text-foreground/85">“{r.quote}”</blockquote><figcaption className="mt-8 border-t border-border pt-5"><strong className="text-sm">{r.name}</strong><span className="ml-2 text-xs text-muted-foreground">{r.place}</span></figcaption></figure>)}</div></div></section>

      <section id="contact" className="border-t border-border bg-primary text-primary-foreground"><div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-28"><div><p className="text-xs font-bold uppercase tracking-[0.25em]">Your roof. Our reputation.</p><h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">Let’s build something that lasts.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/70">Tell us about your property. An Atlanta roofing specialist will follow up to schedule your complimentary assessment.</p><a href="tel:+14045550192" className="mt-10 inline-flex items-center gap-3 text-xl font-semibold"><Phone className="h-5 w-5" />(404) 555-0192</a></div><form className="grid gap-4" onSubmit={(e) => e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><label className="sr-only" htmlFor="name">Name</label><input id="name" required placeholder="Your name" className="h-14 rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 px-5 placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"/><label className="sr-only" htmlFor="phone">Phone</label><input id="phone" required placeholder="Phone number" className="h-14 rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 px-5 placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"/></div><label className="sr-only" htmlFor="email">Email</label><input id="email" type="email" required placeholder="Email address" className="h-14 rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 px-5 placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"/><label className="sr-only" htmlFor="project">Project details</label><textarea id="project" rows={4} placeholder="Tell us about your project" className="rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 p-5 placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"/><Button size="lg" type="submit" className="mt-2 bg-background text-foreground hover:bg-background/90">Get My Free Estimate <ArrowRight /></Button><p className="flex items-center gap-2 text-xs text-primary-foreground/65"><Check className="h-4 w-4" />No pressure. No obligation. Just expert guidance.</p></form></div></section>

      <footer className="bg-background"><div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10"><div className="grid gap-10 border-b border-border pb-12 md:grid-cols-3"><div><Brand/><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Premium roofing and exterior solutions for greater Atlanta.</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Service area</p><p className="mt-4 text-sm leading-7 text-muted-foreground">Atlanta · Buckhead · Sandy Springs<br/>Alpharetta · Marietta · Roswell</p></div><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Contact</p><p className="mt-4 text-sm leading-7 text-muted-foreground">(404) 555-0192<br/>hello@perimeterroofing.com</p></div></div><div className="flex flex-col justify-between gap-3 pt-7 text-xs text-muted-foreground sm:flex-row"><span>© 2026 Perimeter Roofing. All rights reserved.</span><span>Licensed & insured in Georgia</span></div></div></footer>
    </main>
  );
}