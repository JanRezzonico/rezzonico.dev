import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../Reusables/Card";
import { CardTitle } from "../Reusables/CardTitle";

type Props = {
  title: string;
  icon: IconDefinition;
  children: React.ReactNode;
};

export const SkillCard = ({ title, icon, children }: Props) => {
  return (
    <Card className="w-full max-w-sm">
      <div className="card-body gap-3 p-6">
        <FontAwesomeIcon icon={icon} className="h-10 w-10 p-2 text-primary" />
        <CardTitle>{title}</CardTitle>
        <div className="text-sm leading-relaxed text-base-content/80">
          {children}
        </div>
      </div>
    </Card>
  );
};
