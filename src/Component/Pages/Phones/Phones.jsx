import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

const Phones = () => {
    const phonesObj = useLoaderData();
    const phones = phonesObj.data;
    return (
        <div className="px-[5%]  w-full">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-center underline font-medium my-10">Total: {phones.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-10 mx-auto">
                {
                    phones.map((phone,i)=> 
                        <Phone
                            key={i}
                            phone={phone}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Phones;