export const getposts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
    });
    return await response.json();
};

export const getRandomUser = async ()  => {
       const respons = await fetch('https://randomuser.me/api/', {
        method: "GET"
       });
       return await respons.json();
}