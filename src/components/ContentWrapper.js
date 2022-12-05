import React from "react";
import TopbarComponent from "./TopBar";
import FooterComponent from "./Footer";
import ContentRowMoviesComponent from "./ContentRowMovies";

function ContentWrapperComponent() {

    return(
        <div id="content-wrapper" class="d-flex flex-column">
            <TopbarComponent />
            <ContentRowMoviesComponent></ContentRowMoviesComponent>
            <FooterComponent />
        </div>
    )
};

export default ContentWrapperComponent;