import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#212529" />

          <link
            rel="shortcut icon"
            href="https://storage.googleapis.com/builderbook/favicon32.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/builderbook/nprogress.min.css"
          />
          <link rel="stylesheet" href="https://storage.googleapis.com/builderbook/vs.min.css" />

          <style>
            {`
              a, a:focus {
                font-weight: 400;
                color: #1565C0;
                text-decoration: none;
                outline: none
              }
              a:hover, button:hover {
                opacity: 0.75;
                cursor: pointer
              }
              blockquote {
                padding: 0 1em;
                color: #555;
                border-left: 0.25em solid #dfe2e5;
              }
              pre {
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: #FFF;
                border: 1px solid #ddd;
              }
              code {
                font-size: 14px;
                background: #FFF;
                padding: 3px 5px;
              }
            `}
          </style>
        </Head>
        <body
          style={{
            font: '16px Poppins',
            color: '#F8F9FA',
            margin: '0px auto',
            fontWeight: '300',
            lineHeight: '1.5em',
            backgroundColor: '#212529',
          }}
        >
          <Main />
          <NextScript />
          <script>{`var SPE = {};`}</script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
          <script src="https://cdn.spline.design/lib/anime.min.js" />
          <script src="https://cdn.spline.design/lib/spline.runtime.min.js" />
          <script src="spline/assets.js" />
          <script src="spline/scene.js" />
          <script src="spline/main.js" />
        </body>
      </Html>
    );
  }
}
