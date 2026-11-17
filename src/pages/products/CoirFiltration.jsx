import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirFiltration() {
  const category = getCategoryBySlug('coir-filtration')
  return <CategoryTemplate category={category} />
}
