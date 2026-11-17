import { ShieldAlert, Award, FileCheck, CheckCircle } from 'lucide-react'
import CategoryTemplate from './CategoryTemplate'
import { getCategoryBySlug } from '../../data/productsData'

export default function CoirPackaging() {
  const category = getCategoryBySlug('coir-packaging')

  const ispm15Banner = (
    <section className="bg-[#183D2C] py-8 text-white border-b border-[#C5A16A]/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl bg-[#52764B]/20 border border-[#C5A16A]/40 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C5A16A] text-[#183D2C]">
              <FileCheck size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#C5A16A] px-2.5 py-0.5 text-[10px] font-bold text-[#183D2C]">
                  GLOBAL EXPORT ADVANTAGE
                </span>
                <span className="text-xs text-[#EDE8DA]/80">Customs Clearance Compliant</span>
              </div>
              <h3
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-1 text-2xl text-white"
              >
                100% ISPM-15 Exempt Packaging
              </h3>
              <p className="mt-1 max-w-2xl text-xs sm:text-sm text-[#EDE8DA]/85 leading-relaxed">
                Unlike raw timber and wooden crating, our engineered coconut coir packaging solutions are exempt from
                stringent ISPM-15 heat treatment and methyl bromide fumigation regulations. Ship globally to the USA,
                EU, Australia, and Asia without quarantine delays or chemical treatment documentation.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-2 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#C5A16A]" />
              <span>Zero Quarantine Delays</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#C5A16A]" />
              <span>No Methyl Bromide Fumigation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#C5A16A]" />
              <span>Accepted at All Global Ports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return <CategoryTemplate category={category} customBanner={ispm15Banner} />
}
