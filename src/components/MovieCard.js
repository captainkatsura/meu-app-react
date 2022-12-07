import React from "react";
import PropTypes from "prop-types"

function MovieCardComponent(props) {


    return(
        <React.Fragment>
            {/*<!-- Total awards -->*/}
			<div className="col-md-4 mb-4">
				<div className="card { ...props.borderColor }" >
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> { props.title } </div>
								<div className="h5 mb-0 font-weight-bold text-gray-800"> { props.number } </div>
							</div>
							<div className="col-auto">
								<i className="fas { ...props.icon }"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

        </React.Fragment>
    )
}

MovieCardComponent.defaultProps = {
	title: 'não informado',
	borderColor: 'default',
	number: '00',
	icon: null
}

MovieCardComponent.propTypes = {
	title: PropTypes.string.isRequired,
	borderColor: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	icon: PropTypes.string
}

export default MovieCardComponent;