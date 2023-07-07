import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import AppLayout from "../../layout/AppLayout";
import QuizApp from "../../components/QuizApp";

import ParticlesOptions from '../../data/parallax.json';
import movieData from "../../data/quiz-travel.json";


export default function Quiz() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );

  return(
    <AppLayout>
       <Particles
          options={ParticlesOptions}
          init={particlesInit} />

      <h2>Where The...?</h2>
      <QuizApp 
        quizTitle="Guess The Travel"
        data={movieData} />
    </AppLayout>
  );
};
