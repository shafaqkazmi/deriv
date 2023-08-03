import { styled } from "@mui/material";

const colorPalette = {
  profit: "#4bb4b3",
  loss: "#ff444f"
};

export const HighlightTableCell = styled("span")<{ isUpdating?: boolean}>(({ isUpdating }) => ({
  color: isUpdating ? colorPalette.profit : ""
}));
