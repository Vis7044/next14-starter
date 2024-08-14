'use client';
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NavigationTestPage() {

  // CLIET SITE NAVIGATION

  const router = useRouter()

  const pathName = usePathname()
  const searchParams = useSearchParams()

  const q = searchParams.get('q')
  searchParams.set('a','vskfjsd')
  console.log(q)

  console.log(pathName)
  const handleClick = () => {
    console.log('clicked')
    router.forward()
  }
  return (
    <div>
      <Link href='/' prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage
