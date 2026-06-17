import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

describe('extractEmails', () => {
  it('returns email strings from member objects', () => {
    const members = [
      { email: 'a@example.com' },
      { email: 'b@example.com' },
    ];
    assert.deepEqual(extractEmails(members), ['a@example.com', 'b@example.com']);
  });

  it('returns an empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails(undefined), []);
  });
});

describe('isValidEmail', () => {
  it('accepts valid email addresses', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('user.name+tag@example.co.uk'), true);
  });

  it('rejects invalid email addresses', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail('missing@domain'), false);
    assert.equal(isValidEmail(null), false);
  });
});

describe('getValidEmails', () => {
  it('returns only valid emails from members', () => {
    const members = [
      { email: 'good@example.com' },
      { email: 'bad-email' },
      { email: 'also-good@example.org' },
      { email: null },
    ];
    assert.deepEqual(getValidEmails(members), [
      'good@example.com',
      'also-good@example.org',
    ]);
  });

  it('returns an empty array for non-array input', () => {
    assert.deepEqual(getValidEmails('invalid'), []);
  });
});
