import { WordsLibrary } from "../../../types";

export const FooterSmallText = ({
  data,
}: {
  data: WordsLibrary["footer"]["smallText"];
}) => {
  return (
    <div className="pt-20 flex justify-between text-xs">
      <div>{data.privatePolicyTitle}</div>
      <div className="flex -mx-8">
        <div className="px-8 sm:block hidden">{data.paymentDetails}</div>
        <div className="px-8">modulmaster.com ©</div>
      </div>
    </div>
  );
};
