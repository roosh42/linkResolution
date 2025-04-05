import * as functions from 'firebase-functions';
import { getRandomCharacter } from './utils/randomCharacter';

export const randomCharacter = functions.https.onRequest((request, response) => {
    const character = getRandomCharacter();
    response.send(character);
});