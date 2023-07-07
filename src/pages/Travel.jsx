import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import AppLayout from "../layout/AppLayout";
import QuizApp from "../components/QuizApp";

import ParticlesOptions from '../data/twinkle.json';
import movieData from "../data/movie.json";


export default function Quiz() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );

  return(
    <AppLayout>
       <Particles
          options={ParticlesOptions}
          init={particlesInit} />

      <QuizApp data={movieData} />
    </AppLayout>
  );
};
