import Head from 'next/head';
import Header from '../components/Header';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Mathis Renier</title>
      <meta name="description" content="This is the description of the Index page" />
      <style>
        {`
          body { width: 100%; height: 100%; margin: 0; position: fixed; background: rgba(33,37,41, 1) }
          canvas { width: 100%; height: 100%; outline: none; }
          #container { width: 100%; height: 100%; position: relative; }

                    
          .spline-watermark {
              position: absolute;
              bottom: 16px;
              right: 16px;
              width: 32px;
              height: 32px;
              z-index: 2;
          }

          .spline-watermark:hover {
              opacity: 0.8;
          }

          .spline-watermark img {
              display: block;
              width: 100%;
              height: 100%;
          }
                
          `}
      </style>
    </Head>
    <Header />

    <div id="container">
      <canvas id="canvas3d" />

      <a className="spline-watermark" href="https://spline.design">
        <img src="https://spline.design/_assets/_images/icon_favicon32x32.png" alt="" />
      </a>
    </div>
  </div>
);

export default Index;
