import { WordsLibrary } from "../../types";
import { Inside } from "./Inside/Inside";
import { MainBlock } from "./MainBlock/MainBlock";
import { ModuleAndConfigOptions } from "./ModuleAndConfigOptions/ModuleAndConfigOptions";
import { OurWorks } from "./OurWorks/OurWorks";
import { PlusesBlock } from "./PlusesBlock/PlusesBlock";
import { SliderIMG } from "../Slider";
import { Form } from "./Form/Form";

export const Main = ({
  mainBlock,
  plusesBlock,
  moduleOptions,
  configBlock,
  isideBlock,
  ourWorks,
  form,
}: {
  mainBlock: WordsLibrary["mainBlock"];
  plusesBlock: WordsLibrary["plusesBlock"];
  moduleOptions: WordsLibrary["moduleOptions"];
  configBlock: WordsLibrary["configurations"];
  isideBlock: WordsLibrary["inside"];
  ourWorks: WordsLibrary["ourWorks"];
  form: WordsLibrary["form"];
}) => {
  return (
    <main>
      <MainBlock mainBlock={mainBlock} data={form} />
      <PlusesBlock plusesBlock={plusesBlock} />
      <ModuleAndConfigOptions options={moduleOptions} type="moduleOptions" />
      <ModuleAndConfigOptions options={configBlock} type="configBlock" />
      <Inside data={isideBlock} />
      <Form data={form} />
      <OurWorks data={ourWorks} />
      <SliderIMG data={ourWorks} />
    </main>
  );
};
