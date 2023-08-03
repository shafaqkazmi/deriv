import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { HighlightTableCell } from "./component-tabular-view.style";
import {
  ITradeBoardTable,
  TradeBoardHeadCells,
} from "./component-tabular-view.interface";
import React from "react";

const RenderCellWithHighlight = (value: string | undefined) => {
  const [isUpdating, setisUpdating] = React.useState(false);

  React.useEffect(() => {
    setisUpdating(true);
    setTimeout(() => setisUpdating(false), 1000);
  }, [value]);

  return (
    <HighlightTableCell isUpdating={!!(value && isUpdating)}>
      {value}
    </HighlightTableCell>
  );
};

export const ComponentTabularView = (props: ITradeBoardTable) => (
  <Paper sx={{ width: "100%", overflow: "hidden" }}>
    <Typography m={2} align="left" variant="h6" id="tableTitle">
      Forex assets and their symbols
    </Typography>
    <TableContainer sx={{ maxHeight: "90vh" }}>
      <Table size="medium" stickyHeader aria-labelledby="tableTitle">
        <TableHead>
          <TableRow>
            {TradeBoardHeadCells.map((headCell, index) => (
              <TableCell key={index} align={headCell.align}>
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row: any, index: number) => (
            <TableRow hover key={index}>
              <TableCell>{row.display_name}</TableCell>
              <TableCell align="center">
                {RenderCellWithHighlight(props.getQuote(row.symbol))}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.change24h}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);
