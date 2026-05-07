import { ValuePillarsSectionCard } from "./card";
import { ValuePillarsSectionCards } from "./cards";
import { ValuePillarsSectionGrid } from "./grid";
import { ValuePillarsSectionIntro } from "./intro";
import { ValuePillarsSectionRoot } from "./root";

export const ValuePillarsSection = Object.assign(ValuePillarsSectionRoot, {
  Intro: ValuePillarsSectionIntro,
  Grid: ValuePillarsSectionGrid,
  Cards: ValuePillarsSectionCards,
  Card: ValuePillarsSectionCard,
});
