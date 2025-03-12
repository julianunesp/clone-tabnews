import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const postgresVersion = (await database.query("SELECT version();")).rows[0]
    .version;

  const postgresCurrentConnections = (
    await database.query(
      "SELECT * FROM pg_stat_activity WHERE state = 'active';",
    )
  ).rowCount;

  const postgresMaxConnections = parseInt(
    (await database.query("SELECT current_setting('max_connections');")).rows[0]
      .current_setting,
  );

  response.status(200).json({
    updated_at: updatedAt,
    database: {
      postgres_version: postgresVersion,
      current_connections: postgresCurrentConnections,
      max_connections: postgresMaxConnections,
    },
  });
}

export default status;
