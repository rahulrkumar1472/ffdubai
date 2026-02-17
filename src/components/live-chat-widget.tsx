"use client";

import Script from "next/script";

export function LiveChatWidget() {
  return (
    <>
      <Script src="https://my.messagemind.ai/chatBot.js" strategy="lazyOnload" />
      <messagemind-chatbot accessId="68a2d271c505884fbe50c875" id="68ad6ef46902931054724d7a" />
    </>
  );
}
