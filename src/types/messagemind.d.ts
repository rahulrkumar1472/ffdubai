import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "messagemind-chatbot": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string;
        accessId: string;
      };
    }
  }
}

export {};
