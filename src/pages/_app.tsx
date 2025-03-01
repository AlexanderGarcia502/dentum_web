import "../../public/assets/fonts/unicons/unicons.css";
import "../../public/assets/css/plugins.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/colors/navy.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Manrope } from "next/font/google";
const font = Manrope({
  subsets: ["latin"],
  display: "swap",
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={font.className}
      style={{
        lineHeight: "1.7",
      }}
    >
      <Component {...pageProps} />
    </main>
  );
}
