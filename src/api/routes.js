const baseUrl = process.env.REACT_APP_API_URL;

let routes = {
  usersUrl: "/users",
};

for (let key in routes) {
  routes[key] = baseUrl + routes[key];
}

export default routes;
