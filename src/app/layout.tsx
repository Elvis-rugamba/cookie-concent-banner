import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";
import CookieConsentBanner from "@/components/cookie-consent-banner";
import NavigationBar from "@/components/navigation-bar";

export const metadata: Metadata = {
  title: "Cookie Consent Banner App",
  description: "Cookie Consent Banner App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            <NavigationBar />
            <main className="w-full h-auto items-center justify-center">
              {children}
            </main>
            
          </div>
          <CookieConsentBanner />
        </Providers>
      </body>
    </html>
  );
}
