// components/UmamiAnalytics.tsx or similar
import Script from "next/script";

export const UmamiAnalytics = () => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const src = process.env.NEXT_PUBLIC_UMAMI_HOST;

  if (!websiteId || !src) {
    return null; // Or <></>
  }

  return (
    <Script
      async
      defer // Optional: defer can improve page load performance
      src={src}
      data-website-id={websiteId}
      // data-do-not-track="true" // Optional: respects DNT setting
    />
  );
};
