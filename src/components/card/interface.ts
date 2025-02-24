export interface ICard {
  content: string;
}
export interface ITestimonyCard extends ICard {
  name: string;
}

export interface IProfessionalCard {
  name: string;
  description: string;
  img: string;
}
export interface IServiceCard {
  title: string;
  img: string;
  list: string[];
}
