import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Button from '@mui/material/Button';


function Trending() {
  return (

    <div>
    <div className="container">
    <div className="title-link-wrapper mb-3 justify-content-between">
        <h2 className="title title-deals mb-1">TRENDING PRODUCTS</h2>
   
        <Button variant="contained" color="success">
        View All
      </Button>
    </div>
    </div>
    
    <div className='container mb-7'>
    <Swiper
    spaceBetween={50}
    slidesPerView={6}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> 
        <div className="product text-center">
                                <figure className="product-media">
                                    <a href="categorypage.html">
                                        <img src="http://127.0.0.1:5500/assets/images/demos/demo2/products/1-1-2.jpg" alt="Product"
                                            />
                                   
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                            title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                            title="Add to wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                            title="Quickview"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                            title="Add to Compare"></a>
                                    </div>
                              
                                </figure>
                                <div className="product-details">
                                    <h4 className="product-name"><a href="categorypage.html">Women's Comforter</a></h4>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings"></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="categorypage.html" className="rating-reviews">(3 Reviews)</a>
                                    </div>
                                    <div className="product-price">
                                        <ins className="new-price">$45.62 - $58.28</ins>
                                    </div>
                                </div>
                            </div></SwiperSlide>
    
  </Swiper>
  </div>
  </div>
  )
}

export default Trending