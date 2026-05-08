'use client'

import { useState, useRef, useCallback, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  ZoomIn, 
  Ruler, 
  Scale, 
  Droplets, 
  Flame, 
  Sun, 
  MessageCircle,
  Mail,
  ChevronRight,
  Check,
  Info
} from 'lucide-react'
import { 
  FABRIC_DATA,
  getProductById,
  getProductsByCategory,
  formatComposition,
  categoryLabels,
  usageAreaLabels,
  washingInstructionLabels,
  type FabricProduct
} from '@/lib/fabric-data'
import { cn } from '@/lib/utils'

// Magnifier component for texture inspection
function TextureMagnifier({ 
  src, 
  alt,
  magnification = 2.5 
}: { 
  src: string
  alt: string
  magnification?: number
}) {
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setPosition({ x, y })
  }, [])

  const handleMouseEnter = useCallback(() => setIsActive(true), [])
  const handleMouseLeave = useCallback(() => setIsActive(false), [])

  return (
    <div className="relative">
      {/* Main Image Container */}
      <div
        ref={containerRef}
        className="relative aspect-square overflow-hidden bg-slate-100 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Magnifier Lens Overlay */}
        {isActive && (
          <div
            className="absolute w-40 h-40 border-2 border-white shadow-xl rounded-full overflow-hidden pointer-events-none"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${magnification * 100}% ${magnification * 100}%`,
                backgroundPosition: `${position.x}% ${position.y}%`,
              }}
            />
          </div>
        )}

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs text-slate-700">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Hover to inspect texture</span>
        </div>
      </div>
    </div>
  )
}

// Technical specs table component
function SpecificationTable({ product }: { product: FabricProduct }) {
  const specs = [
    {
      icon: Ruler,
      label: 'Width',
      value: `${product.width} cm`,
      description: 'Fabric roll width',
    },
    {
      icon: Scale,
      label: 'Weight (GSM)',
      value: `${product.weight} g/m²`,
      description: 'Grams per square meter',
    },
    {
      icon: Droplets,
      label: 'Composition',
      value: formatComposition(product.composition),
      description: 'Material blend',
    },
    ...(product.martindale ? [{
      icon: Info,
      label: 'Martindale',
      value: `${product.martindale.toLocaleString()} cycles`,
      description: 'Abrasion resistance',
    }] : []),
    ...(product.lightFastness ? [{
      icon: Sun,
      label: 'Light Fastness',
      value: `${product.lightFastness}/8`,
      description: 'ISO 105-B02 rating',
    }] : []),
    ...(product.fireRetardant ? [{
      icon: Flame,
      label: 'Fire Retardant',
      value: 'Yes',
      description: 'FR certified',
    }] : []),
  ]

  return (
    <div className="border border-slate-200 divide-y divide-slate-200">
      <div className="px-4 py-3 bg-slate-50">
        <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-slate-900">
          Technical Specifications
        </h3>
      </div>
      {specs.map((spec, index) => (
        <div key={index} className="flex items-start gap-4 px-4 py-3">
          <spec.icon className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-slate-600">{spec.label}</span>
              <span className="text-sm font-medium text-slate-900 text-right">{spec.value}</span>
            </div>
            <span className="text-xs text-slate-400">{spec.description}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Quote request section
function QuoteRequest({ product }: { product: FabricProduct }) {
  const whatsappMessage = encodeURIComponent(
    `Hello Karacabey Tekstil,\n\nI am interested in:\n\nProduct: ${product.name}\nSKU: ${product.sku}\nCategory: ${categoryLabels[product.category].en}\n\nPlease provide pricing and availability information.\n\nThank you.`
  )

  const emailSubject = encodeURIComponent(`Quote Request: ${product.name} (${product.sku})`)
  const emailBody = encodeURIComponent(
    `Hello Karacabey Tekstil,\n\nI am interested in:\n\nProduct: ${product.name}\nSKU: ${product.sku}\nCategory: ${categoryLabels[product.category].en}\nWidth: ${product.width} cm\nWeight: ${product.weight} g/m²\nComposition: ${formatComposition(product.composition)}\n\nPlease provide pricing and availability information.\n\nThank you.`
  )

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-slate-900">
        Request Quote
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`https://wa.me/905551234567?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href={`mailto:sales@karacabey.com?subject=${emailSubject}&body=${emailBody}`}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>
      <p className="text-xs text-slate-500 text-center">
        Minimum order: {product.minOrder} meters
      </p>
    </div>
  )
}

// Related products component
function RelatedProducts({ product }: { product: FabricProduct }) {
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-slate-200">
      <h2 className="text-xl font-medium text-slate-900 mb-8">
        Related Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((related) => (
          <Link
            key={related.id}
            href={`/showroom/${related.id}`}
            className="group"
          >
            <div className="relative aspect-square overflow-hidden bg-slate-100 mb-3">
              <Image
                src={related.images.primary}
                alt={related.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <h3 className="text-sm font-medium text-slate-900 group-hover:text-slate-600 transition-colors line-clamp-1">
              {related.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {related.width}cm | {related.weight} GSM
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = getProductById(resolvedParams.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-slate-900 mb-4">Product Not Found</h1>
          <p className="text-slate-500 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/showroom"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Showroom
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold tracking-wide text-slate-900">
              Karacabey Tekstil
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link href="/showroom" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Showroom
              </Link>
              <Link href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/showroom" className="text-slate-500 hover:text-slate-900 transition-colors">
              Showroom
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-500">{categoryLabels[product.category].en}</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image with Magnifier */}
          <div className="space-y-4">
            <TextureMagnifier 
              src={product.images.primary} 
              alt={product.name}
              magnification={2.5}
            />
            
            {/* Image thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={cn(
                    "relative aspect-square overflow-hidden bg-slate-100 border-2",
                    i === 1 ? "border-slate-900" : "border-transparent hover:border-slate-300"
                  )}
                >
                  <Image
                    src={product.images.primary}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-slate-500">
                  {categoryLabels[product.category].en}
                </span>
                {product.new && (
                  <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-medium tracking-wider uppercase">
                    New
                  </span>
                )}
                {product.bestseller && (
                  <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-medium tracking-wider uppercase">
                    Bestseller
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-medium text-slate-900">
                {product.name}
              </h1>
              <p className="mt-2 text-sm font-mono text-slate-500">
                SKU: {product.sku}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center py-4 bg-white border border-slate-200">
                <span className="block text-2xl font-light text-slate-900">{product.width}</span>
                <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1">cm width</span>
              </div>
              <div className="text-center py-4 bg-white border border-slate-200">
                <span className="block text-2xl font-light text-slate-900">{product.weight}</span>
                <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1">g/m² (GSM)</span>
              </div>
              <div className="text-center py-4 bg-white border border-slate-200">
                <span className="block text-2xl font-light text-slate-900">{product.minOrder}</span>
                <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1">min. meters</span>
              </div>
            </div>

            {/* Technical Specs Table */}
            <SpecificationTable product={product} />

            {/* Usage Areas */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-slate-900">
                Recommended Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.usageAreas.map((usage) => (
                  <span
                    key={usage}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-sm text-slate-700"
                  >
                    <Check className="w-3 h-3" />
                    {usageAreaLabels[usage].en}
                  </span>
                ))}
              </div>
            </div>

            {/* Available Colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-slate-900">
                Available Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="px-3 py-1.5 border border-slate-200 text-sm text-slate-700"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Care Instructions */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-slate-900">
                Care Instructions
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.washingInstructions.map((instruction) => (
                  <span
                    key={instruction}
                    className="px-3 py-1.5 bg-slate-50 text-xs text-slate-600"
                  >
                    {washingInstructionLabels[instruction].en}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Request */}
            <QuoteRequest product={product} />
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts product={product} />
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>Karacabey Tekstil - Premium Fabrics for Discerning Clients</p>
        </div>
      </footer>
    </div>
  )
}
