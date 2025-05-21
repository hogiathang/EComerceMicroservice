// Project: ecommerce-web-ui
import "@styles/globals.css";
import "@metadata/metadata"
import HeaderBar from "@/components/navbar/header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <ToastContainer />
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white shadow-md">
            <HeaderBar />
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; Bản quyền ứng dụng thuộc về Hồ Gia Thắng</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
