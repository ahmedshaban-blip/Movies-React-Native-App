import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Components/card';
import { FlatList } from 'react-native-web';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1')
            .then(function (response) {
                setMovies(response.data.results)

            })
            .catch(function (error) {
                console.log(error);
            })


    })

 

    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => (
                <Card
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    name={item.title}
                    description={item.overview}
                />
            )}
            keyExtractor={item => item.id} 
        />
    );
}