import React, { useState } from "react";
import { X, Save, RotateCcw, Cog, MapPin, Phone, Mail } from "lucide-react";
import { BusinessInfo, defaultBusinessInfo, saveBusinessInfo } from "../config/businessInfo";

interface BusinessInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessInfo: BusinessInfo;
  onUpdateInfo: (info: BusinessInfo) => void;
}

export const BusinessInfoModal: React.FC<BusinessInfoModalProps> = ({
  isOpen,
  onClose,
  businessInfo,
  onUpdateInfo,
}) => {
  const [formData, setFormData] = useState<BusinessInfo>({ ...businessInfo });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveBusinessInfo(formData);
    onUpdateInfo(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleResetDefaults = () => {
    setFormData({ ...defaultBusinessInfo });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-300 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <Cog className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold text-white font-sans">
              Configure Business &amp; Contact Details
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSave} className="overflow-y-auto p-5 sm:p-6 space-y-4 text-xs">
          
          <div>
            <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
                Display Phone
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
                Dialer Phone (Raw)
              </label>
              <input
                type="text"
                value={formData.phoneRaw}
                onChange={(e) => setFormData({ ...formData, phoneRaw: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
                WhatsApp Display
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
                WhatsApp Raw (with country code)
              </label>
              <input
                type="text"
                value={formData.whatsappRaw}
                onChange={(e) => setFormData({ ...formData, whatsappRaw: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
              Workshop Address
            </label>
            <textarea
              rows={2}
              value={formData.workshopAddress}
              onChange={(e) => setFormData({ ...formData, workshopAddress: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block font-mono font-bold uppercase text-slate-700 mb-1">
              Working Hours
            </label>
            <input
              type="text"
              value={formData.workingHours}
              onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 flex items-center justify-between border-t border-slate-200">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center space-x-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold flex items-center space-x-1.5 shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{savedSuccess ? "Saved!" : "Save Changes"}</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
