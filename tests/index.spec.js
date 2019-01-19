const got = require("got");

describe("The API is running", () => {
  let server;
  const baseUrl = "http://localhost:3000";

  beforeAll(async () => {
    server = require("../src/index");
  });

  afterAll(() => {
    server.close();
  });

  describe("Route is /", () => {
    it("returns successful response", async () => {
      const result = await got("/", { baseUrl });

      expect(result.body).toContain("API is up.");
      expect(result.statusCode).toBe(200);
    });
  });

  describe("Route is /rss-to-email", () => {
    it("returns successful response", async () => {
      const result = await got("/rss-to-email", { baseUrl });

      expect(result.body).toContain("RSS to Email is up.");
      expect(result.statusCode).toBe(200);
    });
  });
});
