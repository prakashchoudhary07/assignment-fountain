import config from 'config';
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';

const clientId = config.get('spotify.client_id');
const clientSecret = config.get('spotify.client_secret');

type searchItemParams = {
  q: string;
  type?: string;
  market?: string;
  limit?: number;
  offset?: number;
};

let authToken: {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  expiresAt: number;
};

const getAccessToken = async () => {
  if (
    !authToken?.expiresAt ||
    authToken?.expiresAt < Math.ceil(Date.now() / 1000)
  ) {
    const result = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    });
    const token = await result.json();
    authToken = {
      accessToken: token.access_token,
      tokenType: token.token_type,
      expiresIn: token.expires_in,
      expiresAt: Math.ceil(Date.now() / 1000) + token.expires_in,
    };
  }

  return authToken.accessToken;
};

const searchItems = async ({
  q,
  type = 'track',
  market = 'IN',
  limit = 10,
  offset = 0,
}: searchItemParams) => {
  const accessToken = await getAccessToken();

  const searchQuery = new URLSearchParams({
    q,
    type,
    market,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const result = await fetch(
    SPOTIFY_SEARCH_ENDPOINT + '?' + searchQuery.toString(),
    {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + accessToken },
    }
  );

  if (result.status === 200) {
    return result.json();
  }
  if (result.status === 401 || result.status === 403) {
    throw new Error('authentication failed ' + result.status);
  }
  if (result.status === 429) {
    throw new Error('Too many request made ' + result.status);
  }
  // TODO: handel error
  // 400
  // 401
  // 403
  // 429
};

export { searchItems };
