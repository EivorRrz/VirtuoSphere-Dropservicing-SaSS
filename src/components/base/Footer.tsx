import { MountainIcon } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer className="py-12">
      <div className="container mx-auto flex items-center justify-center px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <MountainIcon className="h-6 w-6 text-gray-800 dark:text-gray-50" />
          <motion.span 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="text-2xl font-bold text-gray-800 dark:text-gray-50"
          >
            VirtuoSphere
          </motion.span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
