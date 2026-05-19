import InquiryForm from "./inquiry-form";

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-40 glass-strong">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-amber-glow)] to-[var(--color-amber-brand)] flex items-center justify-center accent-glow">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--color-cream-50)]">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="font-[var(--font-display)] text-lg leading-none text-[var(--color-ink-900)]">SIS Voyage</div>
              <div className="text-[11px] text-[var(--color-ink-500)] tracking-wide">Travel done with care · EN / FR</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-5 ml-auto text-sm text-[var(--color-ink-700)]">
            <a href="#what-we-do" className="hover:text-[var(--color-amber-deep)] transition">What we do</a>
            <a href="#why" className="hover:text-[var(--color-amber-deep)] transition">Why us</a>
            <a href="#faq" className="hover:text-[var(--color-amber-deep)] transition">FAQ</a>
            <a href="#inquire" className="cta-primary rounded-xl px-4 py-2 text-sm">Start a trip</a>
          </div>
          <a href="#inquire" className="md:hidden ml-auto cta-primary rounded-xl px-3 py-1.5 text-sm">Inquire</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-[var(--color-ink-700)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage)]" />
              Fora-credentialed · IATA · Combat-disabled combat-disabled veteran-owned · Bilingual EN / FR
            </div>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl leading-tight text-[var(--color-ink-900)]">
              Travel done with care, for the trips that actually matter.
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-700)] mt-6 leading-relaxed max-w-2xl">
              SIS Voyage is a full-service travel agency. We plan church group pilgrimages, mission
              trips, destination weddings, corporate offsites, honeymoons, family safaris, and the
              once-in-a-lifetime trips — with particular depth in Christian heritage travel,
              Francophone West Africa, and bespoke group logistics.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 items-center">
              <a href="#inquire" className="cta-primary rounded-xl px-6 py-3">Start planning your trip</a>
              <a href="#what-we-do" className="cta-secondary rounded-xl px-6 py-3">See what we cover</a>
              <a
                href="https://wa.me/15125768597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-sage-deep)] hover:text-[var(--color-sage)] transition font-medium px-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                or message us on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--color-ink-500)]">
              <span>✓ No fee to you — we&apos;re paid by suppliers</span>
              <span>✓ 24/7 in-destination support via Fora</span>
              <span>✓ IATA consumer protection on every booking</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-6 sm:p-7">
              <div className="text-xs uppercase tracking-wider text-[var(--color-amber-deep)] font-semibold mb-2">
                Right now we&apos;re especially booking
              </div>
              <ul className="space-y-3 mt-4">
                <BookingHighlight label="Holy Land 2027" detail="9-12 day pilgrimages · groups of 20-50 · book 9+ months ahead" />
                <BookingHighlight label="Reformation Europe 2027" detail="Germany + Switzerland heritage · Lutheran / Reformed congregations" />
                <BookingHighlight label="Africa missions" detail="Burkina Faso, Kenya, Ghana, Senegal · church + medical teams" />
                <BookingHighlight label="Destination weddings" detail="Tuscany · Mexico · Caribbean · Bali · groups of 20-100" />
                <BookingHighlight label="Corporate offsites" detail="Leadership retreats, sales kickoffs, board retreats · single point of contact" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-ink-900)]">
            What we cover
          </h2>
          <p className="text-[var(--color-ink-700)] mt-3">
            Full-service means full-service. Christian heritage and mission travel is our deepest
            expertise — but if you can dream the trip, we can plan it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <CategoryCard
            title="Christian heritage"
            description="Holy Land · Reformation Europe · Pauline Greece · Marian sites · pilgrimages of every kind"
          />
          <CategoryCard
            title="Mission trips"
            description="Africa (Burkina, Kenya, Ghana) · Latin America (Honduras, DR, Guatemala) · Asia · medical missions · youth missions"
          />
          <CategoryCard
            title="Destination weddings"
            description="Italy · Mexico · Caribbean · Greek Isles · Cape Town · bilingual coordination with local vendors"
          />
          <CategoryCard
            title="Corporate retreats"
            description="Leadership offsites · sales kickoffs · board retreats · incentive travel · AP-ready invoicing"
          />
          <CategoryCard
            title="Honeymoons & milestones"
            description="Maldives · Bora Bora · Greek Isles · safari · Japan · anniversary trips · 25th/50th celebrations"
          />
          <CategoryCard
            title="Safari & wildlife"
            description="East African Migration · Botswana Delta · gorilla trekking · Galápagos · Antarctica"
          />
          <CategoryCard
            title="Family reunions"
            description="Multi-generational beach houses · all-inclusive resorts · cruise reunions · diaspora visits home"
          />
          <CategoryCard
            title="Luxury bespoke"
            description="Private guides · premium properties (Aman, Singita, Four Seasons) · fully custom itineraries"
          />
          <CategoryCard
            title="Anything else"
            description="Cultural roots travel · adventure · wellness retreats · cruise of any kind · solo · group · we&apos;ll figure it out"
          />
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-ink-900)] mb-6">
              Why work with us
            </h2>
            <div className="space-y-5 text-[var(--color-ink-700)]">
              <Reason
                title="A real person, not a call centre."
                body="One point of contact for your entire trip. We answer the email; we sort the problem; we&apos;re reachable when something needs fixing at midnight in Tel Aviv."
              />
              <Reason
                title="Bilingual EN / FR, native to both."
                body="Ary, our founder, is Burkinabè-American — fluent in French and English. Useful if your trip touches Francophone Africa, France, Switzerland, Quebec, or anywhere your vendors don&apos;t speak your language."
              />
              <Reason
                title="Combat-disabled combat-disabled veteran-owned, with the discipline that implies."
                body="US Army veteran background. When you need things to actually happen on schedule with people you don&apos;t know in places you&apos;ve never been, that matters."
              />
              <Reason
                title="Credentialed and protected."
                body="Fora-credentialed travel advisor (IATA-accredited). Every booking carries standard travel-industry consumer protections. Travel insurance always offered, always recommended."
              />
              <Reason
                title="No fee to you."
                body="Our compensation comes from the suppliers — hotels, cruise lines, tour operators. The price you pay is the same as booking direct. What you get extra: access, group rates, perks, and someone in your corner when something goes sideways."
              />
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            <div className="text-xs uppercase tracking-wider text-[var(--color-amber-deep)] font-semibold mb-3">
              A note from Ary
            </div>
            <p className="text-[var(--color-ink-700)] leading-relaxed mb-4">
              I started SIS Voyage to do for other travellers what I&apos;ve always done informally for
              my own circle — find the right operator, the right hotel for that exact group, the
              flight routing that works, the answer to the question you didn&apos;t know to ask. The
              kind of help most agencies have stopped giving.
            </p>
            <p className="text-[var(--color-ink-700)] leading-relaxed mb-6">
              Christian heritage travel and Francophone West Africa are where my expertise runs
              deepest. But the agency is here for any trip that deserves real care. If yours
              qualifies, let&apos;s talk.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-ink-900)]/8">
              <div className="w-10 h-10 rounded-full bg-[var(--color-amber-brand)]/20 flex items-center justify-center text-[var(--color-amber-deep)] font-semibold">A</div>
              <div>
                <div className="text-sm font-semibold text-[var(--color-ink-900)]">Ary</div>
                <div className="text-xs text-[var(--color-ink-500)]">Founder · Fora Travel Advisor · IATA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-ink-900)] text-center mb-10">
          Common questions
        </h2>
        <div className="space-y-3">
          <Faq
            q="Is it cheaper to book ourselves?"
            a="Sometimes the headline price online looks similar. But group rates, hotel block discounts, supplier perks, and DMC bundled pricing usually save 5–15% net — plus you don&apos;t spend the weekends planning, and someone has your back when a flight gets cancelled or a hotel overbooks."
          />
          <Faq
            q="Do you handle individual / leisure trips, or only groups?"
            a="Both. Groups (church, corporate, wedding, family reunion) are our highest volume, but we plan individual leisure, honeymoons, anniversaries, and bespoke luxury too. If you&apos;d trust a friend to plan it for you, that&apos;s the work we do."
          />
          <Faq
            q="What if something goes wrong during the trip?"
            a="You have a 24/7 emergency line through Fora plus your on-the-ground tour operator or DMC contact. Travel insurance — which we always recommend — covers the bigger problems: medical evacuation, trip interruption, cancellation."
          />
          <Faq
            q="How far in advance should we book?"
            a="It varies. Holy Land + Reformation Europe groups: 9–18 months. Safari peak season: 9–12 months. Destination weddings: 9–14 months. Corporate offsites: 6–12 months. Honeymoons: 3–9 months. Leisure: as little as 6 weeks. The sooner you reach out the more options open."
          />
          <Faq
            q="Do you serve clients outside the US?"
            a="Yes. We&apos;re Texas-based but our clients are anywhere — including France, Quebec, and Francophone Africa. Bilingual EN/FR coordination is one of our differentiators."
          />
          <Faq
            q="What about Burkina Faso specifically?"
            a="Burkina Faso is the founder&apos;s country of origin. We have a working network of local hoteliers, drivers, and guides in Ouagadougou and Bobo-Dioulasso — particularly useful for mission trips, diaspora visits home, and family events. State Department advisories apply and are surfaced honestly in every proposal."
          />
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquire" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-ink-900)]">
            Start a trip
          </h2>
          <p className="text-[var(--color-ink-700)] mt-3 max-w-xl mx-auto">
            Tell us what you&apos;re thinking. We&apos;ll reply within one business day with a structured
            intake or a time to talk — whichever moves faster.
          </p>
        </div>
        <InquiryForm />
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[var(--color-ink-900)]/8 mt-12">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-[var(--font-display)] text-xl text-[var(--color-ink-900)]">SIS Voyage</div>
            <p className="text-[var(--color-ink-700)] mt-2 leading-relaxed">
              A division of SIS LLC · Round Rock, Texas · Combat-disabled combat-disabled veteran-owned · IATA-accredited via Fora
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--color-amber-deep)] font-semibold mb-2">Contact</div>
            <a href="mailto:hello@sisvoyage.com" className="text-[var(--color-ink-900)] hover:text-[var(--color-amber-deep)] transition block">
              hello@sisvoyage.com
            </a>
            <a href="tel:+15125768597" className="text-[var(--color-ink-900)] hover:text-[var(--color-amber-deep)] transition block mt-1">
              +1 (512) 576-8597
            </a>
            <a
              href="https://wa.me/15125768597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 text-xs text-[var(--color-sage-deep)] hover:text-[var(--color-sage)] transition"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Message on WhatsApp
            </a>
            <div className="text-[var(--color-ink-500)] mt-2 text-xs">EN / FR · Reply within one business day</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--color-amber-deep)] font-semibold mb-2">Specialties</div>
            <div className="text-[var(--color-ink-700)] text-xs leading-relaxed">
              Christian heritage · Mission travel · Group travel · Destination weddings · Corporate
              retreats · Honeymoons · Safari · Bespoke
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--color-ink-900)]/8 text-xs text-[var(--color-ink-500)] flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Strategic Investments and Services LLC, dba SIS Voyage</div>
          <div>Made with care in Texas</div>
        </div>
      </footer>
    </>
  );
}

