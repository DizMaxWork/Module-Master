import { WordsLibrary } from "../../types";
import { MainBlock } from "./MainBlock/MainBlock";
import { PlusesBlock } from "./PlusesBlock/PlusesBlock";

export const Main = ({
  mainBlock,
  plusesBlock,
}: {
  mainBlock: WordsLibrary["mainBlock"];
  plusesBlock: WordsLibrary["plusesBlock"];
}) => {
  return (
    <main>
      <MainBlock mainBlock={mainBlock} />
      <PlusesBlock plusesBlock={plusesBlock} />
    </main>
  );
};
