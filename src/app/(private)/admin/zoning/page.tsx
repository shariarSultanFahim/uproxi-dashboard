"use client"

import { useState } from "react"
import { Map, ChevronRight, Plus, ChevronDown } from "lucide-react"

import { mockZones, type Zone, type Area } from "./components/data/zoning"
import { AddZoneModal } from "./components/add-zone-modal"
import { AddAreaModal } from "./components/add-area-modal"
import { AddSupplierModal } from "./components/add-supplier-modal"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function ZoningPage() {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(mockZones[0] || null)
  const [expandedArea, setExpandedArea] = useState<string | null>(mockZones[0]?.areas[0]?.id || null)

  return (
    <div className="flex flex-col min-h-0 h-full">
      <div className="mb-6 shrink-0">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Zone Management</h1>
        <p className="text-slate-500 mt-1">Define delivery areas and manage the Supplier Activation Matrix.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Left Sidebar - Zones List */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-0 pb-4">
          <div className="p-5 flex items-center justify-between shrink-0 border-b border-slate-50">
            <div>
              <h2 className="font-bold text-lg text-slate-800">Zones</h2>
              <p className="text-xs text-slate-500">Dubai</p>
            </div>
            <AddZoneModal>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shrink-0">
                <Plus className="h-4 w-4 text-slate-600" />
              </Button>
            </AddZoneModal>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {mockZones.map((zone) => {
              const isSelected = selectedZone?.id === zone.id

              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all group ${isSelected
                    ? "border-sky-300 bg-sky-50 shadow-sm ring-1 ring-sky-300 ring-offset-0"
                    : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${isSelected ? "bg-sky-100 text-sky-500" : "bg-slate-100 text-slate-400 group-hover:text-slate-500 group-hover:bg-slate-200/50"
                      }`}>
                      <Map className="h-5 w-5" />
                    </div>
                    <div>
                      <div className={`font-semibold text-[15px] ${isSelected ? "text-sky-700" : "text-slate-700"}`}>
                        {zone.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 uppercase tracking-wide font-medium">
                        {zone.shortCode}
                      </div>
                    </div>
                  </div>

                  {isSelected && <ChevronRight className="h-4 w-4 text-sky-400 shrink-0" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Content - Area Management */}
        <div className="flex-1 flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-0 min-w-0">
          {selectedZone ? (
            <>
              <div className="p-6 shrink-0 border-b border-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center rounded-md bg-sky-100/50 px-2 py-1 text-[10px] font-bold text-sky-500 uppercase tracking-wider mb-2">
                    ZONE: {selectedZone.shortCode}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Area Management</h2>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <AddSupplierModal>
                    <Button variant="outline" className="px-5 h-9 font-semibold text-slate-600 rounded-xl">
                      + New Supplier
                    </Button>
                  </AddSupplierModal>
                  <AddAreaModal>
                    <Button variant="default" className="px-5 h-9 font-semibold bg-[#39B5F9] hover:bg-[#22A0E6] text-white rounded-xl shadow-sm">
                      + Add Area
                    </Button>
                  </AddAreaModal>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedZone.areas.length > 0 ? (
                  selectedZone.areas.map((area) => (
                    <AreaCard
                      key={area.id}
                      area={area}
                      isExpanded={expandedArea === area.id}
                      onToggle={() => setExpandedArea(expandedArea === area.id ? null : area.id)}
                    />
                  ))
                ) : (
                  <div className="h-40 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                    <p className="text-slate-500 font-medium">No areas defined for this zone yet.</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              Select a zone to manage areas
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function AreaCard({ area, isExpanded, onToggle }: { area: Area, isExpanded: boolean, onToggle: () => void }) {
  return (
    <div className={`rounded-xl border transition-all duration-200 ${isExpanded
      ? "border-sky-300 shadow-sm ring-1 ring-sky-300 ring-offset-0 bg-white"
      : "border-slate-100 hover:border-slate-200 bg-white"
      }`}>
      {/* Area Card Header (Clickable) */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl shrink-0 transition-colors ${isExpanded ? "bg-sky-100 text-sky-500" : "bg-slate-50 text-slate-400"
            }`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-lg text-slate-800">{area.name}</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide font-semibold flex items-center gap-2">
              {area.shortCode} <span className="w-1 h-1 rounded-full bg-slate-300" /> 0 Suppliers Active
            </div>
          </div>
        </div>

        <div className={`p-1 rounded-full transition-transform duration-200 ${isExpanded ? "bg-sky-50 text-sky-500 rotate-180" : "bg-slate-50 text-slate-400"
          }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Expanded Area Checkboxes Content */}
      {isExpanded && (
        <div className="px-5 pb-5 pt-2 border-t border-slate-50 animate-in fade-in slide-in-from-top-2">
          <div className="text-[11px] font-bold tracking-[0.1em] text-slate-400 uppercase mb-4 mt-2">
            Supplier Access
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {area.suppliers.map((supplier) => (
              <label
                key={supplier.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 cursor-pointer transition-colors"
              >
                <Checkbox className="rounded flex-shrink-0 h-5 w-5 border-slate-200 data-[state=checked]:bg-sky-400 data-[state=checked]:border-sky-400" />
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-slate-700 truncate">{supplier.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 truncate">{supplier.category}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
