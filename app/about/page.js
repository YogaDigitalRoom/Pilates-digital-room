"use client"

import { animate, inView } from 'motion';
import { useEffect, useRef } from 'react';
import Banner from "@/components/banner";

const About = () => {
    const h1Ref = useRef(null);
    const h3Refs = useRef([]);
    const pRefs = useRef([]);
    const liRefs = useRef([]);

    useEffect(() => {
        if (h1Ref.current) {
            animate(h1Ref.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 });
        }
        h3Refs.current.forEach((h3, i) => {
            if (h3) {
                inView(h3, () => {
                    animate(h3, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: i * 0.2 });
                });
            }
        });
        [...pRefs.current, ...liRefs.current].forEach((el, i) => {
            if (el) {
                inView(el, () => {
                    animate(el, { opacity: [0, 1], y: [10, 0] }, { duration: 0.8, delay: i * 0.1 });
                });
            }
        });
    }, []);

    return (
        <>
            <Banner title="Sobre mí" imageSrc="/about.jpg" />
            <main className="p-5 md:p-10 leading-relaxed font-sans">
                <h1 ref={h1Ref} className="text-center text-4xl md:text-6xl font-bold mb-6">Sobre mí</h1>
                
                <h3 ref={el => h3Refs.current[0] = el} className="text-2xl md:text-3xl font-semibold mt-10">La verdad sin adornos</h3>
                <p ref={el => pRefs.current[0] = el}>
                    Si piensas que el pilates es solo una clase tranquila y aburrida, déjame cambiar esa idea. Soy María A. Gambín y te demostraré lo contrario.
                </p>
                <p ref={el => pRefs.current[1] = el}>
                    En 2012, pensé que pilates era solo para relajarse. Pero una lesión me hizo verlo de otra manera: pilates no era solo "zen", era un reto para moverme bien.
                </p>
                
                <h3 ref={el => h3Refs.current[1] = el} className="text-2xl md:text-3xl font-semibold mt-10">¿Por qué pilates? Porque funciona</h3>
                <p ref={el => pRefs.current[2] = el}>
                    Pilates es un método basado en la biomecánica del cuerpo, adaptable a todo tipo de personas:
                </p>
                <ul className="list-disc pl-6">
                    <li ref={el => liRefs.current[0] = el}>Deportistas que quieren prevenir lesiones.</li>
                    <li ref={el => liRefs.current[1] = el}>Personas que desean moverse con más seguridad y control.</li>
                    <li ref={el => liRefs.current[2] = el}>Quienes sufren de dolores de espalda y buscan una solución real.</li>
                </ul>
                <p ref={el => pRefs.current[3] = el}>No es fácil, pero vale la pena. Pilates no es solo para unos pocos, es para todos.</p>
                
                <h3 ref={el => h3Refs.current[2] = el} className="text-2xl md:text-3xl font-semibold mt-10">¿Por qué conmigo?</h3>
                <p ref={el => pRefs.current[4] = el}>Con más de 10 años de experiencia en pilates y una historia personal de superación, creeme, se que funciona.</p>
                <blockquote className="border-l-4 border-gray-500 pl-4 italic">
                    “Tienes una propiocepción y un equilibrio brutales. Y unos pies fuertes como una roca.” Eso fue lo nque me dijo mi doctor el dia que descubri'o que sin operacion, seguia moviendome con 4 metatarsos del pie sin recuerar al 100%
                </blockquote>
                <p ref={el => pRefs.current[5] = el}>Mi trabajo es ayudarte a sentir esa misma estabilidad y fuerza en tu cuerpo.</p>
                
                <h3 ref={el => h3Refs.current[3] = el} className="text-2xl md:text-3xl font-semibold mt-10">¿Y tú? ¿Estás listo/a para moverte mejor?</h3>
                <p ref={el => pRefs.current[6] = el}>No importa de dónde vengas, moverte bien no es opcional. Es tu libertad.</p>
                <p ref={el => pRefs.current[7] = el} className="font-bold">¿Empezamos? Explora mis clases y descubre cómo moverte mejor.</p>
            </main>
        </>
    );
}

export default About;