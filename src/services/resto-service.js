export default class RestoService{
    url = 'https://jsonplaceholder.typicode.com/posts';

    getPostItems = async () => {
        const response = await fetch(this.url);
        if (!response.ok){
            throw new Error('Server Error');
        }
        const result = await response.json();

        return result;
    }

    
}