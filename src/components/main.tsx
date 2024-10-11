import Link from "next/link";
import center from "../../public/center.jpeg"
import institute from "../../public/institute.jpg"
import university from "../../public/university.jpg";
import college from "../../public/college.jpeg"
import  school from "../../public/school.jpg"
import Image from "next/image"
import logo from "../../public/logo.jpeg"
import walfare from "../../public/walfare.jpeg"

export default function Main(){
    return(
        <>   
        <div className="container1 w-[100%] flex flex-col md:flex-row" data-aos="fade-left">
    <div className="child1 flex-1 ">
        <h1 className="h1 text-3xl">Education</h1>
        <p className="text-base md:text-lg">
            Education plays an important role in our life.
            <br />
             It is the key to success, providing us
             <br /> with opportunities, abilities, and skills.
            
             <br /> Education equips us to face any difficult situation.
        </p>
    </div>
    <div className="img flex-1 p-4">
        <Image src={logo} height={350} width={350} objectFit="cover" alt="Logo"/>
    </div>
</div>

        <div className=" section   " data-aos="fade-left" >
            <div className=" box">
               <div className= "box-content">
                  <h1>School</h1>
                  <div className="box-img">
                    <Image src={school} alt="school image"></Image>
                  </div>
                  <Link href={"./school"}><button className="btn"> Read More</button></Link>
                </div>   
             </div>

             <div className=" box">
               <div className= "box-content">
                  <h1>College</h1>
                  <div className="box-img">
                    <Image src={college} alt="college image"></Image>
                  </div>
                  <Link href={"./college"}><button className="btn"> Read More</button></Link>
                </div>   
             </div>

             <div className=" box">
               <div className= "box-content">
                  <h1>University</h1>
                  <div className="box-img">
                    <Image src={university} alt="university image"></Image>
                  </div>
                  <Link href={"./university"}><button className="btn"> Read More</button></Link>
                </div>   
             </div>


             <div className=" box">
               <div className= "box-content">
                  <h1> Institute</h1>
                  <div className="box-img">
                    <Image src={institute} alt="institute image"></Image>
                  </div>
                  <Link href={"./institute"}><button className="btn"> Read More</button></Link>
                </div>   
             </div>


             <div className=" box">
               <div className= "box-content">
                  <h1>Center</h1>
                  <div className="box-img">
                    <Image src={center} alt="center image"></Image>
                  </div>
                  <Link href={"./center"}><button className="btn"> Read More</button></Link>
                </div>   
             </div>


             <div className=" box">
               <div className= "box-content">
                  <h1>welfare</h1>
                  <div className="box-img">
                    <Image src={walfare} alt="welfare image"></Image>
                  </div>
                  <Link href={"./welfare"}><button className="btn"> Read More</button></Link>
                </div>   
             </div>

        </div>  
          
    </>
    )
}