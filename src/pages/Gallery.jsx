import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { useGallery } from '@/hooks/useGallery';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './Gallery.module.css';

export default function Gallery() {
  const { filteredPhotos } = useGallery();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page Header */}
        <ScrollReveal yOffset={30}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Our Portfolio</span>
            <h1 className={styles.title}><em>The Gallery</em></h1>
            <span className="gold-line gold-line--center" />
            <p className={styles.sub}>
              Every image is a frozen moment of love — browse our work across Tamil wedding, Pre-Wedding & Portrait sessions. All are selected works.
            </p>
          </div>
        </ScrollReveal>
        {/* Grid and Count */}
        <div className="container">
          {/* Count */}
          <ScrollReveal delay={0.2} yOffset={20}>
            <p className={styles.count}>
              Showing {filteredPhotos.length} photos
            </p>
          </ScrollReveal>

          {/* Grid */}
          <GalleryGrid photos={filteredPhotos} />
        </div>
      </main>
      <Footer />
    </>
  );
}
