import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, sunt nostrum? Explicabo aliquam beatae voluptas est autem corporis, sequi amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore vero ipsum ducimus soluta ea fugit tempora non quia asperiores.</p>
      <Link href="/people">
        See People's Listing
      </Link>
    </div>
  )
}
