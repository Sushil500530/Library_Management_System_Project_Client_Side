import { useQuery } from "@tanstack/react-query";

const useOtherCategory = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey:["category"],
        queryFn: async () => {
            const data = await fetch('https://assign-project-server-side.vercel.app/category-collection');
            return await data.json();
        }
    })
    return {data,isLoading,isFetching,refetch}
};

export default useOtherCategory;