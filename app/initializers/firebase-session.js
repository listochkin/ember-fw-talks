import Base from 'simple-auth/authenticators/base';

const FirebaseAuthenticator = Base.extend({
  authenticate () {
    return Promise.resolve();
  }
});

export function initialize( container, application ) {
  application.register('authenticator:firebase', FirebaseAuthenticator);
}

export default {
  name: 'firebase-session',
  initialize: initialize
};
