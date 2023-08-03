import React from "react";
import { IWebSocketApi } from "./use-webSocket-api";
import { TicksRequest } from "../constants/constants";

export const useSymbolQuote = ({
  api,
  addListener,
  removeListener,
}: IWebSocketApi) => {
  const [data, setData] = React.useState();
  const subscribedTicks = React.useRef<string[]>([]);
  
  const tickSubscriber = () => api.subscribe(TicksRequest);

  const ticksResponse = async (response: any) => {
    const data = JSON.parse(response.data);
    // This example returns an object with a selected amount of past ticks.
    if (data.error !== undefined) {
      console.log("Error : ", data.error.message);
      removeListener(ticksResponse);
    }
    // Allows you to monitor ticks.
    if (data.msg_type === "tick") {
      setData(data.tick);
    }
  };

  const subscribeTicks = async (symbol: string) => {
    subscribedTicks.current = subscribedTicks.current.concat(symbol);
    TicksRequest.ticks_history = symbol;
    addListener(ticksResponse);
    await tickSubscriber();
  };

  const unsubscribeTicks = async (symbol: string) => {
    TicksRequest.ticks_history = symbol;
    removeListener(ticksResponse);
    await tickSubscriber().unsubscribe();
  };

  React.useEffect(() => {
    return () => {
      subscribedTicks?.current.forEach((ticks) => unsubscribeTicks(ticks));
    };
  }, [unsubscribeTicks]);

  return {
    data,
    subscribeTicks,
    unsubscribeTicks,
  };
};
