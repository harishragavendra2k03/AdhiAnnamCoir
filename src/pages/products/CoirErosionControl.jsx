import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirErosionControl() {
  const category = getCategoryBySlug('coir-erosion-control')
  return <CategoryTemplate category={category} />
}
