import AppLayout from "../layout/AppLayout";
import QuizApp from "../components/QuizApp";
import movieData from "../data/movie.json";
export default function Quiz() {

  return(
    <AppLayout>
      <QuizApp data={movieData} />
    </AppLayout>
  );
};
