import { Commentaire } from "./commentaire";
import { Genre } from "./Genre";

export class Jeux
{
  id: number;
  nom: string;
  description: string;
  couverture: string;
  prix: number;
  genre_id: Genre;
  commentaire_id: Commentaire;
}