import { icons } from "lucide-react";
import React, { useState } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

// about data
const about = {
  title: "About Me",
  description: `
I’m a Backend Software Engineer with over 2 years of professional experience building scalable, secure, and high-performance web applications using Node.js, TypeScript, and NestJS. I specialize in designing clean, maintainable backend architectures, developing robust RESTful APIs, and working with microservices-based systems that scale in real-world production environments.

My technical expertise includes working with PostgreSQL, MongoDB, and Redis, implementing JWT and OAuth-based authentication, and building real-time features using WebSockets and Socket.IO. I’ve also worked extensively with background job processing, subscription-based systems, and third-party integrations such as Stripe and OpenAI APIs.

I have hands-on experience deploying and operating backend systems using AWS (S3, EC2/VPS), Docker, Linux, and basic CI/CD workflows, with a strong focus on performance, security, and developer-friendly API design. While backend development is my core strength, I’m comfortable collaborating across the stack and have working experience with React and Next.js to support smooth frontend-backend integration.

I enjoy solving complex problems, writing clean and well-documented code, and working in Agile, collaborative environments. I’m always eager to learn, improve system reliability, and contribute to products that deliver real value to users and teams.
  `,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sazedul Islam",
    },
    {
      fieldName: "Phone",
      fieldValue: "+880 1786 549 126",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Location",
      fieldValue: "Dhaka, Bangladesh",
    },
    {
      fieldName: "Email",
      fieldValue: "sazedulislam9126@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have professional experience across both technical and client-facing roles. My background includes building scalable backend systems, collaborating with cross-functional teams, and managing key client accounts. This combination has strengthened my communication skills, business understanding, and ability to deliver technical solutions aligned with real-world requirements.",
  items: [
    {
      company: "Softvence Delta - Betopia Group",
      position: "Backend Developer",
      duration: "03/2025 - Present",
    },
    {
      company: "Softvence Delta - Betopia Group",
      position: "Key Account Manager",
      duration: "09/2024 - 03/2025",
    },
    {
      company: "HelpestBD Ltd",
      position: "Full Stack Developer",
      duration: "07/2023 - 09/2024",
    },
    {
      company: "Ideal Institute of Science & Technology (IIST)",
      position: "Junior Instructor – Web Development",
      duration: "03/2023 - 02/2024",
    },
    {
      company: "Engineers Computing & Computers (ECC) Ltd",
      position: "Web Developer Intern",
      duration: "09/2022 - 03/2023",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "I have built a strong academic and practical foundation in computer science and software development through formal education and professional training.",
  items: [
    {
      institution: "Southeast University",
      degree: "BSc in Computer Science & Engineering",
      duration: "03/2023 - Present",
    },
    {
      institution: "Dhaka Polytechnic Institute",
      degree: "Diploma in Engineering – Computer Technology",
      duration: "01/2017 - 02/2023",
    },
    {
      institution: "Programming Hero",
      degree: "Web Development (Next Level & Level 1)",
      duration: "Completed",
    },
    {
      institution: "NTVQF",
      degree: "Web Development Level – 4",
      duration: "Completed",
    },
  ],
};

// skills data
export const skills = {
  title: "My Skills",
  description:
    "I work primarily as a backend-focused engineer with strong full-stack collaboration experience.",
  skillsList: [
    {
      icon: <FaJs />,
      name: "JavaScript (ES6+)",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiAmazonaws />,
      name: "AWS",
    },
    {
      icon: <SiGithub />,
      name: "Git & GitHub",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
  ],
};

const Resume = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAboutFullDescription, setShowAboutFullDescription] = useState(false);
  // read more button toggle
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleAboutDescription = () => {
    setShowAboutFullDescription(!showAboutFullDescription);
  };

  const aboutParagraphs = about.description
    .trim()
    .split(/\n\s*\n/g)
    .map((p) => p.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh w-full]">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 ">
                    {!showFullDescription
                      ? experience.description.slice(0, 300) + "..."
                      : experience.description}
                    <button
                      onClick={toggleDescription}
                      className="text-accent hover:underline focus:outline-none"
                    >
                      {showFullDescription ? "Read less" : "Read more"}
                    </button>
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 leading-snug">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 ">
                    {!showFullDescription
                      ? education.description.slice(0, 300) + "..."
                      : education.description}
                    <button
                      onClick={toggleDescription}
                      className="text-accent hover:underline focus:outline-none"
                    >
                      {showFullDescription ? "Read less" : "Read more"}
                    </button>
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 leading-snug">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col  gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 ">
                    {!showFullDescription
                      ? skills.description.slice(0, 300) + "..."
                      : skills.description}
                    <button
                      onClick={toggleDescription}
                      className="text-accent hover:underline focus:outline-none"
                    >
                      {showFullDescription ? "Read less" : "Read more"}
                    </button>
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[38px] gap-4">
                      {skills.skillsList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>

                  <div className="max-w-[600px] text-white/60 mx-auto lg:mx-0 space-y-4">
                    {(showAboutFullDescription ? aboutParagraphs : aboutParagraphs.slice(0, 1)).map(
                      (paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      )
                    )}

                    {aboutParagraphs.length > 1 && (
                      <button
                        type="button"
                        onClick={toggleAboutDescription}
                        className="text-accent hover:underline focus:outline-none"
                      >
                        {showAboutFullDescription ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 w-full max-w-[720px] mx-auto lg:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 min-w-0"
                        >
                          <span className="text-white/60 shrink-0">
                            {item.fieldName}:
                          </span>
                          <span className="text-xl min-w-0 break-words">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
