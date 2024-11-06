import { useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { wordsLibrary } from "./wordsLibrary";
import { Main } from "./components/Main/Main";

function App() {
  const language = useSelector(
    (state: { language: { language: "RU" | "EN" } }) => state.language.language
  );

  return (
    <>
      {wordsLibrary.map((library) => {
        const data = library[language];
        return data ? (
          <>
            <Header nav={data.nav} defaultValue={data.navSelectLanguages} />
            <Main mainBlock={data.mainBlock} plusesBlock={data.plusesBlock} />
          </>
        ) : null;
      })}
    </>
  );
}

export default App;

