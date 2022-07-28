import { IComment } from "@/types/IComment";

export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: IComment[];
}