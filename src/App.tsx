import { useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { wordsLibrary } from "./wordsLibrary";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const language = useSelector(
    (state: {
      language: {
        language: "RU" | "EN" | "ET" | "DE" | "NL" | "PT" | "ES" | "SV";
      };
    }) => state.language.language
  );
  const data = wordsLibrary[language];
  return (
    <>
      <Header nav={data.nav} defaultValue={data.navSelectLanguages} />
      <Main
        mainBlock={data.mainBlock}
        plusesBlock={data.plusesBlock}
        moduleOptions={data.moduleOptions}
        configBlock={data.configurations}
        isideBlock={data.inside}
        ourWorks={data.ourWorks}
        form={data.form}
      />
      <Footer footer={data.footer} />
    </>
  );
}

export default App;












