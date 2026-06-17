---
name: validator-spec
description: docs/validator.md 스펙에 맞게 이메일 검증 코드를 검토·리팩터링한다. src/validator.js, src/email.js, src/auth.js 수정 시 또는 validator.md, isValidEmail, getValidEmails, uniqueValidEmails, 이메일 검증 스펙 언급 시 사용한다.
---

# Validator 스펙 준수

## 시작

1. [docs/validator.md](../../docs/validator.md)를 읽는다.
2. 대상 파일을 확인한다: `src/validator.js`, `src/email.js`, `src/auth.js`
3. 어긋난 부분만 수정한다 (스펙에 없는 리팩터링은 하지 않는다).

## 모듈 책임

| 파일 | 책임 |
|------|------|
| `src/validator.js` | `isValidEmail` 단일 소스 (RFC 5322 + RFC 3696) |
| `src/email.js` | `extractEmails`, `getValidEmails`, `uniqueValidEmails` |
| `src/auth.js` | `login()` — `validator.js`에서 `isValidEmail` 직접 import |

## 필수 패턴

```js
// email.js
import { isValidEmail } from './validator.js';

export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}
```

```js
// auth.js — email.js를 거치지 않음
import { isValidEmail } from './validator.js';
```

## isValidEmail 검증 순서

1. `typeof email !== 'string'` → `false`
2. `lastIndexOf('@')` ≤ 0 → `false`
3. `@` 위치 > 64 → `false`
4. 전체 길이 > 254 → `false`
5. RFC 5322 정규식 (emailregex.com + IP 옥텟 버그 수정, 플래그 `'i'`)

## 리팩터링 규칙

- `isValidEmail` 로직은 `validator.js`에만 존재
- 외부 npm 패키지 추가 금지
- JSDoc·주석은 한국어
- ES Modules만 사용

## 완료 전 확인

```bash
npm test
```

`src/email.test.js` 6개 테스트가 모두 통과해야 한다.

## 스펙 예시 (회귀 확인용)

| 입력 | 기대 |
|------|------|
| `'alice@example.com'` | `true` |
| `'a'.repeat(64) + '@example.com'` | `true` |
| `'a'.repeat(65) + '@example.com'` | `false` |
| `'a'.repeat(243) + '@example.com'` | `false` |
| `null`, `''`, `'invalid-email'` | `false` |
