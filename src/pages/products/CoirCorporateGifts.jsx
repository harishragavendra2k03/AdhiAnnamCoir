import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirCorporateGifts() {
  const category = getCategoryBySlug('coir-corporate-gifts')
  return <CategoryTemplate category={category} />
}
