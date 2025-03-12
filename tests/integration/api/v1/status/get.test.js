test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  console.log(responseBody);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(typeof responseBody.database.postgres_version).toBe("string");
  expect(typeof responseBody.database.current_connections).toBe("number");
  expect(typeof responseBody.database.max_connections).toBe("number");
});
