import { hexToRGBA } from "@mono/utils";
import { globalStyle } from "@vanilla-extract/css";

const TERTIARY = "#576b79";

const TERTIARY_10 = hexToRGBA(TERTIARY, 0.1) ?? TERTIARY;

globalStyle("body", {
  display: "flex",
  background: TERTIARY_10,
});
