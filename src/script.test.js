import { getGreetingMessage } from "./script";

// --- PASSING TEST --- (5 pts)
test("should return the correct greeting message (PASSING)", () => {
  const expected = "Hello — fix the lint error to deploy!";
  expect(getGreetingMessage()).toBe(expected);
});

// --- FAILING TEST (Demonstration) --- (5 pts)
test("should fail because the message is incorrect (FAILING)", () => {
  // Intentional failure for CI/CD demo (change to real expected to pass)
  const incorrectMessage = "Hello — fix the lint error to deploy!";
  expect(getGreetingMessage()).toBe(incorrectMessage);
});

// Additional passing test
test('should confirm the message contains the word "fix" (PASSING)', () => {
  expect(getGreetingMessage()).toContain("fix");
});
