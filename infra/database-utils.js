import database from "infra/database.js";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

export default cleanDatabase;
