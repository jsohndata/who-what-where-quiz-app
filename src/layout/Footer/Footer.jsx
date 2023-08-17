const gitHubUrl = "https://github.com/jsohndata/quiz-app-c11";
const getFullYear = new Date().getFullYear();

export default function Footer () {

  return (
    <footer>
      <p>&copy; {getFullYear}
        <br />
        <a href={gitHubUrl} target="_blank" rel="noreferrer">See Code in Github</a>
      </p>

      <p id="mozarts-ghost"><a href="https://notiempo.lol/mozartsghost/15"
        rel="noreferrer"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
    </footer>
  );
};
