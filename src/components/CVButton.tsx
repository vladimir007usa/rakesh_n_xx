import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, Download, X } from 'lucide-react';

// 👇 Replace with your actual CV file path once uploaded to /public
const CV_URL = '/cv.pdf';

const CVButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Expanded options */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-2 items-end"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {/* View */}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-sm font-medium backdrop-blur-md hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 shadow-lg group"
            >
              <Eye className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
              View CV
            </a>

            {/* Download */}
            <a
              href={CV_URL}
              download="Rakesh_Naskar_CV.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-sm font-medium backdrop-blur-md hover:border-purple-400/60 hover:bg-purple-400/10 hover:text-purple-300 transition-all duration-300 shadow-lg group"
            >
              <Download className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:border-cyan-400/50 transition-all duration-300 group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="CV Options"
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-300" />

        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors" />
            </motion.span>
          ) : (
            <motion.span
              key="file"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FileText className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
};

export default CVButton;
