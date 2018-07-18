const { Exception } = require('../index');

class UserSigningInException extends Exception {
  constructor(cause = null) {
    super(cause);
    this.code = 'ACCOUNT_SIGN_IN';
    this.message = 'User sign in error';
  }
}

class InvalidUserPasswordException extends Exception {
  constructor(cause) {
    super(cause);
    this.code = 'INVALID_PASSWORD';
    this.message = 'Invalid user password';
  }
}

function validateUserPassword() {
  const a = undefined;
  a.b = '';
  throw new InvalidUserPasswordException();
}

function userSignIn() {
  try {
    validateUserPassword();
  } catch (exc) {
    throw new UserSigningInException(exc);
  }
}

function processUserSignInService() {
  try {
    return userSignIn();
  } catch (exc) {
    console.log(exc);
    console.log(exc.getCause());
    console.log(exc.fetchPropertyStacks('message'));
  }
  return 'Nothing';
}

processUserSignInService();
