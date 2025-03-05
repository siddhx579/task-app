"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 100, density: { enable: true, area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.9, random: true },
                    size: { value: { min: 1, max: 4 }, random: true },
                    move: { enable: true, speed: 2, direction: "none", random: true },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                    modes: { repulse: { distance: 80, duration: 0.4 } },
                },
            }}
        />
    );
}