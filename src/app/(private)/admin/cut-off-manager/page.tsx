"use client"

import { PageHeader } from "../components/page-header"
import { SparkleButton } from "@/components/ui/sparkle-button"
import { Save } from "lucide-react"
import { toast } from "sonner"
import { DailyCutoff } from "./components/daily-cutoff"
import { SpecialEvents } from "./components/special-events"

export default function CutOffManagerPage() {
  const handleSave = () => {
    console.log("Saving global Cut-Off Manager changes...")
    toast.success("Changes saved successfully!")
  }

  return (
    <div className="w-full h-full flex flex-col gap-6 min-w-0">
      <PageHeader
        title="Cut-Off Manager"
        description="Configure when orders stop for the day to ensure supplier fulfillment."
      >
        <SparkleButton variant="default" onClick={handleSave}>
          <Save className="w-4 h-4 mr-1.5" />
          Save Changes
        </SparkleButton>
      </PageHeader>

      <div className="flex flex-col gap-6  mt-2">
        <DailyCutoff />
        <SpecialEvents />
      </div>
    </div>
  )
}
