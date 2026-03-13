import { motion } from "framer-motion";
import { Dna } from "lucide-react";
import ParticleField from "@/components/coming-soon/ParticleField";
import DnaBackground from "@/components/coming-soon/DnaBackground";
import CountdownTimer from "@/components/coming-soon/CountdownTimer";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center font-body">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      {/* DNA Helix Background */}
      <DnaBackground />

      {/* Particle animation layer */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Logo / Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
            <Dna className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-medium tracking-[0.25em] uppercase text-primary/80 mb-6"
        >
          Coming Soon
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground leading-tight mb-6"
        >
          Revive
          <br />
          <span className="text-primary italic">Longevity</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-lg leading-relaxed mb-8"
        >
          The future of human optimization is almost here. 
          Where cutting-edge science meets timeless vitality.
        </motion.p>

        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer />
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-16"
        >
          <p className="text-base md:text-lg text-foreground/70 font-body font-light leading-relaxed">
            Personalized longevity.
            <br />
            Concierge care built entirely around you.
          </p>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20"
        >
          <div className="w-12 h-px bg-primary/30 mx-auto mb-4" />
          <p className="text-xs text-muted-foreground/60 font-light tracking-wider">
            © {new Date().getFullYear()} Revive Longevity. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}