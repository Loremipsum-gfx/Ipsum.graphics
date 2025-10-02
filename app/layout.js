import "./globals.css";
import Top from "@/components/layout/top-bar";
import Menu from "@/components/layout/menu";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Lorem | Multimedia Designer",
  description: "Portfolio of Lorem Ipsum – Interactive Content Expert",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "loremipsum.graphics",
    title: "Lorem | Multimedia Designer",
    description: "Portfolio of Lorem Ipsum – Interactive Content Expert",
    images: [
      {
        url: "https://www.yourwebsite.com/image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.yourwebsite.com",
    title: "Lorem | Multimedia Designer",
    description: "Portfolio of Lorem Ipsum – Interactive Content Expert",
    images: ["https://www.yourwebsite.com/image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "rgba(50, 35, 70, 1)",
        }}
      >
        <div id="loremipsum-root">
          <Top />
          <Menu />
          <div id="lorem-frame" className="bg-element-c">
            <div id="lorem-body">
              <div className=" w-full m-auto">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
