import { Information } from "@/interfaces/enums/information";

export const Location = () => {
  return (
    <section className="wrapper !bg-[#ffffff] ">
      <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
              Nuestras Ubicaciones
            </h2>
            <p className="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10"></p>
            <ul className="nav nav-tabs nav-tabs-basic">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tab3-1"
                >
                  Chimaltenango
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">
                  Sacatepequez
                </a>{" "}
              </li>
            </ul>
            {/* <!-- /.nav-tabs --> */}
            <div className="tab-content mt-0">
              <div className="tab-pane fade show active" id="tab3-1">
                <div className="flex flex-wrap mx-0">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                    <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.918531471518!2d-90.81692506310931!3d14.660962492596031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85896dfc21477c29%3A0xf1c5cbf4aa638ab!2sCl%C3%ADnica%20Dental%20DENTUM%20-%20Chimaltenango!5e0!3m2!1ses!2sgt!4v1729148019856!5m2!1ses!2sgt"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "0",
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* <!-- /.map --> */}
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                    <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                          </div>
                        </div>
                        <div className="!self-start !justify-start">
                          <h5 className="!mb-1">Dirección</h5>
                          <address className=" not-italic leading-[inherit] mb-4">
                            3 Avenida 3-03, Chimaltenango 04001,{" "}
                            <br className="hidden xl:block lg:block md:block" />
                            Chimalenango, Guatemala
                          </address>
                        </div>
                      </div>
                      {/* <!--/div --> */}
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1">Teléfono</h5>
                          <p>
                            (502) 5565 - 7921 <br />
                          </p>
                        </div>
                      </div>
                      {/* <!--/div --> */}
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-envelope before:content-['\eac8']"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1">E-mail</h5>
                          <p className="!mb-0">
                            <a
                              href="mailto:sandbox@email.com"
                              className="text-[#60697b]"
                            >
                              {Information.EMAIL}
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <!--/div --> */}
                    </div>
                    {/* <!--/div --> */}
                  </div>
                  {/* <!--/column --> */}
                </div>
              </div>
              {/* <!--/.tab-pane --> */}
              <div className="tab-pane fade" id="tab3-2">
                <div className="flex flex-wrap mx-0">
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                    <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4750.634598368484!2d-90.66647915773585!3d14.608576128184152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890b9d1c7d9c59%3A0xf91e4a1f8d0a41f6!2sCentro%20Dental%20San%20Lucas!5e0!3m2!1ses!2sgt!4v1729149727408!5m2!1ses!2sgt"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "0",
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* <!-- /.map --> */}
                  </div>
                  {/* <!--/column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                    <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                          </div>
                        </div>
                        <div className="!self-start !justify-start">
                          <h5 className="!mb-1">Dirección</h5>
                          <address className=" not-italic leading-[inherit] mb-4">
                            Km 29.9 Carretera Interamericana San Lucas
                            Sacatepequez,{" "}
                            <br className="hidden xl:block lg:block md:block" />
                            Sacatepequez, Guatemala
                          </address>
                        </div>
                      </div>
                      {/* <!--/div --> */}
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1">Teléfono</h5>
                          <p>
                            (502) 5565 - 7921 <br />
                          </p>
                        </div>
                      </div>
                      {/* <!--/div --> */}
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-envelope before:content-['\eac8']"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1">E-mail</h5>
                          <p className="!mb-0">
                            <a
                              href="mailto:sandbox@email.com"
                              className="text-[#60697b]"
                            >
                              Dentum.gt@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <!--/div --> */}
                    </div>
                    {/* <!--/div --> */}
                  </div>
                  {/* <!--/column --> */}
                </div>
              </div>
              {/* <!--/.tab-pane --> */}
            </div>
            {/* <!-- /.tab-content --> */}

            {/* <!--/.row --> */}
            {/* <!-- /.card --> */}
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </section>
  );
};
