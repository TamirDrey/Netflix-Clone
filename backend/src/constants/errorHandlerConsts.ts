export const errorsCodes = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const mapCodeToTitle = new Map([
  [errorsCodes.VALIDATION_ERROR, "Validation failed"],
  [errorsCodes.UNAUTHORIZED, "Unauthorized"],
  [errorsCodes.FORBIDDEN, "Forbidden"],
  [errorsCodes.NOT_FOUND, "Not found"],
  [errorsCodes.SERVER_ERROR, "Server Error"],
]);
