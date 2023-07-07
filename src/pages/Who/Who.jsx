import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import AppLayout from "../../layout/AppLayout";
import QuizApp from "../../components/QuizApp";

import ParticlesOptions from '../../data/bubble.json';
import movieData from "../../data/who.json";


export default function Who() {
  const particlesInit = useCallback(
    main => {loadFull(main)}, []
  );

  return(
    <AppLayout>
       <Particles
          options={ParticlesOptions}
          init={particlesInit} />

      <h2>Who The...?</h2>
      <QuizApp 
        quizTitle="Guess The Movie"
        data={movieData} />
    </AppLayout>
  );
};
