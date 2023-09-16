import Link from "next/link";
import { getSession } from "next-auth/react";

export default function Home(){
  return (
    <>
    <h1>Next js pre rendering</h1>
    <div>
      <Link href={'/users'}>users</Link>
      <div>  <Link href={'/posts'}>Post</Link></div>
     
    </div>
    </>
  )

}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}