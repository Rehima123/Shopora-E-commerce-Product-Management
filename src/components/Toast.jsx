import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/20 bg-emerald-50/90 text-emerald-900',
    error: 'border-rose-500/20 bg-rose-50/90 text-rose-900',
    info: 'border-blue-500/20 bg-blue-50/90 text-blue-900'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md border ${
          borderColors[toast.type] || borderColors.info
        } max-w-md`}
      >
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium">{toast.message}</p>
      </div>
    </div>
  );
};

