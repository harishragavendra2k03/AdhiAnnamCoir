import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirScrubbers() {
  const category = getCategoryBySlug('coir-scrubbers')
  return <CategoryTemplate category={category} />
}
