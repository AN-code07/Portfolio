import "./globals.css";
import Loader from "@/components/layout/Loader";
import ScrollReveal from "@/components/layout/ScrollReveal";

export const metadata = {
  metadataBase: new URL("https://allahnawaz.dev"),
  title: "Allah Nawaz | Full-Stack MERN Developer",
  description:
    "Full-Stack MERN Architect specializing in high-concurrency applications, React 19, Next.js, PostgreSQL, MongoDB, and Prisma ORM. Building scalable, production-grade web systems.",
  keywords: [
    "Allah Nawaz",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Allah Nawaz" }],
  creator: "Allah Nawaz",
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/AllahNawaz.png",
    shortcut: "/images/AllahNawaz.png",
    apple: "/images/AllahNawaz.png",
  },
  openGraph: {
    title: "Allah Nawaz | Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Architect specializing in high-concurrency applications and distributed systems.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/AllahNawaz.png", width: 1200, height: 630, alt: "Allah Nawaz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allah Nawaz | Full-Stack MERN Developer",
    description: "Full-Stack MERN Architect building scalable, production-grade web systems.",
    images: ["/images/AllahNawaz.png"],
  },
};

export const viewport = {
  themeColor: "#000319",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#CBACF9] focus:text-[#000319] focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Loader />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
