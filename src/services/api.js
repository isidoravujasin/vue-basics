const BASE_URL = 'https://jsonplaceholder.typicode.com'

async function request(path){
    const res = await fetch(`${BASE_URL}/${path}`)
    if (!res.ok){
        throw new Error ('Failed to fetch data from API')
    }
    return await res.json()
}

export function getPosts(){
    return request('/posts')
}

export function getPost(id){
    return request(`/posts/${id}`)
}