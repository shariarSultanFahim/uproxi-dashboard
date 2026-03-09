import { PageHeader } from "../components/page-header"
import { Button } from "@/components/ui"
import { Calendar, ChevronDown } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <section className="flex flex-col gap-6 w-full p-4 md:p-8">
      <PageHeader
        title="Performance Analytics"
        description="Comprehensive metrics for stores, suppliers, finance, and operations."
      >
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          Last 7 Days
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PageHeader>

      {/* Analytics content below */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Placeholder for content */}
      </div>
    </section>
  )
}
