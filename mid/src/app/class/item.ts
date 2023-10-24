import {comment} from './comment';

export class item{
    id!: number;
    description!: String;
    likes!: number;
    comments!: comment[];
}