import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Expertise = dynamic(() => import('@/components/Expertise'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

export default function Page() {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
