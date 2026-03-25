import { allPhotos } from '@/data/galleryData';

export function useGallery() {
  return { 
    activeCategory: 'All', 
    setActiveCategory: () => {}, 
    filteredPhotos: allPhotos 
  };
}
