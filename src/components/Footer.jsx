import { CodeBy } from "./CodeBy";

const PROFILE_URL = "https://www.linkedin.com/in/brian-rios-5823a2214/";
const DEN_NAME = "Brian Rios";

export function Footer({ itemList }) {
  const alreadyPacked = itemList.reduce(
    (acc, item) => acc + (item.packed ? 1 : 0),
    0
  );

  const packagingPercentage = Math.floor(
    (alreadyPacked / itemList.length) * 100
  );

  return (
    <footer className="footer">
      <p className="footer__stats">
        {alreadyPacked
          ? `Has empacado: ${alreadyPacked} cosas de ${itemList.length} (%${packagingPercentage})`
          : "Empieza a empacar 😁"}
      </p>
      <CodeBy devName={DEN_NAME} url={PROFILE_URL} />
    </footer>
  );
}
