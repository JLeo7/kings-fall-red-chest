export interface IconData {
  url: string;
  location: string;
  locationImageUrl: string;
  locationDescription: string;
  order: number;
}

interface IconButtonProps {
  iconUrl: string;
  isSelected?: boolean;
  handleSetIcon?: () => void;
}

export default function IconButton({
  handleSetIcon,
  iconUrl,
  isSelected,
}: IconButtonProps) {
  return (
    <div
      className={`icon-container flex justify-center ${
        isSelected ? "selected-icon-container" : ""
      }`}
    >
      <img src={iconUrl} className="w-32 h-32" onClick={handleSetIcon} />
    </div>
  );
}
