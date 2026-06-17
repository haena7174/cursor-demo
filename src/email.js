import { isValidEmail } from './validator.js';

export { isValidEmail };

/**
 * 사용자 배열에서 email 필드를 추출한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 객체 배열
 * @returns {unknown[]} 추출된 email 값 배열
 */
export function extractEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.map((user) => user.email);
}

/**
 * 유효한 이메일만 필터링하여 반환한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 문자열 배열
 */
export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}

/**
 * 유효한 이메일 중 중복을 제거하여 반환한다.
 * @param {Array<{ email?: unknown }>} users - 사용자 객체 배열
 * @returns {string[]} 중복 제거된 유효 이메일 배열
 */
export function uniqueValidEmails(users) {
  return [...new Set(getValidEmails(users))];
}
