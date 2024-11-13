import { WordsLibrary } from "../../types";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import { FooterInput } from "./FooterInput/FooterInput";
import { FooterNav } from "./FooterNav/FooterNav";
import { FooterSmallText } from "./FooterSmallText/FooterSmallText";

export const Footer = ({ footer }: { footer: WordsLibrary["footer"] }) => {
  return (
    <footer
      className="container mx-auto 2xl:mt-[73px] xl:mt-16 lg:pt-14 pt-10 mb-24"
      id="footer"
    >
      <div className="bg-footerGray p-6 text-white rounded-3xl md:block hidden">
        <div className="flex justify-between">
          <FooterNav data={footer.nav} />
          <FooterContacts data={footer.contactsTitle} />
          <FooterInput data={footer.rightBlock} />
        </div>
        <FooterSmallText data={footer.smallText} />
      </div>
      <div className="bg-footerGray p-6 text-white rounded-3xl md:hidden block">
        <div className="flex justify-center flex-wrap">
          <div className="flex w-full justify-between">
            <FooterNav data={footer.nav} />
            <FooterContacts data={footer.contactsTitle} />
          </div>
          <FooterInput data={footer.rightBlock} />
        </div>
        <FooterSmallText data={footer.smallText} />
      </div>
    </footer>
  );
};
