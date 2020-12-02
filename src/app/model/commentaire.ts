import { Jeux } from './jeux';

export class Commentaire
{
  id: number;
  message: string;
  jeux_id: Jeux;
  evaluation: number;
  date: Date;
}