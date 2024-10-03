import Foother from "@/components/foother/Foother";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
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
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
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
            {/* <!-- /column --> */}
          </div>
          {/* <!-- /.row --> */}
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
                  <h4 className="text-[1rem] tracking-[-0.03em]">24/7 Support</h4>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
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
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
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
                  <h4 className="text-[1rem] tracking-[-0.03em]">Daily Updates</h4>
                  <p className="!mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
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
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
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
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
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
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
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
      <Foother />
    </>
  );
}
