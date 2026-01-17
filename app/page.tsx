import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AnimatedTestimonialsComponent } from "@/components/model";
import Testimonial from "@/components/testimonial";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <AnimatedTestimonialsComponent />
      <Testimonial />
      <Footer />
    </ThemeProvider>
  );
}
