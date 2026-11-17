import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirHorticulture() {
  const category = getCategoryBySlug('coir-horticulture')
  return <CategoryTemplate category={category} />
}
