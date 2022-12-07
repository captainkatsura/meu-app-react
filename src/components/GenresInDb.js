
import React from "react";

function GenresInDbComponent(props) {

    return(
				
		<div className="card-body">
			<div className="row">
				<div className="col-lg-6 mb-4">
					<div className="card bg-dark text-white shadow">
						<div className="card-body">
							{ props.genre }
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}


export default GenresInDbComponent