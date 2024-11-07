import { WordsLibrary } from "../../types";
import { Inside } from "./Inside/Inside";
import { MainBlock } from "./MainBlock/MainBlock";
import { ModuleAndConfigOptions } from "./ModuleAndConfigOptions/ModuleAndConfigOptions";
import { PlusesBlock } from "./PlusesBlock/PlusesBlock";

export const Main = ({
  mainBlock,
  plusesBlock,
  moduleOptions,
  configBlock,
  isideBlock,
}: {
  mainBlock: WordsLibrary["mainBlock"];
  plusesBlock: WordsLibrary["plusesBlock"];
  moduleOptions: WordsLibrary["moduleOptions"];
  configBlock: WordsLibrary["configurations"];
  isideBlock: WordsLibrary["inside"];
}) => {
  return (
    <main>
      <MainBlock mainBlock={mainBlock} />
      <PlusesBlock plusesBlock={plusesBlock} />
      <ModuleAndConfigOptions options={moduleOptions} type="moduleOptions" />
      <ModuleAndConfigOptions options={configBlock} type="configBlock" />
      <Inside data={isideBlock} />
    </main>
  );
};
