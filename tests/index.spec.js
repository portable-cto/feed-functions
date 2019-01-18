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
});
