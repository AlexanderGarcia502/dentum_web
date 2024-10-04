import '../../public/assets/fonts/unicons/unicons.css'
import '../../public/assets/css/plugins.css'
import '../../public/assets/css/style.css'
import '../../public/assets/css/colors/navy.css'

import Script from 'next/script';

export default function Home() {


  return (
    <div>
      <div className="grow shrink-0">
        <header className="relative wrapper !bg-[#ffffff] ">
          <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-light">
            <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
              <div className="navbar-brand w-full">
                <a href="./index.html">
                  <img
                    src="./assets/img/logo-dark.png"
                    srcSet="./assets/img/logo-dark@2x.png 2x"
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
                      <a
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Sobre nosotros
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Servicios
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Testimonios
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-mega">
                      <a
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Contáctanos
                      </a>
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
                        info@email.com
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
                  <li className="nav-item">
                    <a
                      className="nav-link hover:!text-[#343f52]"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-info"
                    >
                      <i className="uil uil-info-circle before:content-['\eb99'] !text-[1.1rem]"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link hover:!text-[#343f52]"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-search"
                    >
                      <i className="uil uil-search before:content-['\eca5'] !text-[1.1rem]"></i>
                    </a>
                  </li>
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
          {/* <!--/.modal --> */}
          <div
            className="offcanvas offcanvas-end text-inverse !text-[#cacaca] opacity-100"
            id="offcanvas-info"
            data-bs-scroll="true"
          >
            <div className="offcanvas-header flex flex-row items-center justify-between p-[1.5rem]">
              <h3 className="text-white xl:!text-[1.5rem] text-[calc(1.275rem_+_0.3vw)] !leading-[1.4] mb-0">
                Sandbox
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white mr-[-0.5rem] m-0 p-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body !pb-[1.5rem]">
              <div className="widget mb-8">
                <p>
                  Sandbox is a multipurpose HTML5 template with various layouts
                  which will be a great solution htmlFor your business.
                </p>
              </div>
              {/* <!-- /.widget --> */}
              <div className="widget mb-8">
                <h4 className="widget-title text-white mb-[0.75rem] !text-[.95rem] !leading-[1.45]">
                  Contact Info
                </h4>
                <address className=" not-italic leading-[inherit] mb-[1rem]">
                  {" "}
                  Moonshine St. 14/05 <br /> Light City, London{" "}
                </address>
                <a
                  className="text-[#cacaca] hover:!text-[#343f52]"
                  href="mailto:first.last@email.com"
                >
                  info@email.com
                </a>
                <br /> 00 (123) 456 78 90
              </div>
              {/* <!-- /.widget --> */}
              <div className="widget mb-8">
                <h4 className="widget-title text-white mb-[0.75rem] !text-[.95rem] !leading-[1.45]">
                  Learn More
                </h4>
                <ul className="list-unstyled pl-0">
                  <li>
                    <a
                      className="text-[#cacaca] hover:!text-[#343f52]"
                      href="#"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="mt-[.35rem]">
                    <a
                      className="text-[#cacaca] hover:!text-[#343f52]"
                      href="#"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li className="mt-[.35rem]">
                    <a
                      className="text-[#cacaca] hover:!text-[#343f52]"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mt-[.35rem]">
                    <a
                      className="text-[#cacaca] hover:!text-[#343f52]"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.widget --> */}
              <div className="widget">
                <h4 className="widget-title text-white mb-[0.75rem] !text-[.95rem] !leading-[1.45]">
                  Follow Us
                </h4>
                <nav className="nav social social-white">
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
              {/* <!-- /.widget --> */}
            </div>
            {/* <!-- /.offcanvas-body --> */}
          </div>
          {/* <!-- /.offcanvas --> */}
          <div
            className="offcanvas offcanvas-top !bg-[#ffffff] "
            id="offcanvas-search"
            data-bs-scroll="true"
          >
            <div className="container flex flex-row py-6">
              <form className=" search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[1rem] before:text-[#343f52] before:z-[1] before:right-auto before:top-2/4 before:font-Unicons w-full before:left-0 focus:!outline-offset-0 focus:outline-0">
                <input
                  id="search-form1"
                  type="text"
                  className="form-control text-[0.8rem] !shadow-none pl-[1.75rem] !pr-[.75rem] border-0 bg-inherit m-0 block w-full font-medium leading-[1.7] text-[#60697b] px-4 py-[0.6rem] rounded-[0.4rem] focus:!outline-offset-0 focus:outline-0"
                  placeholder="Type keyword and hit enter"
                />
              </form>
              <button
                type="button"
                className="btn-close leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out p-0 border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(0,0,0,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.offcanvas --> */}
        </header>
        {/* <!-- /header --> */}
        <section
          className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-[rgba(246,247,249,1)] bg-[center_center] bg-no-repeat bg-scroll relative z-0 xsm:!bg-none md:min-h-[25rem] sm:min-h-[20rem] xsm:min-h-[20rem]"
          data-image-src="./assets/img/photos/bg37.jpg"
        >
          <div className="container pt-28 pb-20 sm:!py-28 xxl:!py-40">
            <div className="flex flex-wrap mx-[-15px]">
              <div
                className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xsm:!text-center text-left"
                data-cues="slideInDown"
                data-group="page-title"
                data-interval="-200"
                data-delay="500"
              >
                <h2 className="xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] tracking-[-0.035em] mb-4 mt-0 xl:!mt-5 lg:!mt-5 xl:pr-5 xxl:pr-0">
                  We bring solutions to make life{" "}
                  <span className="underline-3 style-3 yellow !relative z-[1] after:content-[''] after:absolute after:z-[-1] after:block after:[background-size:100%_100%] after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4">
                    easier
                  </span>
                </h2>
                <p className="lead text-[1.15rem] !leading-[1.5] font-medium mb-7 lg:pr-5 xl:pr-5 xxl:pr-0">
                  We are a creative company that focuses on long term
                  relationships with customers.
                </p>
                <div>
                  <a
                    href="#"
                    className="btn btn-lg btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!-- /.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
                  What We Do?
                </h2>
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12">
                  The service we offer is specifically designed to meet your
                  needs.
                </h3>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px]">
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/telephone-3.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] text-blue mr-5 mt-1"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      24/7 Support
                    </h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/shield.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5 mt-1"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Secure Payments
                    </h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/cloud-computing-2.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#f78b77] text-orange mr-5"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Daily Updates
                    </h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/analytics.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#d16b86] text-pink mr-5"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Market Research
                    </h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/chat-2.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green mr-5 mt-1"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Social Engagement
                    </h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/megaphone.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#747ed1] text-purple mr-5 mt-1"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Content Marketing
                    </h4>
                    <p className="!mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper  bg-[rgba(246,247,249,1)]  !relative min-h-[60vh] lg:flex items-center">
          <div
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!absolute lg:!absolute top-0 start-0 image-wrapper bg-image bg-cover !h-full bg-[center_center] bg-no-repeat bg-scroll z-0 min-h-[25rem] xl:h-auto lg:h-auto"
            data-image-src="./assets/img/photos/bg38.jpg"
          >
            <div className="divider text-[#f6f7f9] divider-v-end hidden xl:block lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
                <g />
                <g>
                  <g>
                    <polygon
                      fill="currentColor"
                      points="48 0 0 0 48 1200 54 1200 54 0 48 0"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="container">
            <div className="flex flex-wrap mx-0">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full ml-auto">
                <div className="pt-[4.5rem] pb-20 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] lg:!py-[6rem] xl:!py-[6rem] lg:!pl-20 xl:!pl-20 xxl:!pr-24">
                  <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
                    How It Works?
                  </h2>
                  <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-7">
                    Here are the 3 working steps on success.
                  </h3>
                  <div className="flex flex-row mb-5">
                    <div>
                      <img
                        src="./assets/img/icons/lineal/light-bulb.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] mr-5 mt-1"
                        alt="image"
                      />
                    </div>
                    <div>
                      <h4 className="text-[1rem] tracking-[-0.03em]">
                        Collect Ideas
                      </h4>
                      <p className="!mb-0">
                        Nulla vitae elit libero pharetra augue dapibus. Praesent
                        commodo cursus.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row mb-5">
                    <div>
                      <img
                        src="./assets/img/icons/lineal/pie-chart-2.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green mr-5 mt-1"
                        alt="image"
                      />
                    </div>
                    <div>
                      <h4 className="text-[1rem] tracking-[-0.03em]">
                        Data Analysis
                      </h4>
                      <p className="!mb-0">
                        Vivamus sagittis lacus vel augue laoreet. Etiam porta
                        sem malesuada magna.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <img
                        src="./assets/img/icons/lineal/design.svg"
                        className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5 mt-1"
                        alt="image"
                      />
                    </div>
                    <div>
                      <h4 className="text-[1rem] tracking-[-0.03em]">
                        Magic Touch
                      </h4>
                      <p className="!mb-0">
                        Cras mattis consectetur purus sit amet. Aenean lacinia
                        bibendum nulla sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper bg-[rgba(255,255,255)] opacity-100">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="lg:w-10/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
                  Case Studies
                </h2>
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-10">
                  Our awesome projects with creative ideas and great design.
                </h3>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div
              className="swiper-container blog grid-view mb-10 relative z-10"
              data-margin="30"
              data-dots="true"
              data-items-xl="3"
              data-items-md="2"
              data-items-xs="1"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <article>
                      <figure className="overlay overlay-1 hover-scale rounded !mb-6 group">
                        <a href="#">
                          {" "}
                          <img
                            className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                            src="./assets/img/photos/b4.jpg"
                            alt="image"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                      <div className="post-header">
                        <h2 className="post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            className="text-[#343f52] hover:text-[#343f52]"
                            href="./blog-post.html"
                          >
                            Ligula tristique quis risus
                          </a>
                        </h2>
                      </div>
                      {/* <!-- /.post-header --> */}
                      <div className="post-footer">
                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none">
                          <li className="post-date inline-block">
                            <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                            <span>14 Apr 2022</span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]">
                            <a
                              className="text-[#aab0bc] hover:text-[#343f52]"
                              href="#"
                            >
                              <i className="uil uil-file-alt !text-[.75rem]  pr-[0.2rem] align-[-.05rem] before:content-['\eaec']"></i>
                              Coding
                            </a>
                          </li>
                        </ul>
                        {/* <!-- /.post-meta --> */}
                      </div>
                      {/* <!-- /.post-footer --> */}
                    </article>
                    {/* <!-- /article --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <article>
                      <figure className="overlay overlay-1 hover-scale rounded !mb-6 group">
                        <a href="#">
                          {" "}
                          <img
                            className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                            src="./assets/img/photos/b5.jpg"
                            alt="image"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                      <div className="post-header">
                        <h2 className="post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            className="text-[#343f52] hover:text-[#343f52]"
                            href="./blog-post.html"
                          >
                            Nullam id dolor elit id nibh
                          </a>
                        </h2>
                      </div>
                      {/* <!-- /.post-header --> */}
                      <div className="post-footer">
                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none">
                          <li className="post-date inline-block">
                            <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                            <span>29 Mar 2022</span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]">
                            <a
                              className="text-[#aab0bc] hover:text-[#343f52]"
                              href="#"
                            >
                              <i className="uil uil-file-alt !text-[.75rem]  pr-[0.2rem] align-[-.05rem] before:content-['\eaec']"></i>
                              Workspace
                            </a>
                          </li>
                        </ul>
                        {/* <!-- /.post-meta --> */}
                      </div>
                      {/* <!-- /.post-footer --> */}
                    </article>
                    {/* <!-- /article --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <article>
                      <figure className="overlay overlay-1 hover-scale rounded !mb-6 group">
                        <a href="#">
                          {" "}
                          <img
                            className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                            src="./assets/img/photos/b6.jpg"
                            alt="image"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                      <div className="post-header">
                        <h2 className="post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            className="text-[#343f52] hover:text-[#343f52]"
                            href="./blog-post.html"
                          >
                            Ultricies fusce porta elit
                          </a>
                        </h2>
                      </div>
                      {/* <!-- /.post-header --> */}
                      <div className="post-footer">
                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none">
                          <li className="post-date inline-block">
                            <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                            <span>26 Feb 2022</span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]">
                            <a
                              className="text-[#aab0bc] hover:text-[#343f52]"
                              href="#"
                            >
                              <i className="uil uil-file-alt !text-[.75rem]  pr-[0.2rem] align-[-.05rem] before:content-['\eaec']"></i>
                              Meeting
                            </a>
                          </li>
                        </ul>
                        {/* <!-- /.post-meta --> */}
                      </div>
                      {/* <!-- /.post-footer --> */}
                    </article>
                    {/* <!-- /article --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <article>
                      <figure className="overlay overlay-1 hover-scale rounded !mb-6 group">
                        <a href="#">
                          {" "}
                          <img
                            className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                            src="./assets/img/photos/b7.jpg"
                            alt="image"
                          />
                        </a>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                          <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                            Read More
                          </h5>
                        </figcaption>
                      </figure>
                      <div className="post-header">
                        <h2 className="post-title h3 !mb-3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            className="text-[#343f52] hover:text-[#343f52]"
                            href="./blog-post.html"
                          >
                            Morbi leo risus porta eget
                          </a>
                        </h2>
                      </div>
                      <div className="post-footer">
                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none">
                          <li className="post-date inline-block">
                            <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                            <span>7 Jan 2022</span>
                          </li>
                          <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.7rem]">
                            <a
                              className="text-[#aab0bc] hover:text-[#343f52]"
                              href="#"
                            >
                              <i className="uil uil-file-alt !text-[.75rem]  pr-[0.2rem] align-[-.05rem] before:content-['\eaec']"></i>
                              Business Tips
                            </a>
                          </li>
                        </ul>
                        {/* <!-- /.post-meta --> */}
                      </div>
                      {/* <!-- /.post-footer --> */}
                    </article>
                    {/* <!-- /article --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                </div>
                {/* <!-- /.swiper-wrapper --> */}
              </div>
              {/* <!-- /.swiper --> */}
            </div>
            {/* <!-- /.swiper-container --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper  bg-[rgba(246,247,249,1)]  !relative min-h-[60vh] lg:flex items-center">
          <div
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!absolute lg:!absolute top-0 !right-0 image-wrapper bg-image !h-full bg-cover bg-[center_center] bg-no-repeat bg-scroll z-0 min-h-[25rem] xl:h-auto lg:h-auto"
            data-image-src="./assets/img/photos/bg39.jpg"
          >
            <div className="divider text-[#f6f7f9] divider-v-start hidden xl:block  lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
                <g />
                <g>
                  <g>
                    <polygon
                      fill="currentColor"
                      points="6 0 0 0 0 1200 6 1200 54 0 6 0"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="container">
            <div className="flex flex-wrap mx-0">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                <div className="pt-[4.5rem] pb-20 xl:pb-[7rem] lg:pb-[7rem] md:pb-[7rem] xl:!py-[6rem] lg:!py-[6rem] xl:pr-20 lg:pr-20">
                  <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                    Our Solutions
                  </h2>
                  <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-5">
                    Just sit & relax while we take care of your business needs.
                  </h3>
                  <p className="!mb-6">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Praesent commodo cursus.
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Praesent commodo cursus magna.
                  </p>
                  <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px]">
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <h3 className="counter counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none xl:text-[2.2rem] !mb-1">
                        99.7%
                      </h3>
                      <h6 className="text-[0.85rem] !mb-1">
                        Customer Satisfaction
                      </h6>
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                    </div>
                    {/* <!--/column --> */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <h3 className="counter counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none xl:text-[2.2rem] !mb-1">
                        4x
                      </h3>
                      <h6 className="text-[0.85rem] !mb-1">New Visitors</h6>
                      <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five"></span>
                    </div>
                    {/* <!--/column --> */}
                  </div>
                  {/* <!--/.row --> */}
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper bg-[rgba(255,255,255)] opacity-100">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[80px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        src="./assets/img/photos/g14.jpg"
                        srcSet="./assets/img/photos/g14@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full !self-end mt-[25px]">
                    <figure className="rounded-[0.4rem]">
                      <img
                        className="rounded-[0.4rem]"
                        src="./assets/img/photos/g15.jpg"
                        srcSet="./assets/img/photos/g15@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                  {/* <!--/column --> */}
                  <div className="w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                    <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                      <img
                        className="!rounded-[.4rem]"
                        src="./assets/img/photos/g16.jpg"
                        srcSet="./assets/img/photos/g16@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[80px]">
                <h2 className="text-[0.75rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                  Who Are We?
                </h2>
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-5">
                  Company that believes in the power of creative strategy.
                </h3>
                <p className="!mb-6">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                  Aenean lacinia bibendum nulla sed.
                </p>
                <div className="flex flex-wrap mx-[-15px] mt-[-15px] xl:mx-[-20px]">
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                      <li className="relative pl-[1.25rem]">
                        <span>
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                        </span>
                        <span>
                          Aenean eu leo quam ornare curabitur blandit tempus.
                        </span>
                      </li>
                      <li className="relative pl-[1.25rem] mt-3">
                        <span>
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                        </span>
                        <span>
                          Nullam quis risus eget urna mollis ornare donec elit.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                      <li className="relative pl-[1.25rem]">
                        <span>
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                        </span>
                        <span>
                          Etiam porta sem malesuada magna mollis euismod.
                        </span>
                      </li>
                      <li className="relative pl-[1.25rem] mt-3">
                        <span>
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                        </span>
                        <span>
                          Fermentum massa vivamus faucibus amet euismod.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px]  mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] ">
              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[30px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/target.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] mr-5"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Our Vision
                    </h4>
                    <p className="!mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget. Fusce dapibus tellus.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[30px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/award-2.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green mr-5"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Our Mission
                    </h4>
                    <p className="!mb-2">
                      Maecenas faucibus mollis interdum. Vivamus sagittis lacus
                      vel augue laoreet. Sed posuere consectetur.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[30px]">
                <div className="flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/loyalty.svg"
                      className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow mr-5"
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="text-[1rem] tracking-[-0.03em]">
                      Our Values
                    </h4>
                    <p className="!mb-2">
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Praesent commodo cursus magna scelerisque.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
            <div className="flex flex-wrap mx-[-15px] !relative mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
              <figure
                className="!rounded-[.4rem] absolute hidden lg:block xl:block px-[15px]"
                style={{
                  top: '50%',
                  right: '0',
                  width: '45%',
                  height: 'auto',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                }}
              >
                <img
                  className="!rounded-[.4rem]"
                  src="./assets/img/photos/tei1.jpg"
                  srcSet="./assets/img/photos/tei1@2x.jpg 2x"
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
                      {/*<!-- /column -->*/}
                    </div>
                    {/*<!-- /.row -->*/}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.card --> */}
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 lg:w-8/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
                  Our Pricing
                </h2>
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-10 xl:!px-20">
                  We offer great prices and quality service htmlFor your business.
                </h3>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div className="pricing-wrapper mb-10 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem]">
              <div className="flex flex-wrap mx-0 mt-[-30px]">
                <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] mt-[30px] max-w-full">
                  <div className="pricing card !shadow-none">
                    <div className="card-body flex-[1_1_auto] p-[3rem_2rem]">
                      <h4 className="card-title tracking-[-0.03em]">
                        Basic Plan
                      </h4>
                      <div className="prices text-[#343f52]">
                        <div className="price !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">9</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                      </div>
                      {/* <!--/.prices --> */}
                      <ul className="pl-0 list-none bullet-green mt-7 !mb-8">
                        <li className="relative pl-[1.25rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>1</strong> Project{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>100K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>100MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-times absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\ed3b'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-times absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\ed3b'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-soft-navy rounded">
                        Choose Plan
                      </a>
                    </div>
                    {/* <!--/.card-body --> */}
                  </div>
                  {/* <!--/.pricing --> */}
                </div>
                {/* <!--/column --> */}
                <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] mt-[30px] max-w-full">
                  <div className="pricing card !shadow-none">
                    <div className="card-body flex-[1_1_auto] p-[3rem_2rem]">
                      <h4 className="card-title tracking-[-0.03em]">
                        Premium Plan
                      </h4>
                      <div className="prices text-[#343f52]">
                        <div className="price !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">19</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                      </div>
                      {/* <!--/.prices --> */}
                      <ul className="pl-0 list-none bullet-green mt-7 !mb-8">
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>5</strong> Projects{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>100K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>200MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-times absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#e2626b] rounded-[100%] top-[0.2rem] before:content-['\ed3b'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-soft-navy rounded">
                        Choose Plan
                      </a>
                    </div>
                    {/* <!--/.card-body --> */}
                  </div>
                  {/* <!--/.pricing --> */}
                </div>
                {/* <!--/column --> */}
                <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] mt-[30px] max-w-full">
                  <div className="pricing card  !bg-[rgba(246,247,249,1)]">
                    <div className="card-body flex-[1_1_auto] p-[3rem_2rem]">
                      <h4 className="card-title tracking-[-0.03em]">
                        Corporate Plan
                      </h4>
                      <div className="prices text-[#343f52]">
                        <div className="price !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">29</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                      </div>
                      {/* <!--/.prices --> */}
                      <ul className="pl-0 list-none bullet-green mt-7 !mb-8">
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>20</strong> Projects{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>300K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>500MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] rounded hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      >
                        Choose Plan
                      </a>
                    </div>
                    {/* <!--/.card-body --> */}
                  </div>
                  {/* <!--/.pricing --> */}
                </div>
                {/* <!--/column --> */}
                <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] mt-[30px] max-w-full">
                  <div className="pricing card !shadow-none">
                    <div className="card-body flex-[1_1_auto] p-[3rem_2rem]">
                      <h4 className="card-title tracking-[-0.03em]">
                        Community Plan
                      </h4>
                      <div className="prices text-[#343f52]">
                        <div className="price !justify-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">49</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                      </div>
                      {/* <!--/.prices --> */}
                      <ul className="pl-0 list-none bullet-green mt-7 !mb-8">
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>90</strong> Projects{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>900K</strong> API Access{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            <strong>900MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>{" "}
                          </span>
                        </li>
                        <li className="relative pl-[1.25rem] mt-[0.35rem]">
                          <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#45c4a0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-soft-navy rounded">
                        Choose Plan
                      </a>
                    </div>
                    {/* <!--/.card-body --> */}
                  </div>
                  {/* <!--/.pricing --> */}
                </div>
              </div>
              {/* <!--/.row --> */}
            </div>
            {/* <!--/.pricing-wrapper --> */}
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-11/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] xl:!px-5 lg:!px-5">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
                    <div className="flex flex-row">
                      <div>
                        <img
                          src="./assets/img/icons/lineal/check-list.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#343f52] text-blue mr-5 mt-1"
                          alt="image"
                        />
                      </div>
                      <div>
                        <h4 className="text-[1rem] tracking-[-0.03em]">
                          Can I cancel my subscription?
                        </h4>
                        <p className="!mb-0">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Etiam porta sem malesuada magna mollis euismod.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*<!-- /column -->*/}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
                    <div className="flex flex-row">
                      <div>
                        <img
                          src="./assets/img/icons/lineal/wallet.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#fab758] text-yellow mr-5 mt-1"
                          alt="image"
                        />
                      </div>
                      <div>
                        <h4 className="text-[1rem] tracking-[-0.03em]">
                          Which payment methods do you accept?
                        </h4>
                        <p className="!mb-0">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Etiam porta sem malesuada magna mollis euismod.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*<!-- /column -->*/}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
                    <div className="flex flex-row">
                      <div>
                        <img
                          src="./assets/img/icons/lineal/insurance.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#d16b86] text-pink mr-5 mt-1"
                          alt="image"
                        />
                      </div>
                      <div>
                        <h4 className="text-[1rem] tracking-[-0.03em]">
                          How can I manage my Account?
                        </h4>
                        <p className="!mb-0">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Etiam porta sem malesuada magna mollis euismod.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*<!-- /column -->*/}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
                    <div className="flex flex-row">
                      <div>
                        <img
                          src="./assets/img/icons/lineal/padlock.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#45c4a0] text-green mr-5 mt-1"
                          alt="image"
                        />
                      </div>
                      <div>
                        <h4 className="text-[1rem] tracking-[-0.03em]">
                          Is my credit card information secure?
                        </h4>
                        <p className="!mb-0">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Etiam porta sem malesuada magna mollis euismod.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*<!-- /column -->*/}
                </div>
                {/*<!-- /.row -->*/}
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <footer className="bg-[rgba(246,247,249,1)]">
        <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
          <div className="xl:flex lg:flex flex-row xl:!items-center lg:!items-center">
            <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] !mb-6 lg:!mb-0 xl:!mb-0 lg:pr-40 xl:pr-60 xxl:pr-[22.5rem]">
              Join our community by using our services and grow your business.
            </h3>
            <a
              href="#"
              className="btn btn-lg btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] rounded  !mb-0 whitespace-nowrap"
            >
              Try It For Free
            </a>
          </div>
          {/* <!--/div --> */}
          <hr className="mt-[3rem] mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" />
          <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget">
                <img
                  className="!mb-4"
                  src="./assets/img/logo-dark.png"
                  srcSet="./assets/img/logo-dark@2x.png 2x"
                  alt="image"
                />
                <p className="!mb-4">
                  © 2024 Sandbox. <br className="hidden xl:block lg:block" />
                  All rights reserved.
                </p>
                <nav className="nav social social-muted">
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] text-[#5daed5]"></i>
                  </a>
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] text-[#4470cf]"></i>
                  </a>
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] text-[#e94d88]"></i>
                  </a>
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] text-[#d53581]"></i>
                  </a>
                  <a
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href="#"
                  >
                    <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] text-[#c8312b]"></i>
                  </a>
                </nav>
                {/* <!-- /.social --> */}
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/*<!-- /column -->*/}
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget">
                <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                  Get in Touch
                </h4>
                <address className="xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a
                  className="text-[#60697b] hover:text-[#60697b]"
                  href="mailto:first.last@email.com"
                >
                  info@email.com
                </a>
                <br /> 00 (123) 456 78 90
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/*<!-- /column -->*/}
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget">
                <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                  Learn More
                </h4>
                <ul className="pl-0 list-none !mb-0">
                  <li>
                    <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mt-[0.35rem]">
                    <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                      Our Story
                    </a>
                  </li>
                  <li className="mt-[0.35rem]">
                    <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                      Projects
                    </a>
                  </li>
                  <li className="mt-[0.35rem]">
                    <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                      Terms of Use
                    </a>
                  </li>
                  <li className="mt-[0.35rem]">
                    <a className="text-[#60697b] hover:text-[#343f52]" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/*<!-- /column -->*/}
            <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget">
                <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                  Our Newsletter
                </h4>
                <p className="!mb-5">
                  Subscribe to our newsletter to get our news & deals delivered
                  to you.
                </p>
                <div className="newsletter-wrapper">
                  {/* <!-- Begin Mailchimp Signup Form --> */}
                  <div id="mc_embed_signup2">
                    <form
                      action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                      method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            className="required form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[#ffffff] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="Email Address"
                            id="mce-EMAIL2"
                          />
                          <label
                            className="!ml-[0.05rem] text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                            htmlFor="mce-EMAIL2"
                          >
                            Email Address
                          </label>
                          <input
                            type="submit"
                            value="Join"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !relative z-[2] focus:z-[5] hover:!transform-none border-0"
                          />
                        </div>
                        <div id="mce-responses2" className="clear">
                          <div
                            className="response"
                            id="mce-error-response2"
                            style={{
                              display: 'none',
                            }}
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response2"
                            style={{
                              display: 'none',
                            }}
                          ></div>
                        </div>{" "}
                        {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                        <div
                          style={{
                            position: "absolute",
                            left: "-5000px",
                          }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                            tabIndex="-1"
                            value=""
                          />
                        </div>
                        <div className="clear"></div>
                      </div>
                    </form>
                  </div>
                  {/* <!--End mc_embed_signup--> */}
                </div>
                {/* <!-- /.newsletter-wrapper --> */}
              </div>
              {/* <!-- /.widget --> */}
            </div>
            {/*{/*<!-- /column -->*/}
          </div>
          {/* <!--/.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </footer>
      {/* <!-- progress wrapper --> */}
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#605dba] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#605dba] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
      {/* <script src="./assets/js/plugins.js"></script> */}
      {/* <script src="./assets/js/theme.js"></script> */}
      <Script
        src="/assets/js/plugins.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log('El script plugins.js se ha cargado.');
        }}
      />
      <Script
        src="/assets/js/theme.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log('El script plugins.js se ha cargado.');
        }}
      />
    </div>
  );
}