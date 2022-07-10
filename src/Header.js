import React from 'react'


function Header() {
  return (
    <header className="header">
    <div className="header-top">
        <div className="container">
          
            <div className="header-right pr-0">
        
          
        
                <a href="blog.html" className="d-lg-show">
                    <img src="assets/images/shop.png" className="w-20 mr-2" />
                    Become a Seller</a>
                <div className="dropdown">
                    <a href="#currency">Need Help?</a>
                    <div className="dropdown-box">
                        <a href="">Call Us +9779846579211</a>
                        <a href="">Send Feedback</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
    <div className="header-middle">
                <div className="container">
                    <div className="header-left mr-md-4">
                        <a href="#" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle">
                            <img src='' alt=""/>
                        </a>
                        <a href="index.html" className="logo ml-lg-0">
                            <img src="http://vistaartrade.com/static/images/logo.png" alt="logo" width="144" height="45" />
                        </a>
                        <form method="get" action="#"
                        className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4">
                        <div className="select-box">
                            <select id="category" name="category">
                                <option value="">All Categories</option>
                                <option value="4">Fashion</option>
                                <option value="5">Furniture</option>
                                <option value="6">Shoes</option>
                                <option value="7">Sports</option>
                                <option value="8">Games</option>
                                <option value="9">Computers</option>
                                <option value="10">Electronics</option>
                                <option value="11">Kitchen</option>
                                <option value="12">Clothing</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" name="search" id="search"
                            placeholder="What are you looking for..." required />
                        <button className="btn btn-search" type="submit"><i className="fa fa-search"></i>
                        </button> 
                    </form>
                    </div>
                    <div className="header-right ml-4">
                      
                        <a className="wishlist label-down link d-xs-show" href="wishlist.html">
                        <img src='' alt=""/>
                            <span className="wishlist-label d-lg-show">Sign In</span>
                        </a>
                        <div className="dropdown cart-dropdown mr-0 mr-lg-2">
                            <div className="cart-overlay"></div>
                            <a href="#" className="cart-toggle label-down link">
                            <img src='' alt=""/>
                                    <span className="cart-count">2</span>
                               
                                <span className="cart-label">Cart</span>
                            </a>
                            <div className="dropdown-box">
                                <div className="products">
                                    <div className="product product-cart">
                                        <div className="product-detail">
                                            <a href="categorypage.html" className="product-name">Beige knitted
                                                elas tic
                                                runner shoes</a>
                                            <div className="price-box">
                                                <span className="product-quantity">1</span>
                                                <span className="product-price">$25.68</span>
                                            </div>
                                        </div>
                                        <figure className="product-media">
                                            <a href="categorypage.html">
                                            <img src='' alt=""/>
                                            </a>
                                        </figure>
                                        <button className="btn btn-link btn-close" aria-label="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>

                                    <div className="product product-cart">
                                        <div className="product-detail">
                                            <a href="categorypage.html" className="product-name">Blue utility
                                                pinafore
                                                denim dress</a>
                                            <div className="price-box">
                                                <span className="product-quantity">1</span>
                                                <span className="product-price">$32.99</span>
                                            </div>
                                        </div>
                                        <figure className="product-media">
                                            <a href="categorypage.html">
                                            <img src='' alt=""/>
                                            </a>
                                        </figure>
                                        <button className="btn btn-link btn-close" aria-label="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-total">
                                    <label>Subtotal:</label>
                                    <span className="price">$58.67</span>
                                </div>

                                <div className="cart-action">
                                    <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
                                    <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
                                </div>
                            </div>
                       
                        </div>
                        <a className="compare label-down link d-xs-show" href="compare.html">
                          
                            <span className="compare-label d-lg-show">Messages</span>
                        </a>
                    
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-content fix-top sticky-header">
                <div className="container">
                    <div className="inner-wrap">
                    <div className="header-left">
                    <div className="dropdown category-dropdown has-border" data-visible="true">
                                <a href="#" className="category-toggle" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true" data-display="static"
                                    title="Browse Categories">
                                    <img src="assets/images/menu-white.png" className="w-20"/>
                                    <span className="text-white ml-2">All Categories</span>
                                </a>
                                <div className="dropdown-box">
                                <ul className="menu vertical-menu category-menu">
                                <li>
                                            <a href="shop-fullwidth-banner.html">
                                               Fashion
                                            </a>
                                            <ul className="megamenu">
                                                <li>
                                                    <h4 className="menu-title">Women</h4>
                                                    <hr className="divider"/>
                                                    <ul>
                                                        <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
                                                        </li>
                                                        <li><a href="shop-fullwidth-banner.html">Best Sellers</a>
                                                        </li>
                                                        <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Accessories</a>
                                                        </li>
                                                        <li><a href="shop-fullwidth-banner.html">Jewlery &
                                                                Watches</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h4 className="menu-title">Men</h4>
                                                    <hr className="divider"/>
                                                    <ul>
                                                        <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
                                                        </li>
                                                        <li><a href="shop-fullwidth-banner.html">Best Sellers</a>
                                                        </li>
                                                        <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Accessories</a>
                                                        </li>
                                                        <li><a href="shop-fullwidth-banner.html">Jewlery &
                                                                Watches</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="banner-fixed menu-banner menu-banner2">
                                                        <figure>
                                                            <img src="assets/images/menu/banner-2.jpg" alt="Menu Banner"
                                                                width="235" height="347" />
                                                        </figure>
                                                        <div className="banner-content">
                                                            <div className="banner-price-info mb-1 ls-normal">Get up to
                                                                <strong
                                                                    className="text-primary text-uppercase">20%Off</strong>
                                                            </div>
                                                            <h3 className="banner-title ls-normal">Hot Sales</h3>
                                                            <a href="shop-banner-sidebar.html"
                                                                className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right">
                                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                </ul>
                                
                                </div>
                          
                                </div>
                        </div>
                        <a href="#" className="d-xl-show mr-6 text-white">Post Your Requirements</a>
                            <a href="#" className="text-white">Tools</a>
                    </div>
                </div>
            </div>
         
    </header>
  )
}

export default Header