import { ArrowRight, Mouse, Rocket, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Canvas particle network ── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W,
      H,
      nodes = [],
      raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Node {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = 1 + Math.random() * 1.5;
        this.a = 0.2 + Math.random() * 0.35;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${this.a})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 70; i++) nodes.push(new Node());

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${(1 - d / 130) * 0.07})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}

/* ── Float card ── */
function FloatCard({ icon, label, value, className = "" }) {
  return (
    <div
      className={`hidden lg:flex items-center gap-3 absolute backdrop-blur-md bg-[#040f1f]/70 border border-blue-500/20 rounded-2xl px-4 py-3 pointer-events-none z-10 animate-bounce [animation-duration:5s] ${className}`}
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-blue-500/20">
        {icon}
      </div>
      <div>
        <p className="text-sm text-blue-300/60 leading-none mb-1">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setCountersStarted(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020b18] text-white overflow-hidden">
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="fixed -top-48 -left-32 w-150 h-150 rounded-full bg-blue-700 opacity-[0.15] blur-[130px] pointer-events-none z-0 animate-blob1" />
      <div className="fixed top-[10%] -right-24 w-120 h-120 rounded-full bg-cyan-700 opacity-[0.13] blur-[120px] pointer-events-none z-0 animate-blob2" />
      <div className="fixed -bottom-24 left-[30%] w-100 h-100 rounded-full bg-blue-800 opacity-[0.12] blur-[110px] pointer-events-none z-0 animate-blob3" />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-24 md:pt-28 md:pb-32">
        {/* Floating cards */}
        <FloatCard
          icon={<Rocket />}
          label="Projects Delivered"
          value="15+ Clients"
          className="left-[6%] top-[32%] animate-float"
        />
        <FloatCard
          icon={<Zap />}
          label="Response Time"
          value="Under 24 Hours"
          className="right-[6%] top-[40%] animate-float-delay"
        />

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-dashed border-blue-500/40 bg-blue-900/10 backdrop-blur-sm text-xs font-medium tracking-widest text-blue-200/80 mb-10 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e] animate-pulse" />
          Transforming Ideas Into Reality
        </div>

        {/* Heading */}
        <h1
          className={`font-display font-bold leading-[1.06] tracking-[-0.03em] text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-225 mb-7 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building{" "}
          <span className="relative inline-block">
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Digital
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 160 10"
              preserveAspectRatio="none"
              height="8"
            >
              <path
                d="M2,6 Q40,2 80,6 Q120,10 158,5"
                stroke="#3b82f6"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="300"
                className="animate-draw-line"
              />
            </svg>
          </span>{" "}
          Solutions
          <br className="hidden sm:block" /> for the Future
        </h1>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base font-light tracking-widest text-blue-300/60 mb-14 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-blue-200/70">Web Development</span>{" "}
          &nbsp;•&nbsp;{" "}
          <span className="text-blue-200/70">Digital Marketing</span>{" "}
          &nbsp;•&nbsp; <span className="text-blue-200/70">IT Solutions</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 items-center justify-center transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            to="/contact"
            className="group w-full sm:w-auto px-8 py-3 rounded-xl border border-white/15 bg-white/3 backdrop-blur-sm text-white text-sm font-medium hover:border-blue-500/50 hover:bg-blue-500/6 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="group w-full border border-blue-600/15 sm:w-auto relative px-8 py-3 rounded-xl  bg-blue-600 text-white text-sm font-medium overflow-hidden hover:shadow-[0_8px_32px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-fade-in-slow">
          <div className="w-px h-10 bg-linear-to-b from-blue-500 to-transparent animate-scroll-pulse" />
          <span className="text-[10px] tracking-[0.15em] uppercase animate-bounce [animation-duration:2s]">
            <Mouse size={32} />
          </span>
        </div>
      </section>
    </div>
  );
}
