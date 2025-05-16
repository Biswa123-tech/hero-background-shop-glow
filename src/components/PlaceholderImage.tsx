
import React, { useRef, useState } from "react";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

interface PlaceholderImageProps {
  onImageUploaded: (imageUrl: string) => void;
  className?: string;
  alt?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  onImageUploaded,
  className = "",
  alt = "Upload image"
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      onImageUploaded(imageUrl);
      
      // In a real app, you would upload the file to a server here
      // and get back a permanent URL. This is just for demo purposes.
    }
  };

  return (
    <motion.div
      className={`flex items-center justify-center bg-gray-200 rounded-lg shadow-sm ${className}`}
      style={{ aspectRatio: "4/3" }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center p-4 text-gray-500">
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Camera size={32} />
        </motion.div>
        <p className="mt-2 text-xs text-center">Click to upload image</p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="environment"
        className="hidden"
      />
    </motion.div>
  );
};

export default PlaceholderImage;
