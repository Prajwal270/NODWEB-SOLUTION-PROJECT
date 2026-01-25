import React from 'react'

function PerfVisual() {
  return (
    <svg className="perf-ring w-full h-auto" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        {/* Lighter / softer palette */}
        <linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stopColor="#FFFBDF"/><stop offset="100%" stopColor="#F9E08A"/></linearGradient>
        <linearGradient id="g2" x1="0" x2="1"><stop offset="0%" stopColor="#FBF8FF"/><stop offset="100%" stopColor="#DCC7FF"/></linearGradient>
        <linearGradient id="g3" x1="0" x2="1"><stop offset="0%" stopColor="#FFF6F9"/><stop offset="100%" stopColor="#FF9FB3"/></linearGradient>
        <linearGradient id="g4" x1="0" x2="1"><stop offset="0%" stopColor="#F6FBFF"/><stop offset="100%" stopColor="#A7D4FF"/></linearGradient>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          {/* reduced blur for a dimmer glow */}
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        {/* soft blurred backplate for node backgrounds (stronger blur) */}
        <filter id="nodeBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" result="b"/>
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.18" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* airy base ring for subtle depth */}
      <circle cx="180" cy="180" r="120" stroke="#FFFFFF" strokeOpacity="0.03" strokeWidth="30" />

      {/* four equal arcs: same radius & thickness, small gaps (strokeDasharray) */}
      <circle cx="180" cy="180" r="120" stroke="url(#g1)" strokeWidth="22" strokeLinecap="round" strokeDasharray="150 610" transform="rotate(-40 180 180)" filter="url(#glow)" strokeOpacity="0.96" />
      <circle cx="180" cy="180" r="120" stroke="url(#g2)" strokeWidth="22" strokeLinecap="round" strokeDasharray="150 610" transform="rotate(40 180 180)" filter="url(#glow)" strokeOpacity="0.96" />
      <circle cx="180" cy="180" r="120" stroke="url(#g3)" strokeWidth="22" strokeLinecap="round" strokeDasharray="150 610" transform="rotate(140 180 180)" filter="url(#glow)" strokeOpacity="0.96" />
      <circle cx="180" cy="180" r="120" stroke="url(#g4)" strokeWidth="22" strokeLinecap="round" strokeDasharray="150 610" transform="rotate(220 180 180)" filter="url(#glow)" strokeOpacity="0.96" />

      {/* nodes: slightly larger than arc thickness (r=15) with semantic minimal icons */}
      <g>
        {/* Arc A = Monitor (top-right) with frosted transparent backplate */}
        <g transform="translate(272 103)">
          <foreignObject x="-18" y="-18" width="36" height="36">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{width:'36px',height:'36px',borderRadius:'50%',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',background:'rgba(255,255,255,0.06)'}} />
          </foreignObject>
          {/* crisp stroked ring */}
          <circle r="15" fill="none" stroke="#0B0F19" strokeWidth="1.5" />
          <rect x="-7" y="-6" width="14" height="9" rx="1.6" fill="none" stroke="#071023" strokeWidth="1.5" />
          <path d="M -3 4 L 0 2 L 3 4" stroke="#071023" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>

        {/* Arc B = Spark / Bolt (bottom-right) */}
        <g transform="translate(272 257)">
          <foreignObject x="-18" y="-18" width="36" height="36">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{width:'36px',height:'36px',borderRadius:'50%',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',background:'rgba(255,255,255,0.06)'}} />
          </foreignObject>
          <circle r="15" fill="none" stroke="#0B0F19" strokeWidth="1.5" />
          <path d="M -3 -2 L 0 -6 L -1 -1 L 3 -3 L 0 3 L 1 -1" stroke="#071023" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Arc C = Document (bottom-left) */}
        <g transform="translate(88 257)">
          <foreignObject x="-18" y="-18" width="36" height="36">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{width:'36px',height:'36px',borderRadius:'50%',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',background:'rgba(255,255,255,0.06)'}} />
          </foreignObject>
          <circle r="15" fill="none" stroke="#0B0F19" strokeWidth="1.5" />
          <rect x="-5.5" y="-6" width="11" height="12" rx="1.2" fill="none" stroke="#071023" strokeWidth="1.4" />
          <path d="M 0 -6 L 4 -2" stroke="#071023" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </g>

        {/* Arc D = Trend / arrow (top-left) */}
        <g transform="translate(88 103)">
          <foreignObject x="-18" y="-18" width="36" height="36">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{width:'36px',height:'36px',borderRadius:'50%',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',background:'rgba(255,255,255,0.06)'}} />
          </foreignObject>
          <circle r="15" fill="none" stroke="#0B0F19" strokeWidth="1.5" />
          <polyline points="-5 4 -1 0 2 3 6 -1" stroke="#071023" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 6 -1 L 6 3" stroke="#071023" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </g>

      {/* center label: use foreignObject so text wraps and stays centered within the ring */}
      <foreignObject x="110" y="150" width="160" height="80">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <div style={{color:'#F9FAFB', fontSize:'18px', fontWeight:700, lineHeight:1.05}}>
            <span style={{display:'block'}}>Why Clients</span>
            <span style={{display:'block', marginTop:6}}>Trust Us</span>
          </div>
        </div>
      </foreignObject>

    </svg>
  )
}

export default React.memo(PerfVisual)
