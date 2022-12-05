import React from "react";
import ActorsComponent from "./Actors";
import AwardsComponent from "./Awards";
import GenresComponent from "./Genres";
import LastMovieComponent from "./LastMovie";
import MoviesComponent from "./Movies";

function ContentRowMoviesComponent() {

    return(
        <React.Fragment>
            <div className="row">
                <MoviesComponent></MoviesComponent>
                <AwardsComponent></AwardsComponent>
                <ActorsComponent></ActorsComponent>
            </div>
            <div className="row">
                <LastMovieComponent></LastMovieComponent>
                <GenresComponent></GenresComponent>
            </div>
        </React.Fragment>
    )
}

export default ContentRowMoviesComponent;