import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
    const { data, isLoading, isFetching, refetch,isError } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/category-collection');
            return await data.json();
        }
    })
    return { data, isLoading, isFetching, refetch,isError }
};

export default useCategory;