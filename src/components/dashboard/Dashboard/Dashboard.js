import React, { Component, useEffect } from "react";
import { useApiService } from "../../../utils/Api.service";
import BgImage from "../../../assets/images/shape/shape-1.png";
import Category1 from "../../../assets/images/resource/category-1.png";
import Category2 from "../../../assets/images/resource/category-2.png";
import Category3 from "../../../assets/images/resource/category-3.png";
import Category4 from "../../../assets/images/resource/category-4.png";

import Shop1 from "../../../assets/images/resource/shop/shop-1.jpg";
import Shop2 from "../../../assets/images/resource/shop/shop-2.jpg";
import Shop3 from "../../../assets/images/resource/shop/shop-3.jpg";
import Shop4 from "../../../assets/images/resource/shop/shop-4.jpg";
import Shop5 from "../../../assets/images/resource/shop/shop-5.jpg";
import Shop6 from "../../../assets/images/resource/shop/shop-6.jpg";
import Shop7 from "../../../assets/images/resource/shop/shop-7.jpg";
import Shop8 from "../../../assets/images/resource/shop/shop-8.jpg";

const Dashboard =  () => {
const apiService = useApiService();

  useEffect(() => {
    apiService.getProducts()
    .then((response) => {
      console.log("response",response)
    })
    .catch((error) => {
      console.log("error",error)
    })
  },[])


  return (
   <>
   <section className="topcategory-section centred">
            <div className="auto-container">
                <div className="sec-title">
                    <h2>Top Category</h2>
                    <p>Follow the most popular trends and get exclusive items from castro shop</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <figure className="image-box"><img src={Category1} alt="" /></figure>
                            <h5><a href="index.html">Women Collections</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <figure className="image-box"><img src={Category2} alt="" /></figure>
                            <h5><a href="index.html">Kids Collections</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <figure className="image-box"><img src={Category3} alt="" /></figure>
                            <h5><a href="index.html">Summer Collections</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <figure className="image-box"><img src={Category4} alt="" /></figure>
                            <h5><a href="index.html">Gents Collections</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="shop-section">
            <div className="auto-container">
                <div className="sec-title">
                    <h2>Our Top Collection</h2>
                    <p>There are some product that we featured for choose your best</p>
                </div>
                <div className="sortable-masonry">
                    <div className="filters">
                        <ul className="filter-tabs filter-btns centred clearfix">
                            <li className="active filter" data-role="button" data-filter=".best_seller">Best Seller</li>
                            <li className="filter" data-role="button" data-filter=".new_arraivals">New Arraivals</li>
                            <li className="filter" data-role="button" data-filter=".top_rate">Top Rate</li>
                        </ul>
                    </div>
                    <div className="items-container row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop1} alt="" />
                                        <ul className="info-list clearfix">
                                            <li><a href="index.html"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="product-details.html">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="product-details.html">Cold Crewneck Sweater</a>
                                        <span className="price">$70.30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop2} alt="" />
                                        <span className="category green-bg">New</span>
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="#">Multi-Way Ultra Crop Top</a>
                                        <span className="price">$50.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller top_rate">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop3} alt="" />
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="product-details.html">Side-Tie Tank</a>
                                        <span className="price">$40.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop4} alt="" />
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="product-details.html">Cold Crewneck Sweater</a>
                                        <span className="price">$60.30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller top_rate">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop5} alt="" />
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="#">Side-Tie Tank</a>
                                        <span className="price">$35.30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop6} alt="" />
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="product-details.html">Must-Have Easy Tank</a>
                                        <span className="price">$25.30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop7} alt="" />
                                        <span className="category red-bg">Hot</span>
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="product-details.html">Woven Crop Cami</a>
                                        <span className="price">$90.30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals">
                            <div className="shop-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={Shop8} alt="" />
                                        <ul className="info-list clearfix">
                                            <li><a href="#"><i className="flaticon-heart"></i></a></li>
                                            <li><a href="#">Add to cart</a></li>
                                            <li><a href="#" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-search"></i></a></li>
                                        </ul>
                                    </figure>
                                    <div className="lower-content">
                                        <a href="product-details.html">Must-Have Easy Tank</a>
                                        <span className="price">$20.30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper centred">
                    <ul className="pagination clearfix">
                        <li><a href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#" className="active">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </section>

        </>
  )
}

export default Dashboard;
