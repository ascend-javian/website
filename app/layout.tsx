import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ascend Jvian | Your everyday, connected',
  description:
    'Discover Ascend Jvian: an app in development bringing payments, mobility, shopping, connectivity and entertainment together.',
};

const chatWidgetScript = `
  (function(d,t) {
    var BASE_URL="https://cwtest.ai2z4u.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async=true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken:"LWhT6tHw2xYRXUCErSbAmSub",
        baseUrl:BASE_URL
      });
    };
  })(document,"script");
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          data-chatwoot-widget="true"
          dangerouslySetInnerHTML={{ __html: chatWidgetScript }}
        />
      </body>
    </html>
  );
}
