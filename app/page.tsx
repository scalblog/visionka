// import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroParallaxDemo } from "@/components/hero-parallax";
import Map from "@/components/map";
import { AnimatedTestimonialsComponent } from "@/components/model";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import { TextHover } from "@/components/text-hover";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <HeroParallaxDemo />
      <AnimatedTestimonialsComponent />
      <Testimonial />
      <Services/>
      <Map />
      {/* <Footer /> */}
      <TextHover />
    </ThemeProvider>
  );
}
