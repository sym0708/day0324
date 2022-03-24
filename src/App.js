import React from 'react';
import axios from 'axios';
import Movie from './movies';
import './App.css';

class App extends React.Component{
  state = { //초기값 설정 (use state 처럼)
    isLoading: true,
    movies:[],
  };

  getMovies = async () => {//async:비동기식으로 데이터를 불러옴
    const {
        data: {
          data: {movies}
        },
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies);
    //console.log(movies.data.data.movies);
    this.setState({movies, isLoading:false})
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return(
      <div className='container'>
        <div className='movies'>
            {/* {isLoading ? '로딩' : '대기'} */}
            {isLoading
            ?(<div className='loader'> '로딩' </div>)
            :( movies.map((movie) => ( //화면에 렌더링 ()
            // console.log(movie);
              <Movie
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                // genres={movie.genres}
              />
            ))
            )
            }
        </div>
       </div>
    );
  } 

} 

export default App;
