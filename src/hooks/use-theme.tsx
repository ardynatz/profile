import * as React from "react";

import { ThemeProviderContext } from "@/components/theme-provider";

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
