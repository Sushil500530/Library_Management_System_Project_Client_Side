import { useQuery } from "@tanstack/react-query";

const useCategory = (asc) => {
    const { data, isLoading, isFetching, refetch,isError } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const data = await fetch(`https://assign-project-server-side.vercel.app/category-collection?sortField=quantity&sortOrder=${asc ? 'asc' : 'desc'}`);
            return await data.json();
        }
    })
    return { data, isLoading, isFetching, refetch,isError }
};

export default useCategory;