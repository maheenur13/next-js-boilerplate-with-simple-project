import {articles} from '../../../data';

export default function handler({query: {id }}: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: string; title: string; excerpt: string; body: string; }[] | {message: string;}): void; new(): any; }; }; }){

   const filtered = articles.filter(article => article.id === id);
   if(filtered.length > 0) {
       res.status(200).json(filtered);
   }
   else {
       res
       .status(404)
       .json({message: `Id not found`})
   }
}