import { Button } from "../../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Social from "../../components/Social";
import Photo from "../../components/Photo";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8 lg:pb-20">
          {/* text */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-[0.25em] text-accent uppercase">
              Backend Software Engineer
            </span>

            <h1 className="h2 mt-6 mb-6">
              Sazedul Islam
            </h1>
            <p className="max-w-[620px] text-lg leading-relaxed mb-8 text-white/80 mx-auto lg:mx-0">
              I build secure, scalable backend systems and clean full-stack integrations using
              <span className="font-semibold text-white"> Node.js, NestJS, TypeScript</span>,
              and modern cloud-native tooling. My focus is on APIs, real-time features, database design,
              and production-ready engineering.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-9">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                REST APIs
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                Microservices
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                PostgreSQL
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                AWS & Docker
              </span>
            </div>

            {/* button */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button asChild size="lg" className="uppercase flex items-center gap-2">
                <Link href="/contact">
                  <span>Hire Me</span>
                </Link>
              </Button>

              <a href="/Sazedul Islam Backend Engineer.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                ></Social>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="mb-8 lg:mb-0">
            <Photo></Photo>
          </div>
        </div>

        {/* stats */}
        <div>
          <Stats></Stats>
        </div>

        {/* services */}
        {/* <Services></Services> */}
      </div>
    </section>
  );
};

export default Home;
