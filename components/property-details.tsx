import type { Garden } from "@/types/garden"
import { Badge } from "@/components/ui/badge"

interface PropertyDetailsProps {
  property: Garden
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">About This Property</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Garden Features</h3>
        <div className="flex flex-wrap gap-2">
          {property.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Property Details</h3>
          <ul className="space-y-2">
            <li className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Property Type</span>
              <span className="font-medium">{property.propertyType}</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Bedrooms</span>
              <span className="font-medium">{property.bedrooms}</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Bathrooms</span>
              <span className="font-medium">{property.bathrooms}</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Garden Size</span>
              <span className="font-medium">{property.gardenSize} sq ft</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Total Area</span>
              <span className="font-medium">{property.totalArea} sq ft</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200">
            {/* Placeholder for map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Map view of {property.location}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">{property.fullAddress}</p>
        </div>
      </div>
    </div>
  )
}
