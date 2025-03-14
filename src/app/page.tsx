import { Property, SAMPLE_PROPERTIES } from "@/sampleData";
import { ArrowRight, Bed, Bath, Square, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/photo-1600596542815-ffad4c1539a9.jpeg";

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 truncate">
            {property.title}
          </h3>
          <span className="text-lg font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex justify-between mt-4 text-gray-600">
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square size={18} className="mr-1" />
            <span>{property.squareFeet} sq ft</span>
          </div>
        </div>

        <div className="mt-3">
          <span
            className={`
            px-2 py-1 text-xs font-semibold rounded-full
            ${
              property.status === "available"
                ? "bg-green-100 text-green-800"
                : ""
            }
            ${
              property.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : ""
            }
            ${property.status === "sold" ? "bg-red-100 text-red-800" : ""}
          `}
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const featuredProperties = SAMPLE_PROPERTIES;

  return (
    <div>
      {/* Hero Section */}
      <div className="grid grid-cols-1 grid-rows-1 h-[100vh] items-center justify-items-center">
        <Image
          src={hero}
          alt="hero"
          className="brightness-40 object-cover row-start-1 row-end-1 col-start-1 col-end-1 h-full z-0"
          placeholder="blur"
        />
        <div className="text-white row-start-1 col-start-1 z-10 p-4 max-w-7xl w-full">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Rental</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover luxury apartments and homes for rent in prime locations.
            From modern studios to spacious penthouses, find your ideal living
            space.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-accent rounded-md hover:bg-accent-contrast transition duration-300"
          >
            Browse Available Rentals
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Rentals</h2>
          <Link
            href="#"
            className="text-accent hover:text-accent-contrast font-semibold flex items-center"
          >
            View All Rentals
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Rent With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Locations",
                description:
                  "Exclusive rental properties in the most desirable neighborhoods.",
              },
              {
                title: "Professional Property Management",
                description:
                  "Dedicated team ensuring 24/7 support and maintenance.",
              },
              {
                title: "Flexible Leasing",
                description:
                  "Simple application process and flexible lease terms to suit your needs.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
