"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, LinkIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InvoiceUpload() {
  const [uploadMethod, setUploadMethod] = useState("upload")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Add New Invoice
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={uploadMethod} onValueChange={setUploadMethod}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload PDF</TabsTrigger>
            <TabsTrigger value="connect">Connect Platform</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <Button variant="outline">Choose Invoice File</Button>
                <p className="mt-2 text-sm text-gray-500">PDF, PNG, JPG up to 10MB</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clientName">Client Name</Label>
                <Input id="clientName" placeholder="Enter client name" />
              </div>
              <div>
                <Label htmlFor="invoiceAmount">Invoice Amount (₹)</Label>
                <Input id="invoiceAmount" type="number" placeholder="25000" />
              </div>
            </div>

            <Button className="w-full">Upload & Verify Invoice</Button>
          </TabsContent>

          <TabsContent value="connect" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["QuickBooks", "FreshBooks", "PayPal"].map((platform) => (
                <Button key={platform} variant="outline" className="h-20 flex-col">
                  <LinkIcon className="h-6 w-6 mb-2" />
                  Connect {platform}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              Connect your accounting platform to automatically sync invoices
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
