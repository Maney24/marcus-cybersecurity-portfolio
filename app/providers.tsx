import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

const Providers = ({ children }) => {
  return (
    <AnimatePresence>
      {children}
      <Toaster position="top-right" />
    </AnimatePresence>
  );
};

export default Providers;