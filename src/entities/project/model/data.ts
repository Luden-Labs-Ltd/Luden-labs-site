import type { Project } from "./type";

export const projectsNamesData = [
  { id: 1, name: "Enola" },
  { id: 2, name: "Survey" },
  { id: 3, name: "Cards" },
];

export const projectsData: Record<number, Project> = {
  1: {
    id: 1,
    name: "Enola",
    description: "Description 1",
    sections: [
      {
        id: 1,
        type: "preview",
        isActive: true,
        headerTKey: "enola-preview-header",
        subheaderTKey: "enola-preview-subheader",
        descriptionTKey: "enola-preview-description",
      },
    ],
  },
  2: {
    id: 2,
    name: "Survey",
    description: "Description 2",
    sections: [
      {
        id: 1,
        type: "preview",
        isActive: true,
        headerTKey: "survey-preview-header",
        subheaderTKey: "survey-preview-subheader",
        descriptionTKey: "survey-preview-description",
      },
    ],
  },
  3: {
    id: 3,
    name: "Cards",
    description: "Description 3",
    sections: [
      {
        id: 1,
        type: "preview",
        isActive: true,
        headerTKey: "cards-preview-header",
        subheaderTKey: "cards-preview-subheader",
        descriptionTKey: "cards-preview-description",
      },
    ],
  },
};
