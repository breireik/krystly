import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { bathrooms } from "@/data/bathrooms"
import Image from "next/image"
import Link from "next/link"

export default function BathroomSearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Bathroom Inspirations</h1>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Select defaultValue="bathroom">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bathroom">Bathroom</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="garden">Garden</SelectItem>
                  <SelectItem value="living-room" disabled>
                    Living Room (Coming soon)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Input type="text" placeholder="Enter location" />
            </div>
            <Button className="flex-none bg-purple-600 hover:bg-purple-700">Update Search</Button>
          </div>

          <div className="mt-6 border-t pt-6">
            <h3 className="font-medium mb-4">Price Range</h3>
            <Slider defaultValue={[500000, 1500000]} max={2500000} step={10000} className="mb-6" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>£500,000</span>
              <span>£2,500,000</span>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <h3 className="font-medium mb-4">Bathroom Style</h3>
            <div className="flex flex-wrap gap-2">
              {["Luxury", "Modern", "Victorian", "Minimalist", "Industrial", "Zen"].map((style) => (
                <Button key={style} variant="outline" size="sm" className="text-xs">
                  {style}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{bathrooms.length} properties found</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Sort by:</span>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="grid" className="mb-6">
          <div className="flex justify-end">
            <TabsList>
              <TabsTrigger value="grid">
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
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="list">
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
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bathrooms.map((bathroom) => (
                <Link href={`/property/bathroom/${bathroom.id}`} key={bathroom.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={bathroom.imageUrl || "/placeholder.svg"}
                        alt={bathroom.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span className="text-white font-semibold text-lg">£{bathroom.price.toLocaleString()}</span>
                        <p className="text-white/90 text-sm">{bathroom.location}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {bathroom.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full">
                        See Property
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-6">
              {bathrooms.map((bathroom) => (
                <Link href={`/property/bathroom/${bathroom.id}`} key={bathroom.id} className="block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-64 md:h-auto md:w-1/3">
                        <Image
                          src={bathroom.imageUrl || "/placeholder.svg"}
                          alt={bathroom.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-semibold mb-2">{bathroom.title}</h3>
                        <p className="text-2xl font-bold text-purple-600 mb-3">£{bathroom.price.toLocaleString()}</p>
                        <p className="text-gray-600 mb-4">{bathroom.location}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {bathroom.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-700 mb-4">{bathroom.description}</p>

                        <Button className="bg-purple-600 hover:bg-purple-700">See Property</Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
