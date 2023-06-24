const SERVER_IP = "localhost";
//https://comentario.onrender.com/api/v1/comentario

export const ENV = {
  BASE_PATH: `https://${SERVER_IP}`,
  BASE_API: `https://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    POST: "comentario",
  },
};

export * from "./constants";
