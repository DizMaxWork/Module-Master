import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/languageSlice";

export const HeaderBtn = ({ defaultValue }: { defaultValue: string }) => {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: { language: { language: "RU" | "EN" } }) => state.language.language
  );
  return (
    <div className="-mx-2">
      <span className="pr-2">{language}</span>
      <select
        name="language"
        onChange={(e) => dispatch(setLanguage(e.target.value))}
        value={defaultValue}
        className="cursor-pointer bg-darkGrey text-white px-2 py-0.5 rounded-2xl appearance-none"
      >
        <option value={defaultValue} disabled>
          {defaultValue}
        </option>
        <option value="RU">Russia</option>
        <option value="EN">English</option>
      </select>
    </div>
  );
};
