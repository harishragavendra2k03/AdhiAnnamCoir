import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirInteriorPanel() {
  const category = getCategoryBySlug('coir-interior-panels')
  return <CategoryTemplate category={category} />
}
