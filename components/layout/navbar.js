import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'
import { getSession } from "next-auth/react";;
import { useEffect, useState } from "react";
import { getServerSideProps } from "../../pages/blog";
import handler from "../../pages/api/auth/test-session";

 function Navbar({session}) {
    // const {data: session} = useSession()
    console.log("ini")
    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">
                    Next Auth
                </a>
            </h1>
            <ul className={`main-nav`}>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/dashboard'><a>Dashboard</a></Link>
                </li>
                <li>
                    <Link href='/blog'><a>Blog</a></Link>
                </li>
                <li>
                    <Link href='/api/auth/signin'><a onClick={e => {
                        e.preventDefault()
                        // signIn()
                        signIn('github')
                    }}>{session != null ? session.user.name : ""} </a></Link>
                </li>
                <li>
                    <Link href='/api/auth/signout'><a onClick={e => {
                        e.preventDefault()
                        signOut()
                    }}>Sign out</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
