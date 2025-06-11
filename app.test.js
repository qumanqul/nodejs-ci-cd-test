const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should return Hello CI/CD World!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello CI/CD World!");
  });
});

describe("GET /health", () => {
  it("should return health status", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ status: "OK" });
  });
});
