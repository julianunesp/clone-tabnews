import cleanDatabase from "infra/database-utils.js";

beforeAll(cleanDatabase);

test("DELETE to /api/v1/migrations should return 405", async () => {
  const response_delete = await fetch(
    "http://localhost:3000/api/v1/migrations",
    {
      method: "DELETE",
    },
  );
  expect(response_delete.status).toBe(405);
});

test("PUT to /api/v1/migrations should return 405", async () => {
  const response_put = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PUT",
  });
  expect(response_put.status).toBe(405);
});

test("PATCH to /api/v1/migrations should return 405", async () => {
  const response_patch = await fetch(
    "http://localhost:3000/api/v1/migrations",
    {
      method: "PATCH",
    },
  );
  expect(response_patch.status).toBe(405);
});
