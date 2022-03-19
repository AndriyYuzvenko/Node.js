import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { IToken } from '../entity/token';
import { tokenRepository } from '../repositories/token/tokenRepository';
import { IUserPayload } from '../interfaces/token.interfaces';

class TokenService {
    public async generateTokenPair(payload:any)
        :Promise<{accessToken:string, refreshToken:string}> {
        const accessToken = jwt.sign(payload, config.SECRET_ACCESS_KEY as string, { expiresIn: '1d' });
        const refreshToken = jwt.sign(payload, config.SECRET_REFRESH_KEY as string, { expiresIn: '1d' });

        return {
            accessToken,
            refreshToken,
        };
    }

    public async saveToken(userId:number, refreshToken:string):Promise<IToken> {
        const tokenFromDb = await tokenRepository.findTokenByUserId(userId);

        if (tokenFromDb) {
            tokenFromDb.refreshToken = refreshToken;
            return tokenRepository.createToken(tokenFromDb);
        }

        const token = await tokenRepository.createToken({ refreshToken, userId });
        return token;
    }

    verifyToken(token: string, tokenType = 'access'): IUserPayload {
        let secretWord = config.SECRET_ACCESS_KEY;

        if (tokenType === 'refresh') {
            secretWord = config.SECRET_REFRESH_KEY;
        }

        return jwt.verify(token, secretWord as string) as IUserPayload;
    }

    async deleteTokenPair(userId: number) {
        return tokenRepository.deleteByParams({ userId });
    }
}

export const tokenService = new TokenService();
