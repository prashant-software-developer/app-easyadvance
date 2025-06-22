"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Banknote, Shield, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface BankLinkingProps {
  onNext: () => void
  onBack: () => void
  userData: any
  setUserData: (data: any) => void
}

export function BankLinking({ onNext, onBack, userData, setUserData }: BankLinkingProps) {
  const [bankData, setBankData] = useState({
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    bankName: "",
    accountType: "",
    accountHolderName: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUserData({ ...userData, banking: bankData })
    onNext()
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Banknote className="h-5 w-5" />
          Link Your Bank Account
        </CardTitle>
        <p className="text-gray-600">Connect your bank account to receive instant payouts</p>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Your banking information is encrypted and secure. We use bank-level security to protect your data.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="accountHolderName">Account Holder Name</Label>
            <Input
              id="accountHolderName"
              value={bankData.accountHolderName}
              onChange={(e) => setBankData({ ...bankData, accountHolderName: e.target.value })}
              placeholder="As per bank records"
              required
            />
          </div>

          <div>
            <Label htmlFor="bankName">Bank Name</Label>
            <Select onValueChange={(value) => setBankData({ ...bankData, bankName: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sbi">State Bank of India</SelectItem>
                <SelectItem value="hdfc">HDFC Bank</SelectItem>
                <SelectItem value="icici">ICICI Bank</SelectItem>
                <SelectItem value="axis">Axis Bank</SelectItem>
                <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="accountType">Account Type</Label>
            <Select onValueChange={(value) => setBankData({ ...bankData, accountType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="savings">Savings Account</SelectItem>
                <SelectItem value="current">Current Account</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              value={bankData.accountNumber}
              onChange={(e) => setBankData({ ...bankData, accountNumber: e.target.value })}
              placeholder="Enter your account number"
              required
            />
          </div>

          <div>
            <Label htmlFor="confirmAccountNumber">Confirm Account Number</Label>
            <Input
              id="confirmAccountNumber"
              value={bankData.confirmAccountNumber}
              onChange={(e) => setBankData({ ...bankData, confirmAccountNumber: e.target.value })}
              placeholder="Re-enter your account number"
              required
            />
          </div>

          <div>
            <Label htmlFor="ifscCode">IFSC Code</Label>
            <Input
              id="ifscCode"
              value={bankData.ifscCode}
              onChange={(e) => setBankData({ ...bankData, ifscCode: e.target.value })}
              placeholder="SBIN0001234"
              required
            />
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              We'll send a small test amount (₹1) to verify your account. This will be refunded immediately.
            </AlertDescription>
          </Alert>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1">
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Link Account & Continue
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
