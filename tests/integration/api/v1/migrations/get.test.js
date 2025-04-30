import cleanDatabase from "infra/database-utils.js";

beforeAll(cleanDatabase);

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody[0].length).toBeGreaterThan(0);
});
