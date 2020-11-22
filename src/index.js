const http = require("http");
const PORT = 3000;
const DEFAULT_HEADER = { "Content-Type": "aplication/json" };

const HeroFactory = require("./factories/heroFactory");
const heroService = HeroFactory.generateInstance();

const routes = {
  "/heroes:get": async (request, response) => {
    const { id } = request.queryString;
    console.log({ id });
    const heroes = await heroService.find(id);
    response.write(JSON.stringify({ results: heroes }));

    return response.end();
  },

  "/heroes:post": async (request, response) => {},

  default: (request, response) => {
    response.write("Default");
    return response.end();
  },
};

const handler = (request, response) => {
  const { url, method } = request;
  const [, route, id] = url.split("/");
  request.queryString = { id: isNaN(id) ? id : +id };

  const key = `/${route}:${method.toLowerCase()}`;

  response.writeHead(200, DEFAULT_HEADER);
  const chosen = routes[key] || routes.default;
  return chosen(request, response);
};

http
  .createServer(handler)
  .listen(PORT, () => console.log("Server running at ", PORT));
