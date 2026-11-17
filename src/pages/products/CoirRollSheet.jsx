import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirRollSheet() {
  const category = getCategoryBySlug('coir-rolls-and-sheets')
  return <CategoryTemplate category={category} />
}
