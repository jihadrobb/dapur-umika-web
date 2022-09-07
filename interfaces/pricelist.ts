import { IImage } from "./image";

export interface IPricelist {
  id: string;
  name: string;
  image: IImage;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
