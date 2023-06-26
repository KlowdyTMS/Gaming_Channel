import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { optionParticle } from "./optionsParticle";

export function Particle() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} options={optionParticle} />
  );
}
