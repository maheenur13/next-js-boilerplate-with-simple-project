import { atom } from "recoil";
type IProps = {
    id:string,
    title:string,
    excerpt:string,
    body:string
}[];
export const userDataState = atom({
    key: 'dataState',
    default:[] as IProps[],
})