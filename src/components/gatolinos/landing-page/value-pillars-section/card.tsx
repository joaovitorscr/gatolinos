import {
  HeartPulse,
  MedicalMaskIcon,
  ReloadIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { PillarCard } from "../pillar-card";

type ValuePillarCardIcon = "medical" | "social" | "tnr";

type ValuePillarsSectionCardProps = {
  title: string;
  description: string;
  tintClassName: string;
  icon: ValuePillarCardIcon;
};

function renderIcon(icon: ValuePillarCardIcon) {
  if (icon === "medical") {
    return (
      <AppIcon icon={MedicalMaskIcon} size={32} className="text-primary" />
    );
  }

  if (icon === "social") {
    return <AppIcon icon={HeartPulse} size={32} className="text-secondary" />;
  }

  return (
    <AppIcon
      icon={ReloadIcon}
      size={32}
      className="text-on-tertiary-container"
    />
  );
}

export function ValuePillarsSectionCard({
  title,
  description,
  tintClassName,
  icon,
}: ValuePillarsSectionCardProps) {
  return (
    <PillarCard>
      <PillarCard.Icon tintClassName={tintClassName}>
        {renderIcon(icon)}
      </PillarCard.Icon>
      <PillarCard.Title>{title}</PillarCard.Title>
      <PillarCard.Description>{description}</PillarCard.Description>
    </PillarCard>
  );
}
