import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Image} from 'antd';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ReactPlayer from 'react-player'


const About = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	  window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	  }

	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/products`)
			console.log(data);
			setProducts(data)
		}
		fetchData()
	}, [])

	


	return (
		<section>
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

		<ReactPlayer url="https://youtu.be/RL_WC5ECKgc" controls light pip />
			</div>
			<div className="container">
				
					<h2 className='mt-3' style={{textAlign: 'center', textDecoration: 'underline', color: '#6e6e6e', fontWeight: 'bold'}}>Our <span style={{color: '#4a92f7'}}>Services</span></h2>
				<div className="row mt-3">
					{products.map(
						(product) => (
							<div className="col-lg-4 col-md-6 mt-5" key={product.id}>
								<div className="featured-item style-2">
									<div className="featured-icon">
										{" "}
										<Image height={280} src={`https://products-imgs.s3.us-east-2.amazonaws.com/${product.doc_key}`} />
										<span className="rotateme"></span>
									</div>
									<div className="featured-title">
										<h5>{product.title}</h5>
									</div>
									<div className="featured-desc">
										<p>{product.desc.length > 25 ? product.desc.substring(0,25) + '..' : product.desc}</p>
										<Link className="icon-btn mt-4" to={`/service/${product.id}`}>
											{" "}
											<i className="la la-angle-right"></i>
										</Link>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
