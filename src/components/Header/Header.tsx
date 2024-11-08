import { HeaderBtn } from "./HeaderBtn";

export const Header = ({
  nav,
  defaultValue,
}: {
  nav: string[];
  defaultValue: string;
}) => {
  return (
    <header className="container mx-auto bg-white rounded-3xl px-6 mt-4 py-4">
      <div className="flex justify-between items-center">
        <div>
          <img src="logo.svg" alt="Лого" />
        </div>
        <nav className="flex -mx-3">
          {nav.map((item, index) => (
            <div key={index} className="px-3">
              {item}
            </div>
          ))}
        </nav>
        <div className="flex items-center">
          <a href="tel:+37122057799" className="mr-6 font-bold text-lg">
            +371 220 57 799
          </a>
          <HeaderBtn defaultValue={defaultValue} />
        </div>
      </div>
    </header>
  );
};
