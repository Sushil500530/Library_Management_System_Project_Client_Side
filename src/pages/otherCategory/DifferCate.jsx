import useOtherAxios from "../../hooks/useOtherAxios";
import DifferCateDetails from "./DifferCateDetails";
const DifferCate = () => {
    const {otherData} = useOtherAxios();
    console.log(otherData);
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-2xl lg:text-4xl font-bold text-center my-8">Show Other Type Book Of Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 m-5">
            {
                otherData?.map(data =><DifferCateDetails
                key={data._id}
                data={data}
                ></DifferCateDetails> )
            }
               
            </div>
        </div>
    );
};

export default DifferCate;