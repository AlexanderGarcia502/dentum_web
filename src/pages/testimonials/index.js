import Script from "next/script";
import Link from "next/link";
import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";

export default function About() {
  return (
    <>
      <div className="grow shrink-0">
        <header className="relative wrapper !bg-[#ffffff] ">
          <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-light">
            <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
              <div className="navbar-brand w-full">
                <a href="./index.html">
                  <img
                    src="/assets/img/logo-dark.png"
                    srcSet="/assets/img/logo-dark@2x.png 2x"
                    alt="image"
                  />
                </a>
              </div>
              <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                  <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                    Sandbox
                  </h3>
                  <button
                    type="button"
                    className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown dropdown-mega">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/about"
                      >
                        Sobre nosotros
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/services"
                      >
                        Servicios
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/testimonials"
                      >
                        Testimonios
                      </Link>
                    </li>
                    <li className="nav-item dropdown dropdown-mega">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/contact"
                      >
                        Contáctanos
                      </Link>
                      {/* <!--/.dropdown-menu --> */}
                    </li>
                  </ul>
                  {/* <!-- /.navbar-nav --> */}
                  <div className="offcanvas-footer xl:hidden lg:hidden">
                    <div>
                      <a
                        href="mailto:first.last@email.com"
                        className="link-inverse"
                      >
                        info@email.commmm
                      </a>
                      <br /> 00 (123) 456 78 90 <br />
                      <nav className="nav social social-white mt-4">
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                        </a>
                      </nav>
                      {/* <!-- /.social --> */}
                    </div>
                  </div>
                  {/* <!-- /.offcanvas-footer --> */}
                </div>
                {/* <!-- /.offcanvas-body --> */}
              </div>
              {/* <!-- /.navbar-collapse --> */}
              <div className="navbar-other lg:!ml-4 xl:!ml-4">
                <ul className="navbar-nav !flex-row !items-center !ml-auto">
                  <li className="nav-item xl:hidden lg:hidden">
                    <button className="hamburger offcanvas-nav-btn">
                      <span></span>
                    </button>
                  </li>
                </ul>
                {/* <!-- /.navbar-nav --> */}
              </div>
              {/* <!-- /.navbar-other --> */}
            </div>
            {/* <!-- /.container --> */}
          </nav>
          {/* <!-- /.offcanvas --> */}
        </header>
        {/* <!-- /header --> */}
        <section className="wrapper !bg-[#edf2fc]">
          <div className="container pt-10 pb-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-9/12 lg:w-7/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                  Blocks - Testimonials
                </h1>
                <p className="lead xxl:!px-[2.5rem] leading-[1.65] text-[0.9rem] font-medium">
                  Copy any custom block snippet below and paste it on your page
                  to build your website easily.
                </p>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-1"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !relative xl:px-[35px] lg:px-[20px] mt-[50px]">
                <div
                  className="absolute hidden xl:block lg:block md:block"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "130%",
                    height: "auto",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                  }}
                >
                  <img
                    className="w-full"
                    src="../../assets/img/photos/blurry.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                  <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-end xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                    <div className="card !bg-[#fef3e4]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Cum sociis natoque penatibus et magnis dis
                            parturient montes.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info p-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Coriss Ambady
                              </h5>
                              <p className="!mb-0 text-[.8rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!--/.card --> */}
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-end xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                    <div className="card !bg-[#fae6e7]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum id ligula porta
                            felis euismod semper.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info p-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Cory Zamora
                              </h5>
                              <p className="!mb-0 text-[.8rem]">
                                Marketing Specialist
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!--/.card --> */}
                  </div>
                  {/* <!--/column --> */}
                  <div className="md:w-6/12 lg:w-6/12 xl:w-5/12 flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[8.33333333%] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                    <div className="card !bg-[#eaf3ef]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Donec id elit non porta gravida at eget metus. Duis
                            mollis est commodo luctus, nisi erat porttitor.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info p-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Barclay Widerski
                              </h5>
                              <p className="!mb-0 text-[.8rem]">
                                Sales Specialist
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!--/.card --> */}
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-start xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]">
                    <div className="card !bg-[#e0e9fa]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Nisi erat porttitor ligula, eget lacinia odio sem
                            nec elit. Aenean eu leo pellentesque ornare.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info p-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Jackie Sanders
                              </h5>
                              <p className="!mb-0 text-[.8rem]">
                                Investment Planner
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!--/.card --> */}
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                  Our Community
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  Customer satisfaction is our major goal. See what our
                  customers are saying about us.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Nulla vitae elit libero, a pharetra augue. Maecenas faucibus
                  mollis interdum. Vestibulum id ligula porta felis euismod
                  semper.
                </p>
                <a
                  href="#"
                  className="btn btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  All Testimonials
                </a>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-2"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] !relative">
              <figure
                className="!rounded-[.4rem] absolute hidden lg:block xl:block px-[15px]"
                style={{
                  top: "50%",
                  right: "0",
                  width: "45%",
                  height: "auto",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                }}
              >
                <img
                  className="!rounded-[.4rem]"
                  src="../../assets/img/photos/tei1.jpg"
                  srcset="../../assets/img/photos/tei1@2x.jpg 2x"
                  alt="image"
                />
              </figure>
              <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                <div className="card  !bg-[rgba(246,247,249,1)]">
                  <div className="card-body xl:!p-10 lg:!p-10 md:!p-10 xxl:!py-24 p-[40px]">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:!pl-10">
                        <span className="ratings  inline-block relative w-20 h-[0.8rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five text-[1rem] !mb-3"></span>
                        <blockquote className="!pl-0 text-[1rem] mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                          <p>
                            “Donec id elit non mi porta gravida at eget metus.
                            Vivamus mollis est non commodo luctus, nisi erat
                            porttitor ligula, eget lacinia odio sem nec elit.
                            Duis mollis porta est non commodo luctus.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info p-0">
                              <h4 className="tracking-[-0.03em] !mb-1">
                                Coriss Ambady
                              </h4>
                              <p className="!mb-0 text-[.8rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!-- /column --> */}
                    </div>
                    {/* <!-- /.row --> */}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.card --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-3"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] mt-[-50px]">
              <div className="xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] mt-[50px]">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mt-10 !mb-3">
                  Our Community
                </h2>
                <p className="lead text-[1.05rem] leading-[1.6] !mb-6">
                  Customer satisfaction is our major goal. See what our clients
                  are saying about our services.
                </p>
                <a
                  href="#"
                  className="btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  All Testimonials
                </a>
              </div>
              {/* <!-- /column --> */}
              <div className="xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] mt-[50px]">
                <div className="!relative">
                  <div
                    className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute "
                    data-rellax-speed="1"
                    style={{ top: "-0.7rem", right: "-1.7rem" }}
                  ></div>
                  <div
                    className="shape !rounded-[50%] bg-line red rellax !w-[6rem] !h-[6rem] absolute opacity-50"
                    data-rellax-speed="1"
                    style={{ bottom: "-0.5rem", left: "-1.4rem" }}
                  ></div>
                  <div
                    className="swiper-container dots-closer !mb-6 relative z-10"
                    data-margin="0"
                    data-dots="true"
                    data-items-md="2"
                    data-items-xs="1"
                  >
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="item-inner">
                            <div className="card">
                              <div className="card-body flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                  <p>
                                    “Vivamus sagittis lacus vel augue laoreet
                                    rutrum faucibus dolor auctor. Vestibulum id
                                    ligula porta felis euismod semper. Cras
                                    justo odio, dapibus ac facilisis sed
                                    posuere.”
                                  </p>
                                  <div className="flex items-center text-left">
                                    <img
                                      className="!rounded-[50%] !w-[3.5rem]"
                                      src="../../assets/img/avatars/te1.jpg"
                                      srcset="../../assets/img/avatars/te1@2x.jpg 2x"
                                      alt="image"
                                    />
                                    <div className="info pl-4">
                                      <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                        Coriss Ambady
                                      </h5>
                                      <p className="!mb-0 text-[.85rem]">
                                        Financial Analyst
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                          </div>
                          {/* <!-- /.item-inner --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <div className="item-inner">
                            <div className="card">
                              <div className="card-body flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                  <p>
                                    “Donec id elit non mi porta gravida at eget
                                    metus. Duis mollis, est non commodo luctus,
                                    nisi erat porttitor ligula, eget lacinia
                                    odio sem nec elit. Duis mollis, est non
                                    commodo luctus.”
                                  </p>
                                  <div className="flex items-center text-left">
                                    <img
                                      className="!rounded-[50%] !w-[3.5rem]"
                                      src="../../assets/img/avatars/te2.jpg"
                                      srcset="../../assets/img/avatars/te2@2x.jpg 2x"
                                      alt="image"
                                    />
                                    <div className="info pl-4">
                                      <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                        Cory Zamora
                                      </h5>
                                      <p className="!mb-0 text-[.85rem]">
                                        Marketing Specialist
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                          </div>
                          {/* <!-- /.item-inner --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <div className="item-inner">
                            <div className="card">
                              <div className="card-body flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                  <p>
                                    “Nisi erat porttitor ligula, eget lacinia
                                    odio sem nec elit. Aenean eu leo quam.
                                    Pellentesque ornare sem lacinia quam
                                    venenatis vestibulum. Donec id elit non mi
                                    porta gravida.”
                                  </p>
                                  <div className="flex items-center text-left">
                                    <img
                                      className="!rounded-[50%] !w-[3.5rem]"
                                      src="../../assets/img/avatars/te3.jpg"
                                      srcset="../../assets/img/avatars/te3@2x.jpg 2x"
                                      alt="image"
                                    />
                                    <div className="info pl-4">
                                      <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                        Nikolas Brooten
                                      </h5>
                                      <p className="!mb-0 text-[.85rem]">
                                        Sales Manager
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                          </div>
                          {/* <!-- /.item-inner --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <div className="item-inner">
                            <div className="card">
                              <div className="card-body flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                  <p>
                                    “Etiam porta sem malesuada magna mollis
                                    euismod. Etiam porta sem malesuada magna
                                    mollis euismod. Donec id elit non mi porta
                                    gravida at eget metus posuere consectetur.”
                                  </p>
                                  <div className="flex items-center text-left">
                                    <img
                                      className="!rounded-[50%] !w-[3.5rem]"
                                      src="../../assets/img/avatars/te4.jpg"
                                      srcset="../../assets/img/avatars/te4@2x.jpg 2x"
                                      alt="image"
                                    />
                                    <div className="info pl-4">
                                      <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                        Coriss Ambady
                                      </h5>
                                      <p className="!mb-0 text-[.85rem]">
                                        Financial Analyst
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                          </div>
                          {/* <!-- /.item-inner --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <div className="item-inner">
                            <div className="card">
                              <div className="card-body flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                  <p>
                                    “Maecenas faucibus mollis interdum. Duis
                                    mollis, est non commodo luctus, nisi erat
                                    porttitor ligula, eget lacinia odio sem nec
                                    elit. Praesent commodo cursus magna, vel
                                    scelerisque.”
                                  </p>
                                  <div className="flex items-center text-left">
                                    <img
                                      className="!rounded-[50%] !w-[3.5rem]"
                                      src="../../assets/img/avatars/te5.jpg"
                                      srcset="../../assets/img/avatars/te5@2x.jpg 2x"
                                      alt="image"
                                    />
                                    <div className="info pl-4">
                                      <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                        Jackie Sanders
                                      </h5>
                                      <p className="!mb-0 text-[.85rem]">
                                        Investment Planner
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                          </div>
                          {/* <!-- /.item-inner --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <div className="item-inner">
                            <div className="card">
                              <div className="card-body flex-[1_1_auto] p-[40px]">
                                <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                  <p>
                                    “Donec id elit non mi porta gravida at eget
                                    metus. Cras justo odio, dapibus ac facilisis
                                    in, egestas eget quam. Maecenas sed diam
                                    eget risus varius blandit sit amet non
                                    magna.”
                                  </p>
                                  <div className="flex items-center text-left">
                                    <img
                                      className="!rounded-[50%] !w-[3.5rem]"
                                      src="../../assets/img/avatars/te6.jpg"
                                      srcset="../../assets/img/avatars/te6@2x.jpg 2x"
                                      alt="image"
                                    />
                                    <div className="info pl-4">
                                      <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                        Laura Widerski
                                      </h5>
                                      <p className="!mb-0 text-[.85rem]">
                                        Sales Specialist
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                          </div>
                          {/* <!-- /.item-inner --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                      </div>
                      {/* <!--/.swiper-wrapper --> */}
                    </div>
                    {/* <!-- /.swiper --> */}
                  </div>
                  {/* <!-- /.swiper-container --> */}
                </div>
                {/* <!-- /.relative --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-4"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 xl:px-[35px] lg:px-[20px] mt-[30px]">
                <figure className="m-0 p-0">
                  <img
                    className="w-auto"
                    src="../../assets/img/illustrations/i4.png"
                    srcset="../../assets/img/illustrations/i4@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-12 xl:px-[35px] lg:px-[20px] mt-[30px]">
                <div
                  className="swiper-container dots-closer !mb-6 relative z-10"
                  data-margin="30"
                  data-dots="true"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Coriss Ambady
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Cory Zamora
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                Marketing Specialist
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Nikolas Brooten
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                Sales Manager
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                    </div>
                    {/* <!--/.swiper-wrapper --> */}
                  </div>
                  {/* <!-- /.swiper --> */}
                </div>
                {/* <!-- /.swiper-container --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-5"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
              Happy Customers
            </h2>
            <p className="lead text-[0.9rem] font-medium leading-[1.65] !text-center !mb-6 md:!px-24 lg:!px-0">
              Customer satisfaction is our major goal. See what our customers
              are saying about us.
            </p>
            <div className="!relative">
              <div
                className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
                data-rellax-speed="1"
                style={{ bottom: "0.5rem", right: "-1.7rem" }}
              ></div>
              <div
                className="shape bg-dot primary rellax !w-[6rem] !h-[6rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{ top: "-1rem", left: "-1.7rem" }}
              ></div>
              <div
                className="swiper-container dots-closer !mb-6 relative z-10"
                data-margin="0"
                data-dots="true"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="../../assets/img/avatars/te1.jpg"
                                  srcset="../../assets/img/avatars/te1@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Coriss Ambady
                                  </h5>
                                  <p className="!mb-0 text-[.85rem]">
                                    Financial Analyst
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="../../assets/img/avatars/te2.jpg"
                                  srcset="../../assets/img/avatars/te2@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Cory Zamora
                                  </h5>
                                  <p className="!mb-0 text-[.85rem]">
                                    Marketing Specialist
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="../../assets/img/avatars/te3.jpg"
                                  srcset="../../assets/img/avatars/te3@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Nikolas Brooten
                                  </h5>
                                  <p className="!mb-0 text-[.85rem]">
                                    Sales Manager
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="../../assets/img/avatars/te4.jpg"
                                  srcset="../../assets/img/avatars/te4@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Coriss Ambady
                                  </h5>
                                  <p className="!mb-0 text-[.85rem]">
                                    Financial Analyst
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="../../assets/img/avatars/te5.jpg"
                                  srcset="../../assets/img/avatars/te5@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Jackie Sanders
                                  </h5>
                                  <p className="!mb-0 text-[.85rem]">
                                    Investment Planner
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="../../assets/img/avatars/te6.jpg"
                                  srcset="../../assets/img/avatars/te6@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Laura Widerski
                                  </h5>
                                  <p className="!mb-0 text-[.85rem]">
                                    Sales Specialist
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
              {/* <!-- /.swiper-container --> */}
            </div>
            {/* <!-- /.relative --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-6"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full !relative">
                <div
                  className="shape bg-dot primary rellax !w-[8rem] !h-[8rem] absolute opacity-50  bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
                  data-rellax-speed="1"
                  style={{ top: "0", left: "-1.4rem", zIndex: 0 }}
                ></div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
                    <figure className="rounded-[0.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative">
                      <img
                        className="!rounded-[0.4rem]"
                        src="../../assets/img/photos/g5.jpg"
                        srcset="../../assets/img/photos/g5@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                      <div className="w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2">
                        <figure className="rounded-[0.4rem]">
                          <img
                            className="!rounded-[0.4rem]"
                            src="../../assets/img/photos/g6.jpg"
                            srcset="../../assets/img/photos/g6@2x.jpg 2x"
                            alt="image"
                          />
                        </figure>
                      </div>
                      {/* <!--/column --> */}
                      <div className="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full">
                        <div className="card !bg-[#e0e9fa] !text-center counter-wrapper">
                          <div className="card-body !py-12">
                            <h3 className="counter !whitespace-nowrap xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                              5000+
                            </h3>
                            <p className="!mb-0 text-[0.8rem] font-medium">
                              Satisfied Customers
                            </p>
                          </div>
                          {/* <!--/.card-body --> */}
                        </div>
                        {/* <!--/.card --> */}
                      </div>
                      {/* <!--/column --> */}
                    </div>
                    {/* <!--/.row --> */}
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[25px] max-w-full">
                <div
                  className="swiper-container dots-closer !mb-6"
                  data-margin="30"
                  data-dots="true"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Coriss Ambady
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Cory Zamora
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">
                                Marketing Specialist
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="flex items-center justify-center !text-center">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Nikolas Brooten
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">
                                Sales Manager
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                    </div>
                    {/* <!--/.swiper-wrapper --> */}
                  </div>
                  {/* <!-- /.swiper --> */}
                </div>
                {/* <!-- /.swiper-container --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-7"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35]">
                  Happy Customers
                </h2>
                <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-10 xl:!px-10 xxl:!px-20">
                  Don't take our word for it. See what customers are saying
                  about us.
                </h3>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="itemgrid">
              <div className="flex flex-wrap mx-[-15px] isotope mt-[-30px]">
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum id ligula porta
                          felis euismod semper. Cras justo odio dapibus
                          facilisis sociis natoque penatibus.”
                        </p>
                        <div className="flex items-center text-left">
                          <img
                            className="!rounded-[50%] !w-[3.5rem]"
                            src="../../assets/img/avatars/te1.jpg"
                            srcset="../../assets/img/avatars/te1@2x.jpg 2x"
                            alt="image"
                          />
                          <div className="info pl-4">
                            <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                              Coriss Ambady
                            </h5>
                            <p className="!mb-0 text-[.85rem]">
                              Financial Analyst
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Fusce dapibus, tellus ac cursus tortor mauris
                          condimentum fermentum massa justo sit amet. Vivamus
                          sagittis lacus vel augue laoreet rutrum faucibus dolor
                          auctor. Cras mattis consectetur purus sit amet
                          fermentum. Aenean lacinia bibendum nulla sed
                          consectetur.”
                        </p>
                        <div className="flex items-center text-left">
                          <img
                            className="!rounded-[50%] !w-[3.5rem]"
                            src="../../assets/img/avatars/te2.jpg"
                            srcset="../../assets/img/avatars/te2@2x.jpg 2x"
                            alt="image"
                          />
                          <div className="info pl-4">
                            <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                              Cory Zamora
                            </h5>
                            <p className="!mb-0 text-[.85rem]">
                              Marketing Specialist
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Curabitur blandit tempus porttitor. Vivamus sagittis
                          lacus vel augue laoreet rutrum faucibus dolor auctor.
                          Nullam quis risus eget porta ac consectetur
                          vestibulum. Donec sed odio dui consectetur adipiscing
                          elit.”
                        </p>
                        <div className="flex items-center text-left">
                          <img
                            className="!rounded-[50%] !w-[3.5rem]"
                            src="../../assets/img/avatars/te3.jpg"
                            srcset="../../assets/img/avatars/te3@2x.jpg 2x"
                            alt="image"
                          />
                          <div className="info pl-4">
                            <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                              Nikolas Brooten
                            </h5>
                            <p className="!mb-0 text-[.85rem]">Sales Manager</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Etiam adipiscing tincidunt elit convallis felis
                          suscipit ut. Phasellus rhoncus tincidunt auctor.
                          Nullam eu sagittis mauris. Donec non dolor ac elit
                          aliquam tincidunt at at sapien. Aenean tortor libero
                          condimentum ac laoreet vitae.”
                        </p>
                        <div className="flex items-center text-left">
                          <img
                            className="!rounded-[50%] !w-[3.5rem]"
                            src="../../assets/img/avatars/te4.jpg"
                            srcset="../../assets/img/avatars/te4@2x.jpg 2x"
                            alt="image"
                          />
                          <div className="info pl-4">
                            <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                              Coriss Ambady
                            </h5>
                            <p className="!mb-0 text-[.85rem]">
                              Financial Analyst
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Cum sociis natoque penatibus magnis dis
                          montes, nascetur ridiculus mus. Donec sed odio dui.
                          Nulla vitae elit libero a pharetra.”
                        </p>
                        <div className="flex items-center text-left">
                          <img
                            className="!rounded-[50%] !w-[3.5rem]"
                            src="../../assets/img/avatars/te5.jpg"
                            srcset="../../assets/img/avatars/te5@2x.jpg 2x"
                            alt="image"
                          />
                          <div className="info pl-4">
                            <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                              Jackie Sanders
                            </h5>
                            <p className="!mb-0 text-[.85rem]">
                              Investment Planner
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Donec id elit non mi porta gravida at eget metus.
                          Nulla vitae elit libero, a pharetra augue. Cum sociis
                          natoque penatibus et magnis dis parturient montes,
                          nascetur ridiculus mus.”
                        </p>
                        <div className="flex items-center text-left">
                          <img
                            className="!rounded-[50%] !w-[3.5rem]"
                            src="../../assets/img/avatars/te6.jpg"
                            srcset="../../assets/img/avatars/te6@2x.jpg 2x"
                            alt="image"
                          />
                          <div className="info pl-4">
                            <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                              Laura Widerski
                            </h5>
                            <p className="!mb-0 text-[.85rem]">
                              Sales Specialist
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.grid-view --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-8"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-0 lg:pb-0 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] lg:mx-[-20px] xl:mx-0 items-center">
              <div className="md:w-5/12 lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%] xsm:!hidden sm:!hidden md:!hidden xl:!flex lg:!flex !relative !self-end">
                <div
                  className="shape !rounded-[50%] !bg-[#e0e9fa] rellax !w-[12.5rem] !h-[12.5rem] hidden xl:block lg:block z-[1] absolute"
                  data-rellax-speed="1"
                  style={{ top: "7rem", left: "1rem" }}
                ></div>
                <figure className=" relative z-[2]">
                  <img
                    className="w-full max-w-full !h-auto"
                    src="../../assets/img/photos/co1.png"
                    srcset="../../assets/img/photos/co1@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
              <div className="lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%]">
                <div
                  className="swiper-container dots-start dots-closer mt-6 !mb-6 relative !z-10"
                  data-margin="30"
                  data-dots="true"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="icon relative p-0 border-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur nulla
                            dapibus curabitur blandit.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Coriss Ambady
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="icon relative p-0 border-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur
                            adipiscing dapibus curabitur blandit.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Cory Zamora
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">
                                Marketing Specialist
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="icon relative p-0 border-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur
                            adipiscing dapibus curabitur blandit.”
                          </p>
                          <div className="flex items-center text-left">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                Nikolas Brooten
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">
                                Sales Manager
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                    </div>
                    {/* <!--/.swiper-wrapper --> */}
                  </div>
                  {/* <!-- /.swiper --> */}
                </div>
                {/* <!-- /.swiper-container --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-9"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container py-[4.5rem] xl:!py-[6rem] lg:!py-[6rem] md:!py-[6rem] xl:!pt-[10rem] lg:!pt-[10rem] md:!pt-[10rem]">
            <div className="card !bg-[#edf2fc]">
              <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xxl:!py-24 p-[40px] !relative">
                <div
                  className="absolute hidden lg:block xl:block"
                  style={{ bottom: "0", left: "10%", width: "28%", zIndex: 2 }}
                >
                  <figure className="m-0 p-0">
                    <img
                      className="w-full max-w-full !h-auto"
                      src="../../assets/img/photos/co2.png"
                      srcset="../../assets/img/photos/co2@2x.png 2x"
                      alt="image"
                    />
                  </figure>
                </div>
                <div className="flex flex-wrap sm:mx-[-15px] xsm:mx-[-15px] xl:mx-[-35px] mx-0 !text-center">
                  <div className="lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[41.66666667%] w-full flex-[0_0_auto] sm:px-[15px] xsm:px-[15px] xl:px-[35px] px-0 max-w-full">
                    <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                    <blockquote className="!pl-0 text-[1rem] mb-0 border-0 !leading-[1.7] font-medium m-[0_0_1rem]">
                      <p>
                        “Fusce dapibus tellus ac cursus commodo, tortor mauris
                        condimentum nibh ut fermentum massa, justo sit amet
                        vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor. Cras mattis consectetur purus sit amet
                        fermentum. Aenean lacinia bibendum nulla sed”
                      </p>
                      <div className="flex items-center justify-center !text-center">
                        <div className="info p-0">
                          <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                            Coriss Ambady
                          </h5>
                          <div className="text-[0.65rem] uppercase tracking-[0.02rem] font-bold text-[#aab0bc] mb-0">
                            Financial Analyst
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {/* <!-- /column --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!--/.card-body --> */}
            </div>
            {/* <!--/.card --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-10"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="!relative">
              <div
                className="shape !rounded-[50%] bg-line primary rellax !w-[8rem] !h-[8rem] absolute opacity-50"
                data-rellax-speed="1"
                style={{ top: "-2rem", right: "-2.7rem", zIndex: 0 }}
              ></div>
              <div
                className="shape !rounded-[50%] !bg-[#edf2fc] rellax !w-[8rem] !h-[8rem] absolute"
                data-rellax-speed="1"
                style={{ bottom: "-1rem", left: "-3rem", zIndex: 0 }}
              ></div>
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div className="flex flex-wrap mx-0">
                  <div
                    className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start bg-cover bg-[center_center] bg-no-repeat bg-scroll relative z-0 xl:rounded-tl-[0.4rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.4rem] lg:rounded-tl-[0.4rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.4rem] md:min-h-[25rem] sm:min-h-[25rem] xsm:min-h-[25rem]"
                    data-image-src="../../assets/img/photos/tm1.jpg"
                  ></div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="!p-10 md:!p-12  xl:!p-[4rem] lg:!p-[4rem]">
                      <div
                        className="swiper-container dots-closer !mb-6 relative z-10"
                        data-margin="30"
                        data-dots="true"
                      >
                        <div className="swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                                <p>
                                  “Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus dolor auctor. Vestibulum
                                  ligula porta felis euismod semper. Cras justo
                                  odio.”
                                </p>
                                <div className="flex items-center justify-center !text-center">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Coriss Ambady
                                    </h5>
                                    <p className="!mb-0 text-[0.8rem]">
                                      Financial Analyst
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!--/.swiper-slide --> */}
                            <div className="swiper-slide">
                              <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                                <p>
                                  “Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus dolor auctor. Vestibulum
                                  ligula porta felis euismod semper. Cras justo
                                  odio.”
                                </p>
                                <div className="flex items-center justify-center !text-center">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Cory Zamora
                                    </h5>
                                    <p className="!mb-0 text-[0.8rem]">
                                      Marketing Specialist
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!--/.swiper-slide --> */}
                            <div className="swiper-slide">
                              <blockquote className="icon icon-top text-[1rem] !text-center relative pt-[3.75rem] p-0 border-0 leading-[1.7] font-medium m-[0_0_1rem] before:translate-x-[-52%] before:left-2/4 before:content-['\201c'] before:text-[#aab0bc] before:opacity-30 before:text-[6.5rem] before:font-normal before:absolute before:leading-none before:z-[1] before:top-0">
                                <p>
                                  “Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus dolor auctor. Vestibulum
                                  ligula porta felis euismod semper. Cras justo
                                  odio.”
                                </p>
                                <div className="flex items-center justify-center !text-center">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Nikolas Brooten
                                    </h5>
                                    <p className="!mb-0 text-[0.8rem]">
                                      Sales Manager
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!--/.swiper-slide --> */}
                          </div>
                          {/* <!--/.swiper-wrapper --> */}
                        </div>
                        {/* <!-- /.swiper --> */}
                      </div>
                      {/* <!-- /.swiper-container --> */}
                    </div>
                    {/* <!--/div --> */}
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /div --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-11"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] text-white !text-center">
              <div className="xl:w-10/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !mb-[4.5rem] xl:!mb-[-1.5rem] lg:!mb-[-1.5rem]">
                <div
                  className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:rounded-[0.4rem] before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
                  data-image-src="../../assets/img/photos/bg2.jpg"
                >
                  <div className="card-body p-9 xl:!p-14">
                    <div className="flex flex-wrap mx-0">
                      <div className="xxl:w-9/12 w-full flex-[0_0_auto] max-w-full !mx-auto">
                        <div
                          className="swiper-container dots-light dots-closer !mb-6 relative z-10"
                          data-margin="30"
                          data-dots="true"
                        >
                          <div className="swiper">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                                <blockquote className="!border-0 text-[1rem] mb-2">
                                  <p>
                                    “Vivamus sagittis lacus augue laoreet rutrum
                                    faucibus auctor vestibulum ligula porta
                                    felis, euismod semper cras justo odio
                                    consectetur.”
                                  </p>
                                  <div className="flex items-center justify-center !text-center">
                                    <div className="info !pl-0">
                                      <h5 className="!mb-1 text-white">
                                        Coriss Ambady
                                      </h5>
                                      <p className="!mb-0 text-[0.8rem]">
                                        Financial Analyst
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.swiper-slide --> */}
                              <div className="swiper-slide">
                                <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                                <blockquote className="!border-0 text-[1rem] mb-2">
                                  <p>
                                    “Vivamus sagittis lacus augue laoreet rutrum
                                    faucibus auctor vestibulum ligula porta
                                    felis, euismod semper cras justo odio
                                    consectetur.”
                                  </p>
                                  <div className="flex items-center justify-center !text-center">
                                    <div className="info !pl-0">
                                      <h5 className="!mb-1 text-white">
                                        Cory Zamora
                                      </h5>
                                      <p className="!mb-0 text-[0.8rem]">
                                        Marketing Specialist
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.swiper-slide --> */}
                              <div className="swiper-slide">
                                <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                                <blockquote className="!border-0 text-[1rem] mb-2">
                                  <p>
                                    “Vivamus sagittis lacus augue laoreet rutrum
                                    faucibus auctor vestibulum ligula porta
                                    felis, euismod semper cras justo odio
                                    consectetur.”
                                  </p>
                                  <div className="flex items-center justify-center !text-center">
                                    <div className="info !pl-0">
                                      <h5 className="!mb-1 text-white">
                                        Nikolas Brooten
                                      </h5>
                                      <p className="!mb-0 text-[0.8rem]">
                                        Sales Manager
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                              {/* <!--/.swiper-slide --> */}
                            </div>
                            {/* <!--/.swiper-wrapper --> */}
                          </div>
                          {/* <!-- /.swiper --> */}
                        </div>
                        {/* <!-- /.swiper-container --> */}
                      </div>
                      {/* <!-- /column --> */}
                    </div>
                    {/* <!-- /.row --> */}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.card --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-12"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <div
                  className="swiper-container dots-closer !text-center !mb-6 relative z-10"
                  data-margin="30"
                  data-dots="true"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="border-0 !text-[1rem] !leading-[1.7] !font-medium m-[0_0_1rem]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur
                            adipiscing dapibus.”
                          </p>
                          <div className="flex items-center text-left justify-center">
                            <img
                              className="!rounded-[50%] !w-[3.5rem]"
                              src="../../assets/img/avatars/te1.jpg"
                              srcset="../../assets/img/avatars/te1@2x.jpg 2x"
                              alt="image"
                            />
                            <div className="info pl-4">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Coriss Ambady
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                Financial Analyst
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="border-0 !text-[1rem] !leading-[1.7] !font-medium m-[0_0_1rem]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur
                            adipiscing dapibus.”
                          </p>
                          <div className="flex items-center text-left justify-center">
                            <img
                              className="!rounded-[50%] !w-[3.5rem]"
                              src="../../assets/img/avatars/te2.jpg"
                              srcset="../../assets/img/avatars/te2@2x.jpg 2x"
                              alt="image"
                            />
                            <div className="info pl-4">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Cory Zamora
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                Marketing Specialist
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                      <div className="swiper-slide">
                        <blockquote className="border-0 !text-[1rem] !leading-[1.7] !font-medium m-[0_0_1rem]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur
                            adipiscing dapibus.”
                          </p>
                          <div className="flex items-center text-left justify-center">
                            <img
                              className="!rounded-[50%] !w-[3.5rem]"
                              src="../../assets/img/avatars/te3.jpg"
                              srcset="../../assets/img/avatars/te3@2x.jpg 2x"
                              alt="image"
                            />
                            <div className="info pl-4">
                              <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                Nikolas Brooten
                              </h5>
                              <p className="!mb-0 text-[.85rem]">
                                Sales Manager
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* <!--/.swiper-slide --> */}
                    </div>
                    {/* <!--/.swiper-wrapper --> */}
                  </div>
                  {/* <!-- /.swiper --> */}
                </div>
                {/* <!-- /.swiper-container --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-13"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container-card pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24">
            <div
              className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-20 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)] xxl:rounded-[.8rem] rounded-0"
              data-image-src="../../assets/img/photos/bg22.png"
            >
              <div className="card-body py-[4.5rem] px-0">
                <div className="container">
                  <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] xl:mt-0 lg:mt-0">
                    <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:mt-0 lg:mt-0 max-w-full text-center lg:text-left xl:text-left">
                      <h3 className="xl:text-[1.8rem] text-[calc(1.305rem_+_0.66vw)] font-bold !leading-[1.3] tracking-[normal] mb-3 xxl:!pr-20">
                        We are proud of our works
                      </h3>
                      <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !mb-0 xxl:pr-10">
                        We bring solutions to make life easier for our
                        customers.
                      </p>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:!mt-2 lg:!mt-2 max-w-full">
                      <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                        <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                          <img
                            src="../../assets/img/icons/solid/target.svg"
                            className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mb-3 m-[0_auto]"
                            alt="image"
                          />
                          <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                            1000+
                          </h3>
                          <p className="!mb-0">Completed Projects</p>
                        </div>
                        {/* <!--/column --> */}
                        <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                          <img
                            src="../../assets/img/icons/solid/bar-chart.svg"
                            className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mb-3 m-[0_auto]"
                            alt="image"
                          />
                          <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                            4x
                          </h3>
                          <p className="!mb-0">Revenue Growth</p>
                        </div>
                        {/* <!--/column --> */}
                        <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                          <img
                            src="../../assets/img/icons/solid/employees.svg"
                            className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mb-3 m-[0_auto]"
                            alt="image"
                          />
                          <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                            99.7%
                          </h3>
                          <p className="!mb-0">Customer Satisfaction</p>
                        </div>
                        {/* <!--/column --> */}
                      </div>
                      {/* <!--/.row --> */}
                    </div>
                    {/* <!-- /column --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
              </div>
              {/* <!--/.card-body --> */}
            </div>
            {/* <!--/.card --> */}
          </div>
          {/* <!-- /.container-card --> */}
          <div className="container">
            <div className="itemgrid mb-20">
              <div className="flex flex-wrap mx-[-15px] isotope mt-[-8rem]">
                <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="!text-[.85rem] !leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon !mb-0 relative p-0 border-0">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum id ligula porta.
                          Cras mattis consectetur.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Coriss Ambady
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Financial Analyst
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="!text-[.85rem] !leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon !mb-0 relative p-0 border-0">
                        <p>
                          “Fusce dapibus, tellus ac cursus tortor mauris
                          condimentum fermentum massa justo sit amet purus sit
                          amet fermentum.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Cory Zamora
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Marketing Specialist
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="!text-[.85rem] !leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon !mb-0 relative p-0 border-0">
                        <p>
                          “Curabitur blandit tempus porttitor. Vivamus sagittis
                          lacus vel augue laoreet rutrum faucibus dolor eu
                          rutrum. Nulla vitae libero.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Nikolas Brooten
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">Sales Manager</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="!text-[.85rem] !leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon !mb-0 relative p-0 border-0">
                        <p>
                          “Etiam adipiscing tincidunt elit convallis felis
                          suscipit ut. Phasellus rhoncus eu tincidunt auctor
                          nullam rutrum, pharetra augue.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Coriss Ambady
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Financial Analyst
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.grid-view --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section id="snippet-14" className="wrapper !bg-[#ffffff] ">
          <div
            className="wrapper image-wrapper bg-image bg-overlay text-white mb-[3.5rem] xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]
      "
            data-image-src="../../assets/img/photos/bg32.jpg"
          >
            <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24 !text-center">
              <i className="icn-flower text-white xl:text-[1.5rem] text-[calc(1.275rem_+_0.3vw)] opacity-50 before:content-['\e907'] font-CustomFont"></i>
              <div className="flex flex-wrap mx-[-15px] mt-3">
                <div className="xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <div
                    className="swiper-container dots-light dots-closer !mb-6 relative z-10"
                    data-margin="30"
                    data-dots="true"
                  >
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <blockquote className="border-0 !text-[1.2rem] !mb-0 m-[0_0_1rem] !leading-[1.7] font-medium">
                            <p>
                              “Fusce dapibus tellus ac cursus commodo, tortor
                              mauris condimentum nibh fermentum massa, justo sit
                              amet vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Cras mattis
                              consectetur purus.”
                            </p>
                            <div className="flex items-center text-left justify-center">
                              <div className="info p-0">
                                <h6 className="mb-0 text-white !text-[.85rem] !leading-[1.55] !tracking-[normal] font-semibold">
                                  Julia & David
                                </h6>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <blockquote className="border-0 !text-[1.2rem] !mb-0 m-[0_0_1rem] !leading-[1.7] font-medium">
                            <p>
                              “Fusce dapibus tellus ac cursus commodo, tortor
                              mauris condimentum nibh fermentum massa, justo sit
                              amet vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Cras mattis
                              consectetur purus.”
                            </p>
                            <div className="flex items-center text-left justify-center">
                              <div className="info p-0">
                                <h6 className="mb-0 text-white !text-[.85rem] !leading-[1.55] !tracking-[normal] font-semibold">
                                  Jolene & Andrea
                                </h6>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide">
                          <blockquote className="border-0 !text-[1.2rem] !mb-0 m-[0_0_1rem] !leading-[1.7] font-medium">
                            <p>
                              “Fusce dapibus tellus ac cursus commodo, tortor
                              mauris condimentum nibh fermentum massa, justo sit
                              amet vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Cras mattis
                              consectetur purus.”
                            </p>
                            <div className="flex items-center text-left justify-center">
                              <div className="info p-0">
                                <h6 className="mb-0 text-white !text-[.85rem] !leading-[1.55] !tracking-[normal] font-semibold">
                                  Eve & Will
                                </h6>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* <!--/.swiper-slide --> */}
                      </div>
                      {/* <!--/.swiper-wrapper --> */}
                    </div>
                    {/* <!--/.swiper --> */}
                  </div>
                  {/* <!-- /.swiper-container --> */}
                </div>
                {/* <!-- /column --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-15"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div
            className="wrapper image-wrapper bg-image bg-overlay mb-14 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem] bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
            data-image-src="../../assets/img/photos/bg35.jpg"
          >
            <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
              <h2 className="text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] leading-[1.3] mb-4 !text-center text-white">
                Happy Customers
              </h2>
              <div
                className="swiper-container dots-closer dots-light dots-light-75"
                data-margin="0"
                data-dots="true"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <h5 className="!mb-0">Coriss Ambady</h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Financial Analyst
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <h5 className="!mb-0">Cory Zamora</h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Marketing Specialist
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <h5 className="!mb-0">Nikolas Brooten</h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Sales Manager
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <h5 className="!mb-0">Coriss Ambady</h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Financial Analyst
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <h5 className="!mb-0">Jackie Sanders</h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Investment Planner
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!text-[0.85rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info p-0">
                                  <h5 className="!mb-0">Laura Widerski</h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Sales Specialist
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
              {/* <!-- /.swiper-container --> */}
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-16"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="card !bg-[#edf2fc] !rounded-[0.8rem]">
              <div className="card-body py-[4.5rem] xl:!px-0 lg:!px-0 px-[40px]">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                  <div className="lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%]">
                    <h2 className="text-[0.8rem] uppercase text-[#605dba] !mb-3 !leading-[1.35] tracking-[0.02rem]">
                      Happy Customers
                    </h2>
                    <h3 className="xl:text-[1.8rem] text-[calc(1.305rem_+_0.66vw)] !leading-[1.3] font-semibold mb-10 xxl:!px-10">
                      Don't take our word for it. See what customers are saying
                      about us.
                    </h3>
                  </div>
                  {/* <!-- /column --> */}
                </div>
                {/* <!-- /.row --> */}
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
                  <div className="lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto hidden xl:flex lg:flex xl:px-[35px] lg:px-[20px]">
                    <div className="img-mask mask-3">
                      <img
                        src="../../assets/img/photos/about28.jpg"
                        srcset="../../assets/img/photos/about28@2x.jpg 2x"
                        alt="image"
                      />
                    </div>
                  </div>
                  {/* <!--/column --> */}
                  <div className="lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full mr-auto xl:px-[35px] lg:px-[20px]">
                    <div
                      className="swiper-container dots-start dots-closer !mb-6 relative z-10"
                      data-margin="30"
                      data-dots="true"
                    >
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!pl-0 !text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum ligula porta
                                felis euismod semper. Cras justo odio
                                consectetur nulla dapibus curabitur blandit
                                faucibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                    Coriss Ambady
                                  </h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Financial Analyst
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!--/.swiper-slide --> */}
                          <div className="swiper-slide">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!pl-0 !text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum ligula porta
                                felis euismod semper. Cras justo odio
                                consectetur nulla dapibus curabitur blandit
                                faucibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                    Cory Zamora
                                  </h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Marketing Specialist
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!--/.swiper-slide --> */}
                          <div className="swiper-slide">
                            <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                            <blockquote className="!pl-0 !text-[1rem] !leading-[1.7] font-medium m-[0_0_1rem] !mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum ligula porta
                                felis euismod semper. Cras justo odio
                                consectetur nulla dapibus curabitur blandit
                                faucibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <div className="info !pl-0">
                                  <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                    Nikolas Brooten
                                  </h5>
                                  <p className="!mb-0 text-[0.8rem]">
                                    Sales Manager
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!--/.swiper-slide --> */}
                        </div>
                        {/* <!--/.swiper-wrapper --> */}
                      </div>
                      {/* <!-- /.swiper --> */}
                    </div>
                    {/* <!-- /.swiper-container --> */}
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/.card-body --> */}
            </div>
            {/* <!--/.card --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-17"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-11/12 lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center !relative">
                <img
                  src="../../assets/img/svg/doodle1.svg"
                  className="h-9 !absolute hidden xl:block lg:block"
                  style={{ top: "2%", left: "9%" }}
                  alt="image"
                />
                <img
                  src="../../assets/img/svg/doodle10.svg"
                  className="h-7 absolute hidden xl:block lg:block"
                  style={{ top: "-45%", left: "-17%" }}
                  alt="image"
                />
                <img
                  src="../../assets/img/svg/doodle11.svg"
                  className="!h-[4rem] absolute hidden xl:block lg:block"
                  style={{ top: "-40%", right: "-15%" }}
                  alt="image"
                />
                <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                  Happy Customers
                </h2>
                <h3 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] mb-12 xl:!px-10 xxl:!px-16">
                  Don't take our word for it. See what{" "}
                  <span className="text-gradient gradient-7">customers</span>{" "}
                  are saying about us.
                </h3>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="itemgrid">
              <div className="flex flex-wrap mx-[-15px] isotope mt-[-30px]">
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card !shadow-none !rounded-[0.8rem] !bg-[#f0f0f8]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum id ligula porta
                          felis euismod semper. Cras justo odio dapibus
                          facilisis sociis natoque penatibus.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Coriss Ambady
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Financial Analyst
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card !shadow-none !rounded-[0.8rem] !bg-[#edf9f6]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Fusce dapibus, tellus ac cursus tortor mauris
                          condimentum fermentum massa justo sit amet. Vivamus
                          sagittis lacus vel augue laoreet rutrum faucibus dolor
                          auctor. Cras mattis consectetur purus sit amet
                          fermentum. Aenean lacinia bibendum nulla sed
                          consectetur.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Cory Zamora
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Marketing Specialist
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fef4f2]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Curabitur blandit tempus porttitor. Vivamus sagittis
                          lacus vel augue laoreet rutrum faucibus dolor auctor.
                          Nullam quis risus eget porta ac consectetur
                          vestibulum. Donec sed odio dui consectetur adipiscing
                          elit.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Nikolas Brooten
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">Sales Manager</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fbf1f4]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Etiam adipiscing tincidunt elit convallis felis
                          suscipit ut. Phasellus rhoncus tincidunt auctor.
                          Nullam eu sagittis mauris. Donec non dolor ac elit
                          aliquam tincidunt at at sapien. Aenean tortor libero
                          condimentum ac laoreet vitae.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Coriss Ambady
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Financial Analyst
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card !shadow-none !rounded-[0.8rem] !bg-[#edf2fc]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Maecenas sed diam eget risus varius blandit sit amet
                          non magna. Cum sociis natoque penatibus magnis dis
                          montes, nascetur ridiculus mus. Donec sed odio dui.
                          Nulla vitae elit libero a pharetra.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Jackie Sanders
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Investment Planner
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
                <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                  <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fff8ee]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                        <p>
                          “Donec id elit non mi porta gravida at eget metus.
                          Nulla vitae elit libero, a pharetra augue. Cum sociis
                          natoque penatibus et magnis dis parturient montes,
                          nascetur ridiculus mus.”
                        </p>
                        <div className="flex items-center text-left">
                          <div className="info !pl-0">
                            <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                              Laura Widerski
                            </h5>
                            <p className="!mb-0 text-[0.8rem]">
                              Sales Specialist
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/column --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.grid-view --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section
          id="snippet-18"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-[12.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] md:pb-[17.5rem]">
            <section className="section-frame xxl:!mx-12">
              <div
                className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]"
                data-image-src="../../assets/img/photos/bg23.png"
              >
                <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="md:w-10/12 lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                      <h3 className="text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.25] xl:text-[2.2rem] mb-10 xxl:!px-10">
                        Don't take our word for it. See what customers are
                        saying about us.
                      </h3>
                    </div>
                    {/* <!-- /column --> */}
                  </div>
                  {/* <!-- /.row --> */}
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="itemgrid xl:w-11/12 lg:w-11/12 md:w-11/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto xl:!mb-[-17.5rem] lg:!mb-[-17.5rem]">
                      <div className="flex flex-wrap mx-[-15px] isotope mt-[-30px]">
                        <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                            <div className="card-body flex-[1_1_auto] p-[40px]">
                              <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                              <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                <p>
                                  “Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus dolor auctor. Vestibulum id
                                  ligula porta felis euismod semper. Cras justo
                                  odio dapibus facilisis sociis.”
                                </p>
                                <div className="flex items-center text-left">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Coriss Ambady
                                    </h5>
                                    <p className="!mb-0 text-[.8rem]">
                                      Financial Analyst
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!--/column --> */}
                        <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                            <div className="card-body flex-[1_1_auto] p-[40px]">
                              <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                              <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                <p>
                                  “Fusce dapibus, tellus ac cursus tortor mauris
                                  condimentum fermentum massa justo sit amet.
                                  Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus dolor auctor. Cras mattis
                                  consectetur purus sit amet fermentum.”
                                </p>
                                <div className="flex items-center text-left">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Cory Zamora
                                    </h5>
                                    <p className="!mb-0 text-[.8rem]">
                                      Marketing Specialist
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!--/column --> */}
                        <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                            <div className="card-body flex-[1_1_auto] p-[40px]">
                              <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                              <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                <p>
                                  “Curabitur blandit tempus porttitor. Vivamus
                                  sagittis lacus vel augue laoreet rutrum
                                  faucibus dolor auctor. Nullam quis risus eget
                                  porta ac consectetur vestibulum. Donec sed
                                  odio dui consectetur.”
                                </p>
                                <div className="flex items-center text-left">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Nikolas Brooten
                                    </h5>
                                    <p className="!mb-0 text-[.8rem]">
                                      Sales Manager
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!--/column --> */}
                        <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                            <div className="card-body flex-[1_1_auto] p-[40px]">
                              <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                              <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                <p>
                                  “Etiam adipiscing tincidunt elit convallis
                                  felis suscipit ut. Phasellus rhoncus tincidunt
                                  auctor. Nullam eu sagittis mauris. Donec non
                                  dolor ac elit aliquam tincidunt at at sapien.”
                                </p>
                                <div className="flex items-center text-left">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Coriss Ambady
                                    </h5>
                                    <p className="!mb-0 text-[.8rem]">
                                      Financial Analyst
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!--/column --> */}
                        <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                            <div className="card-body flex-[1_1_auto] p-[40px]">
                              <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                              <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                <p>
                                  “Maecenas sed diam eget risus varius blandit
                                  sit amet non magna. Cum sociis natoque
                                  penatibus magnis dis montes, nascetur
                                  ridiculus mus. Donec sed odio dui.”
                                </p>
                                <div className="flex items-center text-left">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Jackie Sanders
                                    </h5>
                                    <p className="!mb-0 text-[.8rem]">
                                      Investment Planner
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!--/column --> */}
                        <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                          <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                            <div className="card-body flex-[1_1_auto] p-[40px]">
                              <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                              <blockquote className="!text-[0.85rem] !leading-[1.7] !font-medium pl-4 icon !mb-0 m-[0_0_1rem] relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                                <p>
                                  “Donec id elit non mi porta gravida at eget
                                  metus. Nulla vitae elit libero, a pharetra
                                  augue. Cum sociis natoque penatibus et magnis
                                  dis parturient montes, nascetur.”
                                </p>
                                <div className="flex items-center text-left">
                                  <div className="info !pl-0">
                                    <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                      Laura Widerski
                                    </h5>
                                    <p className="!mb-0 text-[.8rem]">
                                      Sales Specialist
                                    </p>
                                  </div>
                                </div>
                              </blockquote>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!--/column --> */}
                      </div>
                      {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.grid-view --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
              </div>
              {/* <!-- /.wrapper --> */}
            </section>
            {/* <!-- /section --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />
      {/* <!-- /section --> */}
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#3f78e0] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#3f78e0] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
      <Script
        src="/assets/js/plugins.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("El script plugins.js se ha cargado.");
        }}
      />
      <Script
        src="/assets/js/theme.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("El script plugins.js se ha cargado.");
        }}
      />
    </>
  );
}
