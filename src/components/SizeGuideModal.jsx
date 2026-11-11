import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, Sparkles, Check } from 'lucide-react';

export const SizeGuideModal = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [activeCategory, setActiveCategory] = useState('apparel'); // 'apparel' | 'shoes'

  if (!isSizeGuideOpen) return null;

  const apparelSizes = [
    { size: 'XS', us: '0 - 2', bust: '31 - 32"', waist: '24 - 25"', hips: '34 - 35"' },
    { size: 'S', us: '4 - 6', bust: '33 - 34"', waist: '26 - 27"', hips: '36 - 37"' },
    { size: 'M', us: '8 - 10', bust: '35 - 36"', waist: '28 - 29"', hips: '38 - 39"' },
    { size: 'L', us: '12 - 14', bust: '37 - 39"', waist: '30 - 32"', hips: '40 - 42"' },
    { size: 'XL', us: '16', bust: '40 - 42"', waist: '33 - 35"', hips: '43 - 45"' },
  ];

  const shoeSizes = [
    { us: 'US 7', uk: 'UK 6', eu: 'EU 40', cm: '25.0 cm' },
    { us: 'US 8', uk: 'UK 7', eu: 'EU 41', cm: '26.0 cm' },
    { us: 'US 9', uk: 'UK 8', eu: 'EU 42.5', cm: '27.0 cm' },
    { us: 'US 10', uk: 'UK 9', eu: 'EU 44', cm: '28.0 cm' },
    { us: 'US 11', uk: 'UK 10', eu: 'EU 45', cm: '29.0 cm' },
    { us: 'US 12', uk: 'UK 11', eu: 'EU 46', cm: '30.0 cm' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-slide-up my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-brand-600" />
            <h3 className="text-lg font-black text-slate-900 tracking-tight">
              International Fit & Size Guide
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Category Switcher Tabs */}
          <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl max-w-xs">
            <button
              onClick={() => setActiveCategory('apparel')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeCategory === 'apparel'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Apparel & Tops
            </button>
            <button
              onClick={() => setActiveCategory('shoes')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                activeCategory === 'shoes'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Footwear & Shoes
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            {activeCategory === 'apparel' ? (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="py-3 px-4">Size</th>
                    <th className="py-3 px-4">US Standard</th>
                    <th className="py-3 px-4">Chest / Bust</th>
                    <th className="py-3 px-4">Waist</th>
                    <th className="py-3 px-4">Hips</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {apparelSizes.map((row) => (
                    <tr key={row.size} className="hover:bg-rose-50/30 transition">
                      <td className="py-3 px-4 font-black text-slate-900">{row.size}</td>
                      <td className="py-3 px-4">{row.us}</td>
                      <td className="py-3 px-4">{row.bust}</td>
                      <td className="py-3 px-4">{row.waist}</td>
                      <td className="py-3 px-4">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="py-3 px-4">US Size</th>
                    <th className="py-3 px-4">UK Size</th>
                    <th className="py-3 px-4">Europe (EU)</th>
                    <th className="py-3 px-4">Foot Length (CM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {shoeSizes.map((row) => (
                    <tr key={row.us} className="hover:bg-rose-50/30 transition">
                      <td className="py-3 px-4 font-black text-slate-900">{row.us}</td>
                      <td className="py-3 px-4">{row.uk}</td>
                      <td className="py-3 px-4">{row.eu}</td>
                      <td className="py-3 px-4 font-mono">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* How to measure tips */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>SHOPORA Tailor Tip:</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              If your measurements fall between two sizes, we recommend ordering the larger size for a relaxed drape, or the smaller size for a tailored modern fit.
            </p>
          </div>

          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-2xl transition"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};

