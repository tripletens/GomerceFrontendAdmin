import { ThemeProvider } from "@emotion/react";
import { NewOrders } from "../../components/orders/NewOrders";
import { theme } from "./style/custom-theme";

export const Orders = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NewOrders />
      </ThemeProvider>
    </>
  );
};
