import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/theme-toggle";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
