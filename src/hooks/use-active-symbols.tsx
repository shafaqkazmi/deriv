import React from "react";
import { IWebSocketApi } from "./use-webSocket-api";
import { ActiveSymbolsRequest } from "../constants/constants";

export const useActiveSymbols = ({
  api,
  addListener,
  removeListener,
}: IWebSocketApi) => {
  const [activeSymbols, setActiveSymbols] = React.useState([]);

  const activeSymbolsResponse = async (res: any) => {
    const data = JSON.parse(res.data);

    if (data.error !== undefined) {
      console.log("Error : ", data.error?.message);
      removeListener(activeSymbolsResponse);
    }

    if (data.msg_type === "active_symbols") {
      setActiveSymbols(data.active_symbols);
    }

    removeListener(activeSymbolsResponse);
  };

  const getActiveSymbols = async () => {
    addListener(activeSymbolsResponse);
    await api.activeSymbols(ActiveSymbolsRequest);
  };

  React.useEffect(() => {
    getActiveSymbols();

    return () => {
      removeListener(activeSymbolsResponse);
    };
  }, []);

  return activeSymbols;
};
