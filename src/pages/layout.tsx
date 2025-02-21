import localFont from "next/font/local";
import Head from "next/head";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Dentum</title>
        <meta
          name="description"
          content="Clínica dental especializada en Chimaltenango y Sacatepéquez. Ofrecemos servicios de ortodoncia, odontología estética, preventiva y general. Atención profesional y tecnología avanzada para tu mejor sonrisa."
        />
      </Head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
