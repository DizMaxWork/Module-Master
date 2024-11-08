import { WordsLibrary } from "../../types";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import { FooterInput } from "./FooterInput/FooterInput";
import { FooterNav } from "./FooterNav/FooterNav";
import { FooterSmallText } from "./FooterSmallText/FooterSmallText";

export const Footer = ({ footer }: { footer: WordsLibrary["footer"] }) => {
  return (
    <footer className="container mx-auto mt-[73px] mb-24">
      <div className="bg-footerGray p-6 text-white rounded-3xl">
        <div className="flex justify-between">
          <FooterNav data={footer.nav} />
          <FooterContacts data={footer.contactsTitle} />
          <FooterInput data={footer.rightBlock} />
        </div>
        <FooterSmallText data={footer.smallText} />
      </div>
    </footer>
  );
};
