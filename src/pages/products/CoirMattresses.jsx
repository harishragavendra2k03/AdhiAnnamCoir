import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirMattresses() {
  const category = getCategoryBySlug('coir-mattresses')
  return <CategoryTemplate category={category} />
}
