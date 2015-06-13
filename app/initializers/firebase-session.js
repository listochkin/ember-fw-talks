import Base from 'simple-auth/authenticators/base';
import Firebase from 'firebase';
import config from '../config/environment';

const firebase = new Firebase(config.firebase)

const FirebaseAuthenticator = Base.extend({
  authenticate (provider) {
    return new Promise((resolve, reject) => {
      firebase.authWithOAuthPopup(provider, (error, authData) => {
        error ? reject(error) : resolve(authData);
      });
    });
  },
  restore (data) {
    return new Promise((resolve, reject) => {
      data.provider && data[data.provider] ? resolve(data) : reject();
    });
  }
});

export function initialize( container, application ) {
  application.register('authenticator:firebase', FirebaseAuthenticator);
}

export default {
  name: 'firebase-session',
  initialize: initialize
};
