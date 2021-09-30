import { articles } from '../../../data';

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: string; title: string; excerpt: string; body: string; }[]): void; new(): any; }; }; }){
    res.status(200).json(articles);
}