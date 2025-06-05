import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Garden } from "@/types/garden"

interface PropertyContactProps {
  property: Garden
}

export default function PropertyContact({ property }: PropertyContactProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="font-semibold text-lg mb-4">Interested in this property?</h3>

      <div className="mb-6">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-3">
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Call Agent
        </Button>
        <Button variant="outline" className="w-full">
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
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Message Agent
        </Button>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-medium mb-4">Schedule a viewing</h4>
        <form className="space-y-4">
          <div>
            <Input type="text" placeholder="Your name" />
          </div>
          <div>
            <Input type="email" placeholder="Your email" />
          </div>
          <div>
            <Input type="tel" placeholder="Your phone" />
          </div>
          <div>
            <Textarea placeholder="Message" rows={3} />
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Request Viewing</Button>
        </form>
      </div>

      <div className="mt-6 pt-6 border-t">
        <Button variant="outline" className="w-full" asChild>
          <a href="https://zoopla.co.uk" target="_blank" rel="noopener noreferrer">
            View on Zoopla
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
              className="ml-2"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </Button>
      </div>
    </div>
  )
}
