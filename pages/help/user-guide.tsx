import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Layout, { siteTitle } from '../../components/layout';


export default function UserGuide() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>User Guide</h1>
        <Image
          //src="/external/Downloads/Frame_Updates/IMG_2662.JPG" // Route of the image file
          src="/next.svg" // Route of the image file
          height={320} // Desired size with correct aspect ratio
          width={540} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </Layout>
    </>
  )
}
