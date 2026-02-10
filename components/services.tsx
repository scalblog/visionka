"use client"

import { Eye, Glasses, Heart } from "lucide-react"
import React from "react"
import { motion, stagger } from "framer-motion"
import { Button } from "./ui/button"

interface Services {
    id: number
    icon: React.ReactNode
    title: string
    description: string
    color: string
}

const dataServices:Services[] = [{
    id: 0,
    icon: <Eye className="w-8 h-8"/>,
    title: "Test de vue",
    description: "Venez tester votre vision dans notre boutique",
    color: "from-blue-500 to-cyan-500"
},
{
    id: 1,
    icon: <Glasses className="w-8 h-8"/>,
    title: "Remplacez vos verres",
    description: "Venez trouver les verres adaptésà votre vue",
    color: "from-purple-500 to-pink-500"
},
{
    id: 2,
    icon: <Heart className="w-8 h-8"/>,
    title: "Support Client",
    description: "Nous sommes attentifs à votre satisfaction",
    color: "from-orange-500 to-red-500"
},
]

export default function Services() {
    const divVariant = {
        hidden: {
            opacity: 0
        },
        visible : {
            opacity : 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}} className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                    Nos services
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                    Nous avons à coeur votre satisfaction 
                </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={divVariant} viewport={{once: true}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {dataServices.map((service) => (
                    <motion.div key={service.id} className="group relative" whileHover={{y: -8, transition: {duration: 0.2}}}>
                        <div className="pascal-glass relative h-full overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-300">
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opactiy duration-300`}/>
                            <motion.div whileHover={{scale: 1.1, rotate: -5}} transition={{duration: 0.2}} className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.color} mb-6 text-white`}>
                                {service.icon}
                            </motion.div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 ">{service.description}</p>
                                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-300 `}/>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div className="text-center" initial={{opacity:0, y:20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6, delay: 0.4}} >
                <p className="text-lg text-muted-foreground mb-4">Etes-vous prêt à devenir Membre Premium ?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-foreground text-background hover:bg-foreground/70">Prenez Rendez-vous</Button>
                    <Button size="lg" variant="outline" className="boreder-2 border-foreground text-foreground bg-transparent hover:bg-foreground/10">+ d'infos</Button>
                </div>
            </motion.div>
        </div>
    </section>
    )
}