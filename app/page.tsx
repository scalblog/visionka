import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <Footer />
    </ThemeProvider>
  );
}
