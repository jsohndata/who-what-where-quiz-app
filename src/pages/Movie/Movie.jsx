import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import AppLayout from "../../layout/AppLayout";
import QuizApp from "../../components/QuizApp";

import ParticlesOptions from '../../data/bubble.json';
import movieData from "../../data/movie.json";


export default function Movie() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );

  return(
    <AppLayout>
       <Particles
          options={ParticlesOptions}
          init={particlesInit} />

      <h2>Guess The Movie</h2>
      <QuizApp 
        quizTitle="Guess The Movie"
        data={movieData} />
    </AppLayout>
  );
};
