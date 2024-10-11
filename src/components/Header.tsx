import Link from "next/link"

export default function Header(){
    return(
        <div className="container">
                <ul className="child">
                   <Link href="/"><li  className="hover:underline"> Home</li>  </Link> 
                   <Link href= "./About"> <li  className="hover:underline">About-us</li></Link>
                   <Link href="./contact">
                    <li className="hover:underline">Contact us</li>
                    </Link>
                    
                </ul>        
        </div>
    )
}