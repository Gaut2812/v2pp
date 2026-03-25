import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Testimonials from '@/components/sections/Testimonials';
import ProjectVideo from '@/components/sections/ProjectVideo';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <GalleryPreview />
        <Testimonials />
        <ProjectVideo />
      </main>
      <Footer />
    </>
  );
}
