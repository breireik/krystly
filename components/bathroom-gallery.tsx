import Image from "next/image"
import type { Bathroom } from "@/types/bathroom"
import { bathrooms } from "@/data/bathrooms"

interface BathroomGalleryProps {
  property: Bathroom
}

export default function BathroomGallery({ property }: BathroomGalleryProps) {
  // For demo purposes, we'll generate additional gallery images from other properties
  const otherImages = bathrooms
    .filter((b) => b.id !== property.id)
    .slice(0, 5)
    .map((b) => b.imageUrl)

  const galleryImages = [property.imageUrl, ...otherImages]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${property.title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
