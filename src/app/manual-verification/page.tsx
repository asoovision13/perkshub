// pages/specific-page.js
import Head from 'next/head';

export default function SpecificPage() {
  return (
    <div>
      <Head>
        {/* Inline Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var lck = false;
            `,
          }}
        />

        {/* External Script */}
        <script
          type="text/javascript"
          src="https://singingfiles.com/script_include.php?id=1782323"
          async
        />

        {/* Inline Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              if (!lck) {
                top.location = 'https://singingfiles.com/help/ablk.php?lkt=1';
              }
            `,
          }}
        />

        {/* Noscript Fallback */}
        <noscript>
          Please enable JavaScript to access this page.
          <meta
            http-equiv="refresh"
            content="0;url=https://singingfiles.com/help/enable_javascript.php?lkt=1"
          />
        </noscript>
      </Head>

      <h1>This is a Specific Page</h1>
    </div>
  );
}