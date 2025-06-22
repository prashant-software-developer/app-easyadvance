"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Shield } from "lucide-react"

interface KYCFormProps {
  onNext: () => void
  onBack: () => void
  userData: any
  setUserData: (data: any) => void
}

export function KYCForm({ onNext, onBack, userData, setUserData }: KYCFormProps) {
  const [kycData, setKycData] = useState({
    idType: "",
    idNumber: "",
    panNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUserData({ ...userData, kyc: kycData })
    onNext()
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Identity Verification
        </CardTitle>
        <p className="text-gray-600">We need to verify your identity for compliance and security</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="idType">Government ID Type</Label>
            <Select onValueChange={(value) => setKycData({ ...kycData, idType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select ID type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aadhar">Aadhar Card</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="driving-license">Driving License</SelectItem>
                <SelectItem value="voter-id">Voter ID</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="idNumber">ID Number</Label>
            <Input
              id="idNumber"
              value={kycData.idNumber}
              onChange={(e) => setKycData({ ...kycData, idNumber: e.target.value })}
              placeholder="Enter your ID number"
              required
            />
          </div>

          <div>
            <Label htmlFor="panNumber">PAN Number</Label>
            <Input
              id="panNumber"
              value={kycData.panNumber}
              onChange={(e) => setKycData({ ...kycData, panNumber: e.target.value })}
              placeholder="ABCDE1234F"
              required
            />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={kycData.address}
              onChange={(e) => setKycData({ ...kycData, address: e.target.value })}
              placeholder="Enter your full address"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={kycData.city}
                onChange={(e) => setKycData({ ...kycData, city: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={kycData.state}
                onChange={(e) => setKycData({ ...kycData, state: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="pincode">PIN Code</Label>
            <Input
              id="pincode"
              value={kycData.pincode}
              onChange={(e) => setKycData({ ...kycData, pincode: e.target.value })}
              placeholder="400001"
              required
            />
          </div>

          {/* File Upload */}
          <div className="space-y-4">
            <Label>Upload Documents</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <Button variant="outline" type="button">
                  Upload ID Document
                </Button>
                <p className="mt-2 text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1">
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Verify & Continue
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
