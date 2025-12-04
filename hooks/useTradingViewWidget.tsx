'use client';
import { useEffect, useRef } from 'react';

function useTradingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = `${height}px`;
    widgetDiv.style.width = "100%";

    container.current.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify({
      ...config,
      autosize: false,
      height: height,
    });

    container.current.appendChild(script);

    return () => {
      if (container.current) container.current.innerHTML = "";
    };
  }, [scriptUrl, config, height]);

  return container;
}

export default useTradingViewWidget;
