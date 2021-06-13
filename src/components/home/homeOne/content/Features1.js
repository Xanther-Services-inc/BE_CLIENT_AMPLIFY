import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../Redux'
import dataFeatures from "../../../data.json";

const Features = ({productData,fetchProducts}) => {
 	useEffect(() => {
		fetchProducts();
	
	}, [])
	return (
		<>
			<section
				className="p-0 text-center wow fadeInUp"
				data-wow-duration="2s"
			>
				<div className="container-fluid">
					<div className="row custom-mt-10 z-index-1 md-mt-0">
						<div className="col-md-12">
							<div
								className="owl-carousel owl-theme"
								data-dots="false"
								data-items="4"
								productData-lg-items="3"
								productData-md-items="2"
								productData-sm-items="1"
								productData-autoplay="true"
							>
								{/* {productData.products.map(
									(feature,index) => ( */}
									
										
										
										<div className="item" key={123}>
											{/* {console.log(feature)} */}
											<div className="featured-item style-2">
												<div className="featured-icon">
													
													 <i
														// className={`${feature["icon"]}`}
								
													>photo</i>
													<span className="rotateme"></span>
												</div> 
												<div className="featured-title">
													{/* <h5>{feature["title"]}</h5> */}
													{/* <h5>{feature.title}</h5> */}
													
												</div>
												<div className="featured-desc">
													<p>
														 {/* {feature["desc"]} */}
													</p>
													<a
														className="icon-btn mt-4"
														href="/form"
													>
														{" "}
														<i className="la la-angle-right"></i>
													</a>
												</div> 
											</div>
										</div>
						
									)
								)
								
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
const mapStateToProps = state =>{
	return {
		productData: state.product
	}
}
const mapDispatchToProps = dispatch =>{
	return {
		fetchProducts: () => dispatch(fetchProducts())
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Features)
