import { IToken } from '../../entity/token';

export interface ITokenRepository {
    createToken(token:any):Promise<IToken>;
    findTokenByUserId(userId:number):Promise<IToken | undefined>;
}
