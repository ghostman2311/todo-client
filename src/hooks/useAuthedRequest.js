import * as React from "react";
import axios from "axios";
import { useUser } from "./useUser";

const useAuthedRequest = () => {
  const [token, setToken] = React.useState(null);
  const [isReady, setIsReady] = React.useState(false);
  const { user } = useUser();

  React.useEffect(() => {
    const createToken = async () => {
      const token = await user.getIdToken();
      setToken(token);
      setIsReady(true);
    };

    if (user) {
      createToken();
    }
  }, [user]);

  const get = React.useCallback(
    async (url) => {
      const response = await axios.get(url, {
        headers: { authtoken: token },
      });

      return response.data;
    },
    [token]
  );

  const post = React.useCallback(
    async (url, body) => {
      const response = await axios.post(url, body, {
        headers: { authtoken: token },
      });

      return response.data;
    },
    [token]
  );

  const put = React.useCallback(
    async (url, body) => {
      const response = await axios.put(url, body, {
        headers: { authtoken: token },
      });

      return response.data;
    },
    [token]
  );

  const del = React.useCallback(
    async (url) => {
      const response = await axios.delete(url, {
        headers: { authtoken: token },
      });

      return response.data;
    },
    [token]
  );

  return { get, put, post, del, isReady };
};

export { useAuthedRequest };
