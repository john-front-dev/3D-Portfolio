import { BallCanvas } from "./canvas";
import SectionsWrapper from "./../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex felx-row flex-wrap justify-center fgap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionsWrapper(Tech, "");
