import React from "react";
import GenresComponent from "./Genres";
import LastMovieComponent from "./LastMovie";
import MovieCardComponent from "./MovieCard";

function ContentRowMoviesComponent() {

    const moviesBox = [{
        title: 'Movies in database',
        borderColor: 'border-left-primary shadow h-100 py-2',
        number: '21',
        icon: 'fa-film fa-2x text-gray-300'
    }, {
        title: 'Actors quantity',
        borderColor: 'border-left-warning shadow h-100 py-2',
        number: '49',
        icon: 'fa-user fa-2x text-gray-300'
    }, {
        title: 'Total awards',
        borderColor: 'border-left-success shadow h-100 py-2',
        number: '79',
        icon: 'fa-award fa-2x text-gray-300'
    }]

    return(

        <React.Fragment>
            
            <div className="row">
                {
                    moviesBox.map(movie => <MovieCardComponent title={movie.title} number={movie.number} 
                    borderColor={movie.borderColor} icon={movie.icon} />)
                }
            </div>
            <div className="row">
                <LastMovieComponent></LastMovieComponent>
                <GenresComponent></GenresComponent>
            </div>

        </React.Fragment>
    )
}

export default ContentRowMoviesComponent;