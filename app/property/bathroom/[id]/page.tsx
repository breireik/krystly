import { Button } from "@/components/ui/button"
import { bathrooms } from "@/data/bathrooms"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BathroomGallery from "@/components/bathroom-gallery"
import BathroomDetails from "@/components/bathroom-details"
import PropertyContact from "@/components/property-contact"

interface BathroomPropertyPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return bathrooms.map((bathroom) => ({
    id: bathroom.id.toString(),
  }))
}

export default function BathroomPropertyPage({ params }: BathroomPropertyPageProps) {
  const propertyId = Number.parseInt(params.id)
  const property = bathrooms.find((bathroom) => bathroom.id === propertyId)

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4" asChild>
          <a href="/search/bathrooms">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to bathroom search
          </a>
        </Button>

        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <p className="text-xl text-gray-600">{property.location}</p>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] rounded-xl overflow-hidden mb-8">
        <Image
          src={property.imageUrl || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <span className="text-white font-bold text-3xl">£{property.price.toLocaleString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Property Details</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <BathroomDetails property={property} />
            </TabsContent>

            <TabsContent value="gallery">
              <BathroomGallery property={property} />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <PropertyContact property={property} />

          <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-lg mb-4">Similar Properties</h3>

            <div className="space-y-4">
              {bathrooms
                .slice(0, 3)
                .filter((b) => b.id !== property.id)
                .map((bathroom) => (
                  <a href={`/property/bathroom/${bathroom.id}`} key={bathroom.id} className="flex gap-4 group">
                    <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={bathroom.imageUrl || "/placeholder.svg"}
                        alt={bathroom.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-purple-600 transition-colors">{bathroom.title}</h4>
                      <p className="text-sm text-gray-500">{bathroom.location}</p>
                      <p className="text-sm font-semibold">£{bathroom.price.toLocaleString()}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
