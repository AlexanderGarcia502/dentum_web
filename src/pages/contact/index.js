import Script from "next/script";
import Link from "next/link";
import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";

export default function Contact() {
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
          <div className="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-3 text-[#343f52]">
                  Get in Touch
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb  flex flex-wrap bg-[none] p-0 !rounded-none list-none mb-[20px]">
                    <li className="breadcrumb-item flex text-[#60697b]">
                      <a
                        className="text-[#60697b] hover:text-[#3f78e0]"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex text-[#60697b] pl-2 before:font-normal before:flex before:items-center before:text-[rgba(96,105,123,.35)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Contact
                    </li>
                  </ol>
                </nav>
                {/* <!-- /nav --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]  angled upper-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px] mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] mb-24 items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative">
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
                        src="./assets/img/photos/g5.jpg"
                        srcSet="./assets/img/photos/g5@2x.jpg 2x"
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
                            src="./assets/img/photos/g6.jpg"
                            srcSet="./assets/img/photos/g6@2x.jpg 2x"
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
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-8">
                  Convinced yet? Let's make something great together.
                </h2>
                <div className="flex flex-row">
                  <div>
                    <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                      {" "}
                      <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                    </div>
                  </div>
                  <div>
                    <h5 className="!mb-1">Address</h5>
                    <address className=" not-italic leading-[inherit] mb-4">
                      Moonshine St. 14/05 Light City,{" "}
                      <br className="hidden xl:block lg:block md:block" />
                      London, United Kingdom
                    </address>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                      {" "}
                      <i className="uil uil-phone-volume before:content-['\ec50']"></i>{" "}
                    </div>
                  </div>
                  <div>
                    <h5 className="!mb-1">Phone</h5>
                    <p>00 (123) 456 78 90</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <div className="icon text-[#3f78e0]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                      {" "}
                      <i className="uil uil-envelope before:content-['\eac8']"></i>{" "}
                    </div>
                  </div>
                  <div>
                    <h5 className="!mb-1">E-mail</h5>
                    <p className="!mb-0">
                      <a
                        href="mailto:sandbox@email.com"
                        className="text-[#60697b]"
                      >
                        sandbox@email.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                  Drop Us a Line
                </h2>
                <p className="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10">
                  Reach out to us from our contact form and we will get back to
                  you shortly.
                </p>
                <form
                  className="contact-form needs-validation"
                  method="post"
                  action="./assets/php/contact.php"
                  novalidate
                >
                  <div className="messages"></div>
                  <div className="flex flex-wrap mx-[-10px]">
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                          placeholder="Jane"
                          required
                        />
                        <label
                          for="form_name"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          First Name *
                        </label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please enter your first name.{" "}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                          placeholder="Doe"
                          required
                        />
                        <label
                          for="form_lastname"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Last Name *
                        </label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please enter your last name.{" "}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                          placeholder="jane.doe@example.com"
                          required
                        />
                        <label
                          for="form_email"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Email *
                        </label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please provide a valid email address.{" "}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-select-wrapper mb-4">
                        <select
                          className="form-select"
                          id="form-select"
                          name="department"
                          required
                        >
                          <option selected disabled value="">
                            Select a department
                          </option>
                          <option value="Sales">Sales</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Customer Support">
                            Customer Support
                          </option>
                        </select>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please select a department.{" "}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <textarea
                          id="form_message"
                          name="message"
                          className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                          placeholder="Your message"
                          style={{ height: "150px" }}
                          required
                        ></textarea>
                        <label
                          for="form_message"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          Message *
                        </label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please enter your messsage.{" "}
                        </div>
                      </div>
                    </div>
                    {/* <!-- /column --> */}
                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                      <input
                        type="submit"
                        className="btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                        value="Send message"
                      />
                      <p className="text-[#aab0bc]">
                        <strong>*</strong> These fields are required.
                      </p>
                    </div>
                    {/* <!-- /column --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </form>
                {/* <!-- /form --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />
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
