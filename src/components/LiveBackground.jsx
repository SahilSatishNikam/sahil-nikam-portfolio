import { memo } from 'react';

function LiveBackground() {
  return (
    <div className="live-ambient-background" aria-hidden="true">
      {/* Dynamic ambient color orbs */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />

      {/* Cyber subtle grid */}
      <div className="ambient-grid-overlay" />

      {/* Restrained decorative developer floating glyphs */}
      <div className="floating-symbols-container">
        <span className="floating-symbol sym-1">&#123; &#125;</span>
        <span className="floating-symbol sym-2">&lt;/&gt;</span>
        <span className="floating-symbol sym-3">λ</span>
        <span className="floating-symbol sym-4">[ ]</span>
        <span className="floating-symbol sym-5">✦</span>
        <span className="floating-symbol sym-6">@Bean</span>
      </div>
    </div>
  );
}

export default memo(LiveBackground);
