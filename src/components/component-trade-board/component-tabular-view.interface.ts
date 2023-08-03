
interface TableHeadCell {
  id: string;
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

export interface ITradeBoardTable {
  data: any;
  getQuote: (symbol: string) => string | undefined;
}

export const TradeBoardHeadCells: readonly TableHeadCell[] = [
  {
    id: "display_name",
    label: "Instrument",
  },
  {
    id: "quote",
    label: "Quote",
    align: "center"
  },
  {
    id: "price",
    label: "Last Price",
  },
  {
    id: "change24h",
    label: "24h Change",
  },
];
