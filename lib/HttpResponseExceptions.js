/* eslint-disable no-unused-vars */
const Exception = require('./Exception');
const HttpStatus = require('./HttpStatus');

/**
 * HTTP 4xx
 */
class BadRequestException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.BAD_REQUEST];
    this.httpStatus = HttpStatus.BAD_REQUEST;
    this.code = HttpStatus.BAD_REQUEST;
  }
}
class UnauthorizedException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.UNAUTHORIZED];
    this.httpStatus = HttpStatus.UNAUTHORIZED;
    this.code = HttpStatus.UNAUTHORIZED;
  }
}
class PaymentRequiredException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.PAYMENT_REQUIRED];
    this.httpStatus = HttpStatus.PAYMENT_REQUIRED;
    this.code = HttpStatus.PAYMENT_REQUIRED;
  }
}
class ForbiddenException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.FORBIDDEN];
    this.httpStatus = HttpStatus.FORBIDDEN;
    this.code = HttpStatus.FORBIDDEN;
  }
}
class NotFoundException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.NOT_FOUND];
    this.httpStatus = HttpStatus.NOT_FOUND;
    this.code = HttpStatus.NOT_FOUND;
  }
}
class MethodNotAllowedException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.METHOD_NOT_ALLOWED];
    this.httpStatus = HttpStatus.METHOD_NOT_ALLOWED;
    this.code = HttpStatus.METHOD_NOT_ALLOWED;
  }
}

class NotAcceptableException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.NOT_ACCEPTABLE];
    this.httpStatus = HttpStatus.NOT_ACCEPTABLE;
    this.code = HttpStatus.NOT_ACCEPTABLE;
  }
}
class ProxyAuthenticationRequiredException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.PROXY_AUTHENTICATION_REQUIRED];
    this.httpStatus = HttpStatus.PROXY_AUTHENTICATION_REQUIRED;
    this.code = HttpStatus.PROXY_AUTHENTICATION_REQUIRED;
  }
}
class RequestTimeoutException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.REQUEST_TIMEOUT];
    this.httpStatus = HttpStatus.REQUEST_TIMEOUT;
    this.code = HttpStatus.REQUEST_TIMEOUT;
  }
}
class ConflictException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.CONFLICT];
    this.httpStatus = HttpStatus.CONFLICT;
    this.code = HttpStatus.CONFLICT;
  }
}
class GoneException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.GONE];
    this.httpStatus = HttpStatus.GONE;
    this.code = HttpStatus.GONE;
  }
}
class LengthRequiredException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.LENGTH_REQUIRED];
    this.httpStatus = HttpStatus.LENGTH_REQUIRED;
    this.code = HttpStatus.LENGTH_REQUIRED;
  }
}
class PreconditionFailedException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.PRECONDITION_FAILED];
    this.httpStatus = HttpStatus.PRECONDITION_FAILED;
    this.code = HttpStatus.PRECONDITION_FAILED;
  }
}
class RequestEntityTooLargeException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.REQUEST_ENTITY_TOO_LARGE];
    this.httpStatus = HttpStatus.REQUEST_ENTITY_TOO_LARGE;
    this.code = HttpStatus.REQUEST_ENTITY_TOO_LARGE;
  }
}
class RequestUriTooLongException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.REQUEST_URI_TOO_LONG];
    this.httpStatus = HttpStatus.REQUEST_URI_TOO_LONG;
    this.code = HttpStatus.REQUEST_URI_TOO_LONG;
  }
}
class UnsupportedMediaTypeException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.UNSUPPORTED_MEDIA_TYPE];
    this.httpStatus = HttpStatus.UNSUPPORTED_MEDIA_TYPE;
    this.code = HttpStatus.UNSUPPORTED_MEDIA_TYPE;
  }
}
class RequestedRangeNotSatisfiableException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE];
    this.httpStatus = HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE;
    this.code = HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE;
  }
}
class ExceptionFailedException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.EXPECTATION_FAILED];
    this.httpStatus = HttpStatus.EXPECTATION_FAILED;
    this.code = HttpStatus.EXPECTATION_FAILED;
  }
}
class ImATeapotException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.IM_A_TEAPOT];
    this.httpStatus = HttpStatus.IM_A_TEAPOT;
    this.code = HttpStatus.IM_A_TEAPOT;
  }
}
class MisdirectedRequestException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.MISDIRECTED_REQUEST];
    this.httpStatus = HttpStatus.MISDIRECTED_REQUEST;
    this.code = HttpStatus.MISDIRECTED_REQUEST;
  }
}
class UnprocessableEntityException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.UNPROCESSABLE_ENTITY];
    this.httpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
    this.code = HttpStatus.UNPROCESSABLE_ENTITY;
  }
}
class UpgradeRequiredException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.UPGRADE_REQUIRED];
    this.httpStatus = HttpStatus.UPGRADE_REQUIRED;
    this.code = HttpStatus.UPGRADE_REQUIRED;
  }
}
class PreconditionRequiredException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.PRECONDITION_REQUIRED];
    this.httpStatus = HttpStatus.PRECONDITION_REQUIRED;
    this.code = HttpStatus.PRECONDITION_REQUIRED;
  }
}
class LockedException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.LOCKED];
    this.httpStatus = HttpStatus.LOCKED;
    this.code = HttpStatus.LOCKED;
  }
}
class FailedDependencyException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.FAILED_DEPENDENCY];
    this.httpStatus = HttpStatus.FAILED_DEPENDENCY;
    this.code = HttpStatus.FAILED_DEPENDENCY;
  }
}
class TooManyRequestsException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.TOO_MANY_REQUESTS];
    this.httpStatus = HttpStatus.TOO_MANY_REQUESTS;
    this.code = HttpStatus.TOO_MANY_REQUESTS;
  }
}
class RequestHeaderFieldsTooLargeException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE];
    this.httpStatus = HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE;
    this.code = HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE;
  }
}
class UnvailableForLegalReasonsException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS];
    this.httpStatus = HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS;
    this.code = HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS;
  }
}

/**
 * HTTP 5xx
 */

class InternalServerErrorException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR];
    this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    this.code = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
class NotImplementedException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.NOT_IMPLEMENTED];
    this.httpStatus = HttpStatus.NOT_IMPLEMENTED;
    this.code = HttpStatus.NOT_IMPLEMENTED;
  }
}
class ServiceUnavailableException extends Exception {
  constructor(...args) {
    super(...args);
    this.message = HttpStatus[HttpStatus.SERVICE_UNAVAILABLE];
    this.httpStatus = HttpStatus.SERVICE_UNAVAILABLE;
    this.code = HttpStatus.SERVICE_UNAVAILABLE;
  }
}

module.exports = {
  BadRequestException,
  UnauthorizedException,
  PaymentRequiredException,
  ForbiddenException,
  NotFoundException,
  MethodNotAllowedException,
  NotAcceptableException,
  ConflictException,
  GoneException,
  PreconditionFailedException,
  RequestEntityTooLargeException,
  InternalServerErrorException,
  NotImplementedException,
  ServiceUnavailableException,
};
