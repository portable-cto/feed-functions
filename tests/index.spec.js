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

  describe("GET /", () => {
    it("returns successful response", async () => {
      const result = await got("/", { baseUrl });

      expect(result.body).toContain("API is up.");
      expect(result.statusCode).toBe(200);
    });
  });

  describe("POST /rss-to-email", () => {
    it("returns successful response", async () => {
      const result = await got("/rss-to-email", {
        baseUrl,
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accentColor: "#e59400",
          filename: "spc",
          header: {
            link: "https://www.portablecto.com/",
            title: "Startups & Side Hustles"
          },
          feeds: [
            {
              description: " ",
              title: "Tools",
              url: "https://zapier.com/engine/rss/4221607/spc-tools/",
              publishedSince: "2019-01-06T00:00:00-0600"
            }
          ],
          format: "html",
          templateUrl:
            "https://gist.github.com/karllhughes/060a9fb8d10dd06909133ddd676fa4cc/raw"
        })
      });

      expect(result.body).toContain("Startups &amp; Side Hustles");
      expect(result.statusCode).toBe(200);
    });
  });
});
