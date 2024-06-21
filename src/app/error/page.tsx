import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
    return (
      <div className="mt-10 space-x-5 align-middle flex items-center justify-center"> 
        <Link href="/">
          <Image src="/404error.png" alt="error" width={800} height={800}/>
        </Link>
      </div>  
    );
  }