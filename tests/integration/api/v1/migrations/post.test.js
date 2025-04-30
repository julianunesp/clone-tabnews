import cleanDatabase from "infra/database-utils.js";
//import countMigrations from "infra/database-utils.js";
//beforeAll(cleanDatabase, countMigrations);
beforeAll(cleanDatabase);

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();
  expect(Array.isArray(response1Body)).toBe(true);
  expect(response1Body[0].length).toBeGreaterThan(0);

  ///

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);

  const response2Body = await response2.json();
  expect(Array.isArray(response2Body)).toBe(true);
  expect(response2Body[0].length).toBe(0);
});
