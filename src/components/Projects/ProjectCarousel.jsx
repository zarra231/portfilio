import React from "react";
import { FlexCarousel } from "../reactbits/FlexCarousel";
import { ProjectCard } from "./ProjectCard";

export function ProjectCarousel({
  projects = [],
  maxRotationDegrees = 14,
  maxDepthPx = 70,
  backgroundBlur = "24px",
  gradientIntensity = 0.45,
  dragSensitivity = 1.1,
  onActiveProjectChange
}) {
  return (
    <div className="w-full relative">
      <FlexCarousel
        items={projects}
        maxRotationDegrees={maxRotationDegrees}
        maxDepthPx={maxDepthPx}
        backgroundBlur={backgroundBlur}
        gradientIntensity={gradientIntensity}
        dragSensitivity={dragSensitivity}
        onActiveChange={(index) => {
          if (onActiveProjectChange && projects[index]) {
            onActiveProjectChange(projects[index]);
          }
        }}
        renderItem={(project, isCenter) => (
          <ProjectCard project={project} isCenter={isCenter} />
        )}
      />
    </div>
  );
}

export default ProjectCarousel;
