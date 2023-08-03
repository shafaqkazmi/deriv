import React from "react";

import { useActiveSymbols } from "../../hooks/use-active-symbols";
import { useWebSocketApi } from "../../hooks/use-webSocket-api";
import { ComponentTabularView } from "./component-tabular-view";
import { useSymbolQuote } from "../../hooks/use-symbol-quote";

export const ComponentTradeBoard = () => {
  const symbolQuotes = React.useRef(new Map<string, string>());

  const webSocketApi = useWebSocketApi();
  const activeSymbols = useActiveSymbols(webSocketApi);
  const quoteSubscriber = useSymbolQuote(webSocketApi);

  const getQuoteBySmbol = React.useCallback(
    (symbol: string) => {
      if (!symbolQuotes.current.has(symbol)) {
        symbolQuotes.current.set("symbol", "");
        quoteSubscriber.subscribeTicks(symbol);
      }

      return symbolQuotes.current.get(symbol);
    },
    [quoteSubscriber]
  );

  const setSmbolQuote = React.useCallback(
    (data: any) => {
      symbolQuotes.current.set(data["symbol"], data["quote"]);
    },
    [quoteSubscriber]
  );

  React.useEffect(() => {
    if (quoteSubscriber?.data) {
      debugger;
      setSmbolQuote(quoteSubscriber.data);
    }
  }, [quoteSubscriber]);

  return (
    <ComponentTabularView data={activeSymbols} getQuote={getQuoteBySmbol} />
  );
};
