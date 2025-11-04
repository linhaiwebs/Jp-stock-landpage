import { useEffect, useState } from 'react';

export interface UrlParams {
  code: string;
  src: string;
  racText: string;
  gclid: string;
  market: string;
}

function detectMarketFromCode(code: string): string {
  const isJapaneseCode = /^\d{4}$/.test(code);
  const isUSCode = /^[A-Z]{1,5}$/i.test(code);

  if (isJapaneseCode) return 'jp';
  if (isUSCode) return 'us';

  return 'us';
}

export function useUrlParams(): UrlParams {
  const getParamsFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code') || 'AAPL';
    const src = urlParams.get('src') || '';
    const racText = urlParams.get('rac_text') || '';
    const gclid = urlParams.get('gclid') || '';
    const marketParam = urlParams.get('market') || '';

    const isJapaneseCode = /^\d{4}$/.test(code);
    const isUSCode = /^[A-Z]{1,5}$/i.test(code);

    let validCode = code;
    if (!isJapaneseCode && !isUSCode) {
      validCode = 'AAPL';
    }

    const detectedMarket = marketParam || detectMarketFromCode(validCode);

    return {
      code: validCode,
      src,
      racText,
      gclid,
      market: detectedMarket,
    };
  };

  const [params, setParams] = useState<UrlParams>(getParamsFromUrl);

  useEffect(() => {
    const handleUrlChange = () => {
      setParams(getParamsFromUrl());
    };

    window.addEventListener('popstate', handleUrlChange);
    handleUrlChange();

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return params;
}
