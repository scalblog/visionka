import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsComponent() {
  const testimonials = [
    {
      quote:
        "La mode passe, le style reste.",
      name: "Les plus grandes marques",
      designation: "Gucci, Dior,  Georgio Armani...",
      src: "/glasses_on_shelf_1.png",
    },
    {
      quote:
        "Notre boutique sera heureuse de vous conseiller pour trouver la paire de lunettes de vos rêves.",
      name: "+ de 10 ans de succès",
      designation: "Notre équipe est à votre service",
      src: "/glasses_on_shelf_2.png",
    },
    {
      quote:
        "Verres progressifs, correcteurs, anti-lumière bleue",
      name: "Qualité certifiée",
      designation: "Nous ne travaillons qu'avec des marques de prestige",
      src: "/glasses_on_shelf_3.png",
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
