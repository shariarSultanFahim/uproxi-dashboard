"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LegalEditor } from "./components/legal-editor";
import { FileText, Shield } from "lucide-react";

export default function LegalPage() {
  const handleSave = (type: "terms" | "privacy", content: any) => {
    console.log(`Saving ${type}...`, content);
    // In a real app, you would make an API call here.
  };

  return (
    <div className="flex-1 space-y-6  w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[#202c45] tracking-tight">Legal Content Management</h1>
        <p className="text-[#475467] text-[15px]">Edit the legal documents displayed to your users.</p>
      </div>

      <Card className="rounded-3xl border-slate-100 shadow-sm bg-white overflow-hidden p-6 sm:p-8">
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="w-full h-auto p-0 bg-transparent flex border-b border-slate-100 rounded-none mb-8">
            <TabsTrigger
              value="terms"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#3dbcf9] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#3dbcf9] text-[#8e98a8] py-4 font-bold text-base transition-all"
            >
              <FileText className="w-4 h-4 mr-2" />
              Terms & Conditions
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#3dbcf9] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#3dbcf9] text-[#8e98a8] py-4 font-bold text-base transition-all"
            >
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <LegalEditor onSave={(content) => handleSave("terms", content)} />
          </TabsContent>

          <TabsContent value="privacy" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <LegalEditor onSave={(content) => handleSave("privacy", content)} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
