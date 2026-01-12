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
    description:
      "Description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 ",
    category: "Category",
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
    name: "Spark",
    description:
      "Description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 description 2 ",
    category: "category 2",
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
    name: "Virtual Fishing",
    description:
      "Description 3 description 3 description 3 description 3 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 ",
    category: "category 3",
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
  4: {
    id: 4,
    name: "Pulson",
    description:
      "Description 3 description 3 description 3 description 3 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 ",
    category: "category 3",
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
  5: {
    id: 5,
    name: "Tresor",
    description:
      "Description 3 description 3 description 3 description 3 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 ",
    category: "category 3",
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
  6: {
    id: 6,
    name: "SOS-band",
    description:
      "Description 3 description 3 description 3 description 3 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 description 2 description 2 description 2 description 2 description 3 ",
    category: "category 3",
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
