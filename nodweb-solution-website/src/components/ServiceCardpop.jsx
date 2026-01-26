import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

function ServiceCard({ icon: Icon, title, description, benefits = [], details = '', cta = "Contact Us", modal }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // lock body scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <div className="group h-full flex flex-col bg-[#111827] rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">

      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition">
        <Icon className="text-[#2563EB]" size={20} />
      </div>

      <h3 className="text-lg font-semibold text-[#F9FAFB] mb-2">{title}</h3>
      <p className="text-sm text-[#D1D5DB] leading-relaxed">{description}</p>

      {benefits && benefits.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[#D1D5DB]">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#38BDF8] flex-shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 pt-4 flex gap-3">
        <Link to="/contact" className="inline-block bg-[#2563EB] text-white px-4 py-2 rounded-md text-sm font-medium">{cta}</Link>
        <button onClick={() => setOpen(true)} className="border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-md text-sm font-medium">Learn More</button>
      </div>

      {open && createPortal(
        <AnimatePresence>
          <motion.div key="svc-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

            <motion.div onClick={(e) => e.stopPropagation()} initial={{ y: 12, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 12, scale: 0.98 }} transition={{ duration: 0.18 }} className="relative max-w-3xl w-full bg-[#0B0F19] border border-[#111827] rounded-2xl p-6 mx-4">
              <div className="flex items-start justify-between mb-4">
                <h3 id={`modal-${title}`} className="text-lg font-semibold text-white">{(modal && modal.title) || title}</h3>
                <button onClick={() => setOpen(false)} aria-label="Close" className="text-white ml-3 bg-transparent" style={{color: '#fff'}}>Close</button>
              </div>

              <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-4">
                {/* short value statement */}
                <p className="text-sm text-[#D1D5DB]">{(modal && modal.shortStatement) || details || description}</p>

                {/* What We Deliver */}
                {(modal && modal.deliverables) && (
                  <div>
                    <h4 className="font-semibold text-white">What We Deliver</h4>
                    <ul className="mt-2 space-y-2 text-sm text-[#D1D5DB]">
                      {modal.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#38BDF8] flex-shrink-0" />
                          <span className="leading-snug">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Best Suited & Tech Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(modal && modal.bestSuitedFor) && (
                    <div>
                      <h5 className="font-semibold text-white">Best Suited For</h5>
                      <p className="mt-2 text-sm text-[#D1D5DB]">{modal.bestSuitedFor}</p>
                    </div>
                  )}

                  {(modal && modal.stack) && (
                    <div>
                      <h5 className="font-semibold text-white">Technology Stack</h5>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {(() => {
                          const ICON_MAP = { React: '⚛️', 'Next.js': '➡️', 'Node.js': '🟢', Flutter: '💙', Firebase: '🔥', AWS: '☁️', 'REST APIs': '🔗' };
                          return modal.stack.map((s, i) => {
                            const icon = ICON_MAP[s] || s.split(' ')[0].slice(0,2).toUpperCase();
                            return (
                              <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#071025] border border-[#1F2933] rounded-full text-xs text-[#D1D5DB]">
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0B1220] text-xs font-semibold text-[#9CA3AF]">{icon}</span>
                                <span className="font-medium">{s}</span>
                              </span>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  )}
                </div>

                {/* Approach */}
                {(modal && modal.approach) && (
                  <div>
                    <h5 className="font-semibold text-white">Our Development Approach</h5>
                    <p className="mt-2 text-sm text-[#D1D5DB]">{modal.approach}</p>
                  </div>
                )}

                {/* Outcomes */}
                {(modal && modal.outcomes) && (
                  <div>
                    <h5 className="font-semibold text-white">Business Outcomes</h5>
                    <ul className="mt-2 space-y-2 text-sm text-[#D1D5DB]">
                      {modal.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#38BDF8] flex-shrink-0" />
                          <span className="leading-snug">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* QA */}
                {(modal && modal.qa) && (
                  <div>
                    <h5 className="font-semibold text-white">Trust & Quality Assurance</h5>
                    <p className="mt-2 text-sm text-[#D1D5DB]">{modal.qa}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-[#1F2933] pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{(modal && modal.cta && modal.cta.heading) || 'Ready to start?'}</p>
                  <p className="text-sm text-[#9CA3AF]">{(modal && modal.cta && modal.cta.sub) || 'Let’s discuss your goals and create a solution that fits.'}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/contact" onClick={() => setOpen(false)} className="inline-block bg-[#2563EB] text-white px-4 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                  <button onClick={() => setOpen(false)} className="border border-[#374151] text-white px-4 py-2 rounded-md text-sm font-medium bg-transparent" style={{color: '#fff'}}>Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}

export default React.memo(ServiceCard);
