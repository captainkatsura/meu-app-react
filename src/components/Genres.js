import React from "react";
import GenresInDbComponent from "./GenresInDb";

function GenresComponent() {

	const genres = ["Ação", "Animação", "Aventura", "Ficção científica", "Comédia", "Documentário", "Drama", "Fantasia", "Infantil", "Musical"]

    return(
        <div className="col-lg-6 mb-4">						
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
				</div>
				{
                	genres.map(genre => <GenresInDbComponent genre={genre}/>)
            	}
			</div>
		</div>
    )
}


export default GenresComponent;