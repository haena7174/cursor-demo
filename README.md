# cursor-demo

RFC 5322·RFC 3696 기반 이메일 검증 모듈과 Cursor 개발 워크플로우 도구를 제공하는 데모 프로젝트입니다.

## 시작하기

```bash
npm test
```

## 릴리스 노트

### v1.0.0

**이메일 검증 모듈과 Cursor 개발 워크플로우 도구를 갖춘 첫 정식 릴리스입니다.**

#### ✨ 기능

- RFC 5322·RFC 3696 기준 이메일 검증 (`isValidEmail`) — 외부 npm 패키지 없이 동작
- 사용자 목록에서 이메일 추출·필터링·중복 제거 (`extractEmails`, `getValidEmails`, `uniqueValidEmails`)
- 로그인 시 이메일 형식 검증 (`login`)
- Node.js 내장 테스트 러너 기반 테스트 6건 — `npm test`로 실행
- PR 준비 슬래시 커맨드 `/prep-pr` — 테스트 실행, 변경 요약, 커밋 메시지·리뷰 포인트 제안
- 릴리스 노트 작성 스킬 및 커밋 수집 스크립트 (`collect_commits.sh`)

#### 🐛 버그 수정

- (해당 없음)

#### 🧹 기타

- ES Module(`"type": "module"`) 프로젝트 구성 및 테스트 스크립트 설정
- `docs/validator.md` AI 리팩터링·코드 리뷰 기준 문서 추가
- Cursor 코딩 규칙(`coding-style`) 및 validator-spec 스킬 추가

## 프로젝트 구조

| 경로 | 설명 |
|------|------|
| `src/validator.js` | 이메일 형식 검증 (`isValidEmail`) |
| `src/email.js` | 이메일 추출·필터링·중복 제거 |
| `src/auth.js` | 로그인 이메일 검증 |
| `docs/validator.md` | 검증 모듈 스펙 문서 |
| `.cursor/commands/prep-pr.md` | PR 준비 슬래시 커맨드 |
| `.cursor/skills/release-notes/` | 릴리스 노트 작성 스킬 |
