// Import all local gallery assets
const img1 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532749/v2pp_gallery/1.jpg";
const img2 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532766/v2pp_gallery/2.jpg";
const img3 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532771/v2pp_gallery/3.jpg";
const img4 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532773/v2pp_gallery/4.jpg";
const img5 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532775/v2pp_gallery/5.jpg";
const img6 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532777/v2pp_gallery/6.jpg";
const img7 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532778/v2pp_gallery/7.jpg";
const img8 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532779/v2pp_gallery/8.jpg";
const img9 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532781/v2pp_gallery/9.jpg";
const img10 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532752/v2pp_gallery/10.jpg";
const img11 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532754/v2pp_gallery/11.jpg";
const img12 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532756/v2pp_gallery/12.jpg";
const wa1 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532757/v2pp_gallery/13.jpg";
const wa2 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532758/v2pp_gallery/14.jpg";
const wa3 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532759/v2pp_gallery/15.jpg";
const wa4 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532760/v2pp_gallery/16.jpg";
const wa5 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532761/v2pp_gallery/17.jpg";
const wa6 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532763/v2pp_gallery/18.jpg";
const wa7 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532764/v2pp_gallery/19.jpg";
const wa8 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532767/v2pp_gallery/20.jpg";
const wa9 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532769/v2pp_gallery/23.jpg";
const wa10 = "https://res.cloudinary.com/dra8c0dyn/image/upload/v1774532768/v2pp_gallery/22.jpg";

export const galleryData = {
  all: [
    { id: 'wa10', title: 'A Union in Bloom', url: wa10, category: 'Wedding', featured: true },
    { id: '1', title: 'Editorial Selection', url: img1, category: 'Wedding', featured: true },
    { id: '2', title: 'Candid Moment', url: img2, category: 'Wedding', featured: true },
    { id: '3', title: 'The Celebration', url: img3, category: 'Wedding', featured: true },
    { id: '4', title: 'Ceremonial Bloom', url: img4, category: 'Wedding', featured: true },
    { id: '5', title: 'Golden Hour Story', url: img5, category: 'Wedding', featured: true },
    { id: '6', title: 'Traditional Essence', url: img6, category: 'Wedding', featured: true },
    { id: '7', title: 'Vibrant Rituals', url: img7, category: 'Wedding', featured: true },
    { id: '8', title: 'Elegant Portrait', url: img8, category: 'Wedding', featured: true },
    { id: '9', title: 'The Vow', url: img9, category: 'Wedding', featured: true },
    { id: '10', title: 'Timeless Frame', url: img10, category: 'Wedding', featured: true },
    { id: '11', title: 'Joyful Union', url: img11, category: 'Wedding', featured: true },
    { id: '12', title: 'Graceful Pose', url: img12, category: 'Wedding', featured: true },
    { id: 'wa1', title: 'Wedding Day Highlight', url: wa1, category: 'Wedding', featured: true },
    { id: 'wa2', title: 'Selected Moment', url: wa2, category: 'Wedding', featured: true },
    { id: 'wa3', title: 'Grand Entry', url: wa3, category: 'Wedding', featured: true },
    { id: 'wa4', title: 'The Stage', url: wa4, category: 'Wedding', featured: true },
    { id: 'wa5', title: 'Candid Smile', url: wa5, category: 'Wedding', featured: true },
    { id: 'wa6', title: 'Ritual Detail', url: wa6, category: 'Wedding', featured: true },
    { id: 'wa7', title: 'Couple Portrait', url: wa7, category: 'Wedding', featured: true },
    { id: 'wa8', title: 'Family Joy', url: wa8, category: 'Wedding', featured: true },
    { id: 'wa9', title: 'Sangeet Performance', url: wa9, category: 'Wedding', featured: true },
  ]
};

// Flat list for the simplified gallery
export const allPhotos = galleryData.all;

// All are now featured/selected works as requested
export const featuredPhotos = allPhotos;

