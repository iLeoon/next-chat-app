import React from 'react'
import {
  Table,
  TableCaption,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui/table'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function InboxTable() {
  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
    },
  ]
  return (
    <Table>
      <TableCaption>A list of your inbox</TableCaption>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">
              {invoice.invoice} invites you for a conversations
            </TableCell>
            <TableCell className="text-right">
              <div className="flex gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:bg-slate-300"
                  asChild={false}
                >
                  <Check color="green" className="w-5 h-5" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:bg-slate-300"
                  asChild={false}
                >
                  <X color="red" className="w-5 h-5" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
