import Link from 'next/link'
import React from 'react'
import Logo from '../../public/images/dojo-logo.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <Image 
            src={Logo}
            alt='Dojo Helpdesk logo'
            width={70}
            quality={100}
            placeholder='blur'
            />
            <h1>Dojo Helpdesk</h1>
            {/* Link prefetches the page, so there's higher performance. */}
            <Link href='/'>Dashboard</Link>
            <Link href='/tickets'>Tickets</Link>
        </nav>
    )
}

export default Navbar
