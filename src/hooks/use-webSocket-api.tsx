import React from "react";

const DerivAPIBasic = require("@deriv/deriv-api/dist/DerivAPIBasic");
const app_id = 1089; // Replace with your app_id or leave the current one for testing.

export interface IWebSocketApi {
  api: any;
  addListener: (listener: EventListener) => void;
  removeListener: (listener: EventListener) => void;
}

export const useWebSocketApi = (): IWebSocketApi => {
  const connection = new WebSocket(
    `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`
  );

  const api = new DerivAPIBasic({ connection });

  const addListener = (listener: EventListener) =>
    connection?.addEventListener("message", listener);
  const removeListener = (listener: EventListener) =>
    connection?.removeEventListener("message", listener);

  React.useEffect(() => {
    return () => {
      // api?.disconnect();
    };
  }, []);

  return {
    api,
    addListener,
    removeListener,
  };
};
