import config from 'config';
import jwt from 'jsonwebtoken';
import UserDb from '../service/userDb';

interface jwtPayload {
  userId: number;
}

interface GoogleOAuthJson {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
  hd: string;
}

// const PRIVATE_KEY: any = config.get('userAccessToken.privateKey');
const SECRET_KEY = 'CHANGE_THIS_TO_PRIVATE_KEY'; // TODO: fix this to public private key auth
const userDb = UserDb.getInstance();
/**
 * Generates the JWT
 *
 * @param payload {Object} - Payload to be added in the JWT
 * @return {String} - Generated JWT
 */
const generateAuthToken = (payload: jwtPayload): string => {
  // TODO: fix key error
  // return jwt.sign(payload, PRIVATE_KEY, {
  //   algorithm: 'RS256',
  //   expiresIn: config.get('userAccessToken.ttl'),
  // });
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: config.get('userAccessToken.ttl'),
  });
};

/**
 * Verifies if the JWT is valid. Throws error in case of signature error or expiry
 *
 * @param token {String} - JWT to be verified
 * @return {Object} - Decode value of JWT
 */
const verifyAuthToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};

/**
 * Decodes the JWT. This is irrespective of the signature error or expiry
 *
 * @param token {String} - JWT to be decoded
 * @return {Object} - Decode value of JWT
 */
const decodeAuthToken = (token: string): any => {
  return jwt.decode(token);
};

/**
 * Login or signUp with Google
 * @param googleProfile{Object} : Google profile response from Google OAuth2.0
 */
const loginOrSignupWithGoogle = async (
  googleProfile: GoogleOAuthJson
): Promise<any> => {
  try {
    const user = userDb.checkUser(googleProfile.sub);
    if (!user) {
      userDb.setUser(googleProfile.sub, googleProfile);
    }

    return userDb.getUser(googleProfile.sub);
  } catch (err: any) {
    console.error('loginOrSignupWithGoogle:: Error in authenticating user', {
      err,
    });

    throw new Error('');
  }
};

export {
  generateAuthToken,
  verifyAuthToken,
  decodeAuthToken,
  loginOrSignupWithGoogle,
};
