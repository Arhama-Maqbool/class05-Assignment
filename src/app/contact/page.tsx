export default function Contact(){
    return(
        <>
        <div>
        <div className="containe flex justify-center items-center mt-5 p-8 ">
          <div className="h-[250] w-[90%] text-center">
             <h1 className="text-center bg-[#E6D9A2] text-white  text-3xl">
                Welcome to our page!
                </h1>
                <br/>
           <fieldset className="field mb-4 text-2xl ">
            <label htmlFor="Phone" className="p-5"> Phone Number: </label>
            <input type="tel" id="phone" placeholder="Enter your phone number" className="mt-4 border-2 border-black " />
           </fieldset>
            <br/>
           <fieldset className="field mb-4 text-2xl">
            <label htmlFor="email" className="p-5"> Email: </label>
            <input type="text"  id="email" placeholder="Enter your email" className="mt-4 border-2 border-black "/>
           </fieldset>
           </div>


        </div>
    </div>
    </>
    )
    
}