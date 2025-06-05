import Image from "next/image"
import type { Garden } from "@/types/garden"
import { gardens } from "@/data/gardens"

interface PropertyGalleryProps {
  property: Garden
}

export default function PropertyGallery({ property }: PropertyGalleryProps) {
  // For demo purposes, we'll generate additional gallery images from other properties
  const otherImages = gardens
    .filter((g) => g.id !== property.id)
    .slice(0, 5)
    .map((g) => g.imageUrl)

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
