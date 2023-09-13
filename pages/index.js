import Link from "next/link";

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

