// Project: ecommerce-web-ui
import "@styles/globals.css";
import "@metadata/metadata"
import HeaderBar from "@/components/navbar/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
