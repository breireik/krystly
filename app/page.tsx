import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { bathrooms } from "@/data/bathrooms"

export default function Home() {
  // Get the first 6 bathrooms for the featured section
  const featuredBathrooms = bathrooms.slice(0, 6)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
            alt="Stunning new build home exterior with modern architecture"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Find your dream home by the rooms you love</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Start your search with beautiful bathrooms that inspire you
          </p>

          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Select defaultValue="bathroom">
                  <SelectTrigger className="w-full h-12">
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
                <Input type="text" placeholder="Enter location" className="w-full h-12" />
              </div>
              <Link href="/search/bathrooms" className="flex-none">
                <Button className="w-full md:w-auto h-12 px-8 bg-purple-600 hover:bg-purple-700">
                  Search by Style
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Prenthuis Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                  <path d="M3 10v4a8 8 0 0 0 8 8v-5a3 3 0 0 0-3-3H3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Inspiration</h3>
              <p className="text-gray-600">Browse stunning bathrooms that capture your dream aesthetic and style</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Properties</h3>
              <p className="text-gray-600">See the full property details behind your favorite bathroom designs</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  <path d="M12 3v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Your Dream Home</h3>
              <p className="text-gray-600">Connect with agents to view and purchase your perfect property</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bathrooms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Bathroom Inspirations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover properties with stunning bathrooms that could be your daily sanctuary
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBathrooms.map((bathroom) => (
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
                      {bathroom.tags.slice(0, 3).map((tag, index) => (
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

          <div className="text-center mt-12">
            <Link href="/search/bathrooms">
              <Button className="bg-purple-600 hover:bg-purple-700">View All Bathroom Properties</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Room Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore by Room</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/search/bathrooms" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101"
                  alt="Luxury bathroom"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Bathrooms</h3>
                    <p className="text-white/90">Luxury spas, freestanding tubs, marble finishes</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/search/kitchens" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                  alt="Modern kitchen"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Kitchens</h3>
                    <p className="text-white/90">Chef's islands, premium appliances, open layouts</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/search/gardens" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99"
                  alt="Beautiful garden"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Gardens</h3>
                    <p className="text-white/90">Landscaped spaces, outdoor living, natural beauty</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">New Build Excellence</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Modern Living Redefined</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Discover exceptional new build homes that combine contemporary design with luxury finishes. Each
                property features carefully curated spaces, from spa-like bathrooms to chef-inspired kitchens, designed
                for modern living.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600 mr-3"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                  </svg>
                  <span>Premium fixtures and finishes throughout</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600 mr-3"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                  </svg>
                  <span>Energy-efficient smart home technology</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600 mr-3"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                  </svg>
                  <span>Thoughtfully designed outdoor spaces</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600 mr-3"
                  >
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                  </svg>
                  <span>Prime locations with excellent connectivity</span>
                </li>
              </ul>
              <Link href="/search/bathrooms">
                <Button className="bg-purple-600 hover:bg-purple-700">Explore New Builds</Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                  alt="Modern new build home interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                  alt="Luxury bathroom detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Bathroom Inspiration</h2>
            <p className="mb-8">
              Sign up for our newsletter to receive the latest luxury bathroom property listings and design ideas
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 flex-1"
              />
              <Button className="bg-white text-purple-600 hover:bg-white/90 h-12">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