function BookingHighlight({ label, detail }: { label: string; detail: string }) {
  return (
    <li className="flex items-start gap-3 py-2 border-b border-[var(--color-ink-900)]/8 last:border-0">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber-brand)] shrink-0 mt-1.5" />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-[var(--color-ink-900)]">{label}</div>
        <div className="text-xs text-[var(--color-ink-700)] mt-0.5">{detail}</div>
      </div>
    </li>
  );
}

function CategoryCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass rounded-2xl p-5 hover:glass-strong transition group">
      <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink-900)] mb-2 group-hover:text-[var(--color-amber-deep)] transition">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-ink-700)] leading-relaxed">{description}</p>
    </div>
  );
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-1.5 rounded-full bg-gradient-to-b from-[var(--color-amber-glow)] to-[var(--color-amber-brand)] shrink-0" />
      <div>
        <div className="font-semibold text-[var(--color-ink-900)] mb-1">{title}</div>
        <p className="text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="glass rounded-2xl group">
      <summary className="cursor-pointer px-5 py-4 flex items-start gap-3 hover:bg-[var(--color-cream-100)] rounded-2xl transition">
        <svg className="w-4 h-4 mt-1 text-[var(--color-amber-brand)] group-open:rotate-90 transition shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-[var(--color-ink-900)] font-medium">{q}</span>
      </summary>
      <p className="px-5 pb-5 pl-12 text-sm text-[var(--color-ink-700)] leading-relaxed">{a}</p>
    </details>
  );
}
