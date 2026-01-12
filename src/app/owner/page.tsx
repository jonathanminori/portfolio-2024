import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Owner',
};

export default function OwnerPage() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/owner/style.css" />

      {/* Preloader */}
      <div id="preloader">
        <div className="preloader-content">
          <svg className="preloader-circle" width="20" height="20" viewBox="0 0 20 20">
            <circle className="preloader-circle-bg" cx="10" cy="10" r="8" />
            <circle className="preloader-circle-progress" cx="10" cy="10" r="8" />
          </svg>
        </div>
      </div>

      {/* Grid Canvas Background */}
      <canvas id="grid-canvas"></canvas>

      {/* Corner Labels */}
      <div className="corner-label corner-top-left">Fun</div>
      <div className="corner-label corner-top-right">Serious</div>
      <div className="corner-label corner-bottom-left">Useless</div>
      <div className="corner-label corner-bottom-right">Valuable</div>

      {/* Centered Name */}
      <h1 className="center-name">Jonathan Minori</h1>

      {/* Image Container */}
      <div id="image-container"></div>

      {/* GUI Toggle Button */}
      <button id="gui-toggle" aria-label="Toggle Settings">π</button>

      {/* Load external scripts */}
      <Script
        src="https://cdn.jsdelivr.net/npm/motion@12.25.0/dist/motion.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/lil-gui@0.21"
        strategy="beforeInteractive"
      />
      <Script
        src="/owner/script.js"
        strategy="lazyOnload"
      />
    </>
  );
}
