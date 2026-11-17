import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-[#EDE8DA]/80">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-[#C5A16A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5A16A]"
      >
        <Home size={14} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={item.label || index} className="flex items-center space-x-2">
            <ChevronRight size={13} className="text-[#C5A16A]/70" />
            {isLast || !item.to ? (
              <span className="font-semibold text-[#EDE8DA]">{item.label}</span>
            ) : (
              <Link
                to={item.to}
                className="transition-colors hover:text-[#C5A16A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5A16A]"
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
