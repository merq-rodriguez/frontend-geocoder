import { Option } from "./option.interface";
import { Code } from './code.interface';

export interface Question{
    id: number;
    name: string;
    score: number;
    option: Array<Option>;
    code?: Code;
    state?: boolean;
}