export type ProjectSectionType = "preview" | "content" | "footer" | "form";

export type ProjectSection = {
  id: number;
  type: ProjectSectionType;
  isActive: boolean;
  headerTKey: string;
  subheaderTKey: string;
  descriptionTKey: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  category: string;
  sections: ProjectSection[];
};
