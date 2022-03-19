import { getManager } from 'typeorm';
import { IToken, Token } from '../../entity/token';

class TokenRepository {
    public async createToken(token:any):Promise<IToken> {
        return getManager().getRepository(Token).save(token);
    }

    public async findTokenByUserId(userId:number):Promise<IToken | undefined> {
        return getManager().getRepository(Token).findOne({ userId });
    }

    public async deleteByParams(params:Partial<IToken>) {
        return getManager().getRepository(Token).delete(params);
    }
}

export const tokenRepository = new TokenRepository();
