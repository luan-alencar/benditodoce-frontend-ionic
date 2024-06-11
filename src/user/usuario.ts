import { User } from './user';

export class Usuario implements User {
    roles: string[];
    name: string;
}