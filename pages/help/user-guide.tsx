import Link from 'next/link';
import Image from 'next/image';


export default function UserGuide() {
  return (
    <>
      <h1>User Guide</h1>
      <Link href="/">Back to home</Link>
      <Image
        src="/external/Downloads/Frame_Updates/IMG_2662.JPG" // Route of the image file
        height={320} // Desired size with correct aspect ratio
        width={540} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  )
}
