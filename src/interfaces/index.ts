interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

declare type IconType = (props: IconBaseProps) => JSX.Element;

export interface LinkButtonProps {
  link: string;
  icon: IconType;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface MenuLanguageProps {
  children: React.ReactNode;
  language: string;
  navbar: boolean;
}

export interface SideBarProps {
  openMenu: boolean;
  handleOpen: () => void;
}

export interface InterestsProps {
  icon: IconType;
  title: string;
}

export type Project = {
  img: string;
  title: string;
  description: string;
  tech: string;
  link: string;
};

export interface ProyectProps {
  project: Project;
  index: number;
}

export type Experience = {
  years: string;
  title: string;
  description: string;
  name?: string;
};

export interface ExperienceProps {
  type: string;
  items?: Experience[];
}

export interface TechnicalSkillProps {
  outline: string;
  bgHover: string;
  textColor: string;
  text: string;
  icon: IconType;
}
