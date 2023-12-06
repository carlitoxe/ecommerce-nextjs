const useGetProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json();     
}

export default useGetProducts;