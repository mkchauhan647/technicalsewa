import FooterContact from '@/components/footer/FooterContact'
import Categories from '@/components/repair/Categories'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <Link href="/allservices" >
          <h1>services</h1>
      </Link>
      <Link href="/professionals" >
          <h1>professionals</h1>
      </Link>
      <Categories/>
      <FooterContact />
    </main>
  )
}
