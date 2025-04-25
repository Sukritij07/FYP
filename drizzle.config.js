/** @type { import("drizzle-kit").Config } */
const config = {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    connectionString:
      "postgresql://vmi_owner:npg_pCTg4inbS9FZ@ep-summer-boat-a41judy4-pooler.us-east-1.aws.neon.tech/vmi?sslmode=require",
    database: "vmi",
    host: "ep-summer-boat-a41judy4-pooler.us-east-1.aws.neon.tech",
    user: "vmi_owner",
    password: "npg_pCTg4inbS9FZ",
    ssl: true,
  },
};

export default config;
