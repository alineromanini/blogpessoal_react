import type Tema from "./Tema";
import type Usuario from "./Usuario";

export default interface Postagem{
    
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;      //nao tem ? pq a postagem sempre tera um tema
    usuario: Usuario | null;  //nao tem ? pq a postagem sempre tera um usuario
}