import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import FooterContact from '@/components/footer/FooterContact'
import Categories from '@/components/repair/Categories'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
<<<<<<< HEAD
    <main>
      <HeroSection />
      <FooterContact />
=======
    <main >
      <HeroSection/>
      <WhyChooseUs/>
      <Link href="/allservices" >
          <h1>services</h1>
      </Link>
      <Link href="/professionals">
        <h1>professionals</h1>
      </Link>
>>>>>>> bb9482ad28cc873563c7e772cb0b6625110d9263
    </main>
  );
}
