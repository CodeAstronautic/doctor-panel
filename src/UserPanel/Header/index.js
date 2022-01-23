import React from 'react'
import "./index.css"
export default function Header() {
    return (
        <div class="full-width-header">
            <div class="rs-toolbar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="rs-toolbar-left">
                                <div class="welcome-message">
                                    <span>Email: youremail@email.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="rs-toolbar-right">
                                <div class="toolbar-share-icon">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <a href="#" class="apply-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header id="rs-header" class="rs-header">
                <div class="rs-header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <div class="logo-area">
                                    <a href="/"><img src="images/logo.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="header-contact">
                                            <div id="phone-details" class="widget-text">
                                                <i class="glyph-icon flaticon-phone-call"></i>
                                                <div class="info-text">
                                                    <a href="tel:4155551234">
                                                        <span>Call Us</span>
                                                        01234567890
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="header-contact">
                                            <div id="info-details" class="widget-text">
                                                <i class="glyph-icon flaticon-email"></i>
                                                <div class="info-text">
                                                    <a href="#">
                                                        <span>Mail Us</span>
                                                        info@website.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="header-contact">
                                            <div id="address-details" class="widget-text">
                                                <i class="glyph-icon flaticon-placeholder"></i>
                                                <div class="info-text">
                                                    <span>Location</span>
                                                    Sector 3,Noida
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-area menu-sticky">
                    <div class="container">
                        <div class="main-menu">
                            <div class="row">
                                <div class="col-sm-12">

                                    <a class="rs-menu-toggle"><i class="fa fa-bars"></i>Menu</a>
                                    <nav class="rs-menu">
                                        <ul class="nav-menu">
                                            <li class="current-menu-item current_page_item menu-item-has-children"> <a href="index.php" class="home">Home</a>

                                            </li>
                                            <li class="menu-item-has-children"> <a href="about.php">About Us</a>

                                            </li>
                                            <li class="rs-mega-menu mega-rs"> <a href="/appoitment">Doctor</a>

                                            </li>
                                            <li class="menu-item-has-children"> <a href="departments.php">Departments</a>

                                            </li>
                                            <li class="#"> <a href="pricing.php">Pricing</a>

                                            </li>



                                            <li class="#"> <a href="blog.php">Blog</a>

                                            </li>
                                            <li> <a href="contact.php">Contact</a></li>
                                        </ul>
                                    </nav>
                                    <a class="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
