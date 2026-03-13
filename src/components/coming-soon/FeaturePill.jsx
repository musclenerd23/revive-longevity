import { motion } from "framer-motion";

export default function FeaturePill({ icon: Icon, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-secondary/40 border border-border/40 backdrop-blur-sm"
    >
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-sm font-body text-foreground/80 font-medium">
        {label}
      </span>
    </motion.div>
  );
}