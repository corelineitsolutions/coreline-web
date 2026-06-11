import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://corelineitsolutions.com'),
  title: {
    default: "Coreline IT Solutions | Software Development Company Pune",
    template: "%s | Coreline IT Solutions"
  },
  description: "Coreline IT Solutions is a leading software development company in Kharadi Pune offering custom software, web development, SaaS, and election software solutions. Hire expert developers today.",
  keywords: "software development company in Pune, IT company in Kharadi Pune, custom software development Pune, web development company in Pune, election software development company India, software company in Pune, IT services company in Pune, software solutions company in Pune, software company in Kharadi Pune, IT company near Kharadi Pune, election management software India, online voting software development company",
  authors: [{ name: "Coreline IT Solutions" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token", // User should replace this with actual token
  },
  openGraph: {
    title: "Coreline IT Solutions | Software Development Company in Pune",
    description: "Coreline IT Solutions is a leading software development company in Kharadi Pune offering custom software, web development, SaaS, and election software solutions.",
    url: 'https://corelineitsolutions.com',
    type: "website",
    locale: "en_US",
    siteName: "Coreline IT Solutions"
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreline IT Solutions | Software Development Company in Pune",
    description: "Coreline IT Solutions is a leading software development company in Kharadi Pune offering custom software, web development, SaaS, and election software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SchemaMarkup />
          {/* Global Background Pattern */}
          <div className="fixed inset-0 z-[-1] h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="flex flex-col min-h-screen relative">
            <Header />
            <main className="flex-grow pt-16 md:pt-20">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
