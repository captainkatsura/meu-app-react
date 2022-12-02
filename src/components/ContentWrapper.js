import React from "react";
import TopbarComponent from "./TopBar";
import ContentRowTopComponent from "./ContentRowTop";
import FooterComponent from "./Footer";

function ContentWrapperComponent() {

    return(
        <div id="content-wrapper" class="d-flex flex-column">
            <TopbarComponent />
            <ContentRowTopComponent />
            <FooterComponent />
        </div>
    )
};

export default ContentWrapperComponent;