"use client";
import {motion} from 'framer-motion';
import { Clock12Icon, Clock9Icon, MapPin, PhoneCallIcon, SendIcon } from 'lucide-react';
import SignupFormDemo from './signup-form-demo';

export default function Map() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-background to-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}} className="max-w-7xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                        Où trouver notre boutique ?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                        Situés en plein cœur de la ville, nos opticiens sont à votre disposition pour vous aider à trouver les lunettes parfaites.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    <motion.div id="map" initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.6, delay: 0.2}} className="relative rounded-xl overflow-hidden shadow-lg h-96 lg:h-full min-h-[500px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.705796755582!2d2.3512168756150045!3d48.86101540052286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1b7d8a95c5%3A0x560ae6fa7f9c816c!2sVision%20Ka-Paris!5e0!3m2!1sfr!2sfr!4v1769544272340!5m2!1sfr!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                    <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.6, delay: 0.2}} className="flex flex-col justify-between">
                        <div className="space-y-4 mb-8">
                            <motion.div className='pascal-glass p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow'>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                                            <MapPin className='h-6 w-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold mb-1'>Notre adresse</h3>
                                        <p className='text-muted-foreground'>35 rue Rambuteau, Paris 3ème, France</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className='pascal-glass  p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow'>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                                            <PhoneCallIcon className='h-6 w-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold mb-1'>Appelez-nous</h3>
                                        <a href="tel:+33142334455" className='text-muted-foreground'>+33(0)1.42.33.44.55</a>
                                    </div>
                                </div>
                            </motion.div><motion.div className='pascal-glass  p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow'>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                                            <SendIcon className='h-6 w-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold mb-1'>Notre Email</h3>
                                        <a href="mailto:contact@visiion-ka.com" className='text-muted-foreground'>contact@visiion-ka.com</a>
                                    </div>
                                </div>
                            </motion.div><motion.div className='pascal-glass p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow'>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                                            <Clock9Icon className='h-6 w-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold mb-1'>Nos horaires</h3>
                                        <p className='text-muted-foreground'>du Mardi au Samedi 10h à 19h</p>
                                    </div>
                                </div>
                            </motion.div>
                            <SignupFormDemo />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}