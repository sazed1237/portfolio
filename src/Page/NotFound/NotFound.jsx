import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.25, ease: "easeOut" },
      }}
      className="min-h-[70vh] flex items-center py-16"
    >
      <div className="container mx-auto text-center">
        <p className="text-white/60 mb-3">404</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Page <span className="text-accent">Not Found</span>
        </h1>
        <p className="text-white/60 max-w-[600px] mx-auto mb-8">
          The page you’re looking for doesn’t exist, or the link is broken.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;
