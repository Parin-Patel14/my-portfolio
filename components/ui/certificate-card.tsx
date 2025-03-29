'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ExternalLink, Copy, ChevronLeft, ChevronRight } from 'lucide-react'

interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  credentialId: string
  credentialUrl?: string
  image: string
  description: string
}


interface CertificateCardProps extends React.HTMLAttributes<HTMLDivElement> {
  certificate: Certificate
}

export const CertificateCard = React.forwardRef<HTMLDivElement, CertificateCardProps>(
  ({ certificate, className }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="relative">
        <button
          className="absolute -left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background/90 hover:shadow-xl transition-all"
          onClick={() => {/* TODO: Add navigation logic */}}
        >
          <ChevronLeft className="w-8 h-8 text-foreground/80 hover:text-foreground" />
        </button>
        
        <motion.div
          ref={ref}
          className={cn(
            'rounded-lg border border-border bg-background p-16 shadow-2xl transition-all hover:shadow-3xl w-full max-w-6xl relative overflow-hidden',
            className
          )}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 pointer-events-none"
          />
          <div className="flex gap-6">
          <div className="w-1/2">
            <div className="aspect-[4/3] rounded-md overflow-hidden bg-background/5 border border-border/10 p-3 relative">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30 pointer-events-none" />
            </div>
          </div>
          
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{certificate.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{certificate.description}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Issued by: {certificate.issuer}</p>
                <p className="text-sm text-muted-foreground">Issued: {certificate.issueDate}</p>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">Credential ID:</span>
                  <button
                    onClick={() => copyToClipboard(certificate.credentialId)}
                    className="flex items-center gap-1 rounded-md p-1 text-xs text-muted-foreground hover:bg-surface-200/10 hover:text-foreground"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                    <Copy size={12} />
                  </button>
                </div>
                
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline"
                  >
                    Verify credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        </motion.div>
        
        <button
          className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background/90 hover:shadow-xl transition-all"
          onClick={() => {/* TODO: Add navigation logic */}}
        >
          <ChevronRight className="w-8 h-8 text-foreground/80 hover:text-foreground" />
        </button>
      </div>
    )
  }
)

CertificateCard.displayName = 'CertificateCard'
