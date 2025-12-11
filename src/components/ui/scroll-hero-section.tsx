'use client';

import { useEffect } from 'react';

type Theme = 'system' | 'light' | 'dark';

export type ShipStickyHeaderProps = {
  /** Words that cycle under "you can …" */
  items?: string[];
  /** Sets CSS var --count automatically from items length */
  showFooter?: boolean;
  /** UI theme (affects color-scheme + switch color) */
  theme?: Theme;
  /** Enable view-timeline animations if supported */
  animate?: boolean;
  /** Accent hue (0–359) */
  hue?: number;
  /** Where the highlight band starts (vh) */
  startVh?: number; // default 50
  /** Space (vh) below the sticky header block */
  spaceVh?: number; // default 50
  /** Debug outline (for dev) */
  debug?: boolean;
  /** Optional custom intro text under the header */
  taglineHTML?: string; // allows <br />
};

function WordHeroPage({
  items = ['prototype.', 'solve.', 'build.', 'develop.', 'innovate.', 'transform.'],
  showFooter = false,
  theme = 'dark',
  animate = true,
  hue = 280,
  startVh = 50,
  spaceVh = 50,
  debug = false,
  taglineHTML = ``,
}: ShipStickyHeaderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.animate = String(animate);
    root.dataset.debug = String(debug);
    root.style.setProperty('--hue', String(hue));
    root.style.setProperty('--start', `${startVh}vh`);
    root.style.setProperty('--space', `${spaceVh}vh`);
  }, [theme, animate, debug, hue, startVh, spaceVh]);

  return (
    <div
      className="w-full bg-[#DDF8E7]"
      style={
        {
          // keep count in sync with CSS sticky offset math
          ['--count' as any]: items.length,
        } as React.CSSProperties
      }
    >
      <header className="content fluid">
        <section className="content">
          <h1 className="sr-only sm:not-sr-only">
            <span aria-hidden="true">we&nbsp;</span>
            <span className="sr-only">we transform fintech.</span>
          </h1>

          {/* Visible cycling words (aria-hidden) */}
          <ul aria-hidden="true">
            {items.map((word, i) => (
              <li key={i} style={{ ['--i' as any]: i } as React.CSSProperties}>
                {word}
              </li>
            ))}
          </ul>
        </section>
      </header>

      <main>
        <section>
          <p
            className="fluid"
            dangerouslySetInnerHTML={{ __html: taglineHTML }}
          />
        </section>
      </main>

      {showFooter && <footer>Panasa &copy; 2025</footer>}

      {/* Styles ported and adapted to Panasa brand colors */}
      <style jsx global>{`
        @layer base, stick, demo, debug;

        :root {
          --start: 50vh;
          --space: 50vh;
          --hue: 280;
          --accent: #ffae9b;
          --brand-green: #0C2F1E;
          --off-white: #f5f5f5;
          --switch: #0C2F1E;
          --font-size-min: 14;
          --font-size-max: 20;
          --font-ratio-min: 1.1;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
        }

        [data-theme='dark'] {
          --switch: #0C2F1E;
          color-scheme: dark only;
        }

        [data-theme='light'] {
          --switch: #f5f5f5;
          color-scheme: light only;
        }

        .scroll-hero-wrapper {
          scrollbar-color: var(--accent) transparent;
        }

        .scroll-hero-wrapper *,
        .scroll-hero-wrapper *::before,
        .scroll-hero-wrapper *::after {
          box-sizing: border-box;
        }

        /* Utilities */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .fluid {
          --fluid-min: calc(
            var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0))
          );
          --fluid-max: calc(
            var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0))
          );
          --fluid-preferred: calc(
            (var(--fluid-max) - var(--fluid-min)) /
              (var(--font-width-max) - var(--font-width-min))
          );
          --fluid-type: clamp(
            (var(--fluid-min) / 16) * 1rem,
            ((var(--fluid-min) / 16) * 1rem) -
              (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
              (var(--fluid-preferred) * var(--variable-unit, 100vi)),
            (var(--fluid-max) / 16) * 1rem
          );
          font-size: var(--fluid-type);
        }

        /* Sticky header logic */
        .scroll-hero-wrapper header {
          --font-level: 4;
          --font-size-min: 24;
          position: sticky;
          top: calc((var(--count) - 1) * -1lh);
          line-height: 1.2;
          display: flex;
          align-items: start;
          width: 100%;
          margin-bottom: 2rem;
        }

        .scroll-hero-wrapper header section:first-of-type {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: center;
          padding-top: 2rem;
        }

        .scroll-hero-wrapper header section:first-of-type h1 {
          position: sticky;
          top: calc(var(--start) - 0.5lh);
          margin: 0;
          font-weight: 600;
          color: #0C2F1E;
        }

        .scroll-hero-wrapper ul {
          font-weight: 600;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .scroll-hero-wrapper li {
          --dimmed: rgba(12, 47, 30, 0.35);
          background: linear-gradient(
            180deg,
            var(--dimmed) 0 calc(var(--start) - 0.5lh),
            #0C2F1E calc(var(--start) - 0.55lh)
              calc(var(--start) + 0.55lh),
            var(--dimmed) calc(var(--start) + 0.5lh)
          );
          background-attachment: fixed;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .scroll-hero-wrapper main {
          width: 100%;
          height: 100vh;
          position: relative;
          z-index: 2;
          color: var(--brand-green);
        }

        .scroll-hero-wrapper main::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: var(--off-white);
          border-radius: 1rem 1rem 0 0;
        }

        .scroll-hero-wrapper main section {
          --font-level: 4;
          --font-size-min: 20;
          height: 100%;
          width: 100%;
          display: flex;
          place-items: center;
          padding: 2rem;
        }

        .scroll-hero-wrapper main section p {
          margin: 0;
          font-weight: 600;
          white-space: nowrap;
          color: var(--brand-green);
          font-family: 'Poppins', sans-serif;
        }

        .scroll-hero-wrapper main section a:not(.bear-link) {
          color: var(--accent);
          text-decoration: none;
          text-underline-offset: 0.1lh;
        }

        .scroll-hero-wrapper main section a:not(.bear-link):is(:hover, :focus-visible) {
          text-decoration: underline;
        }

        .scroll-hero-wrapper footer {
          padding-block: 2rem;
          font-size: 0.875rem;
          font-weight: 300;
          color: rgba(12, 47, 30, 0.7);
          text-align: center;
          width: 100%;
          background: #DDF8E7;
        }

        /* View-timeline progressive enhancement */
        @supports (animation-timeline: view()) {
          [data-animate='true'] .scroll-hero-wrapper main {
            view-timeline: --section;
          }

          [data-animate='true'] .scroll-hero-wrapper main::before {
            transform-origin: 50% 100%;
            scale: 0.9;
            animation: grow both ease-in-out;
            animation-timeline: --section;
            animation-range: entry 50%;
          }

          [data-animate='true'] .scroll-hero-wrapper main section p {
            position: fixed;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            animation: reveal both ease-in-out;
            animation-timeline: --section;
            animation-range: entry 50%;
          }

          @keyframes reveal {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes grow {
            to {
              scale: 1;
              border-radius: 0;
            }
          }
        }

        /* Debug */
        [data-debug='true'] .scroll-hero-wrapper li {
          outline: 0.05em dashed currentColor;
        }

        [data-debug='true'] .scroll-hero-wrapper :is(h2, li:last-of-type) {
          outline: 0.05em dashed var(--off-white);
        }

        @media (max-width: 640px) {
          .scroll-hero-wrapper main section p {
            white-space: normal;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export { WordHeroPage };
