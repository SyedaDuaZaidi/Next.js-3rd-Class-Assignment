import Link from "next/link";

export default function Header(){
    return(
      <div className="bg-blue-400 w-full font-semibold text-3xl"> 
      <ul className= "flex gap-96">
       <li> <Link href="/">Home</Link></li>
       <li> <Link href="/About">About</Link></li>
       <li> <Link href="/Contact-us">Contact-us</Link></li>
     </ul>
     </div>
    );
    } 