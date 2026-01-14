interface EventImageProps {
  image: string;
  title: string;
}

export const EventImage = ({ image, title }: EventImageProps) => (
  <div className="w-full h-48 overflow-hidden border-b-2 border-black rounded-t-base">
    <img src={image} alt={title} className="w-full h-full object-cover" />
  </div>
);
