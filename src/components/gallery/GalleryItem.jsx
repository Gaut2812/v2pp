import styles from './GalleryItem.module.css';

export default function GalleryItem({ photo, onOpen }) {
  return (
    <button className={styles.item} onClick={() => onOpen(photo)} aria-label={`View ${photo.title}`}>
      <img
        src={photo.url}
        alt={photo.title}
        loading="lazy"
        className={styles.img}
      />
    </button>
  );
}
