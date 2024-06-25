// import axios, { AxiosResponse } from 'axios';

// interface GoogleAuthOptions {
//   clientId: string;
//   clientSecret: string;
//   redirectUri: string;
//   scopes: string[];
// }

// export async function getAuthorizationUrl(clientId: string, clientSecret: string, redirectUri: string, scopes: string[]): Promise<string> {
//   const oAuth2Client = new OAuth2Client({
//     clientId,
//     clientSecret,
//     redirectUri,
//   });

//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes,
//   });

//   return authUrl;
// }

// export async function getAccessToken(authorizationCode: string): Promise<string | null> {
//   const clientId = process.env.AUTH_GOOGLE_ID;
//   const clientSecret = process.env.GAUTH_GOOGLE_SECRET;
//   const redirectUri = 'YOUR_REDIRECT_URI'; // Remplacez par votre URI de redirection

//   if (!clientId || !clientSecret || !redirectUri) {
//     throw new Error("Missing environment variables for Google OAuth");
//   }

//   const oAuth2Client = new OAuth2Client({
//     clientId,
//     clientSecret,
//     redirectUri,
//   });

//   const { tokens } = await oAuth2Client.getToken(authorizationCode);
//   oAuth2Client.setCredentials(tokens);

//   return tokens.access_token || null;
// }

// interface Message {
//   id: string;
//   threadId: string;
// }

// export async function getMessages(accessToken: string): Promise<Message[] | null> {
//   try {
//     const response: AxiosResponse = await axios.get(
//       "https://www.googleapis.com/gmail/v1/users/me/messages",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const messagesData: Message[] = response.data.messages;
//     return messagesData;
//   } catch (error) {
//     console.error("Error getting messages:", error);
//     return null;
//   }
// }
