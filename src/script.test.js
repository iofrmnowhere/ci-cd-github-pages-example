// script.test.js
// You might need to install babel-jest or use a simpler require
// if your setup doesn't support "import" for tests immediately.
// For most modern setups, this should work.
import { getGreetingMessage } from "./script";

// --- PASSING TEST --- (5 pts)
test("should return the correct greeting message (PASSING)", () => {
  const expected = "Hello — fix the lint error to deploy!";
  expect(getGreetingMessage()).toBe(expected);
});

// --- FAILING TEST (Demonstration) --- (5 pts)
test("should fail because the message is incorrect (FAILING)", () => {
  // This test will intentionally fail, demonstrating the Test gate blocks deployment.
  const incorrectMessage = "Goodbye — this message is wrong!";
  expect(getGreetingMessage()).toBe(incorrectMessage); // 🚨 TEST FAILURE HERE
});

// Additional passing test
test('should confirm the message contains the word "fix" (PASSING)', () => {
  expect(getGreetingMessage()).toContain("fix");
});
