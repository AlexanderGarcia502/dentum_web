import { Information } from "@/interfaces/enums/information";

export const Location = () => {
  return (
    <section className="wrapper bg-[#f6f7f9] pt-20">
      <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
              ¿En donde puedes encontrarnos?
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
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1">Waze</h5>
                          <span>
                            <a
                              style={{ background: "#30C6F6" }}
                              href={Information.WAZE}
                              className="btn btn-green !text-white !bg-[#30C6F6] border-[#30C6F6] hover:text-white hover:bg-[#30C6F6] hover:!border-[#30C6F6]   active:text-white active:bg-[#30C6F6] active:border-[#30C6F6] disabled:text-white disabled:bg-[#30C6F6] disabled:border-[#30C6F6]  btn-icon btn-icon-start rounded"
                            >
                              <div className="mr-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813c-.298.025-.547.224-.547.522c-.05.82.82 2.31 2.012 3.502c.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528a2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21c1.64-.546 2.36-2.409 1.763-3.924a13 13 0 0 0 1.838-1.465a10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.9 10.9 0 0 0 13.218 0m0 1.217c2.558 0 4.967.994 6.78 2.807a9.53 9.53 0 0 1 2.807 6.78A9.53 9.53 0 0 1 20 17.585a9.65 9.65 0 0 1-6.78 2.807h-2.46a3.01 3.01 0 0 0-2.93-2.41a3.03 3.03 0 0 0-2.534 1.367v.024a9 9 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.86 2.86 0 0 0 1.441-.846a2.96 2.96 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861c1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.19 1.19 0 0 0-1.191 1.192a1.19 1.19 0 0 0 1.192 1.193A1.19 1.19 0 0 0 12 8.395a1.19 1.19 0 0 0-1.192-1.192m7.204 0a1.19 1.19 0 0 0-1.192 1.192a1.19 1.19 0 0 0 1.192 1.193a1.19 1.19 0 0 0 1.192-1.193a1.19 1.19 0 0 0-1.192-1.192m-7.377 4.769a.596.596 0 0 0-.546.845a4.81 4.81 0 0 0 4.346 2.757a4.77 4.77 0 0 0 4.347-2.757a.596.596 0 0 0-.547-.845h-.025a.56.56 0 0 0-.521.348a3.59 3.59 0 0 1-3.254 2.061a3.59 3.59 0 0 1-3.254-2.061a.64.64 0 0 0-.546-.348"
                                  />
                                </svg>
                              </div>
                              Abrir Ubicación
                            </a>
                          </span>
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
                      <div className="flex flex-row">
                        <div>
                          <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                            <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                          </div>
                        </div>
                        <div>
                          <h5 className="!mb-1">Waze</h5>
                          <span>
                            <a
                              href={Information.WAZE_SAC}
                              style={{ background: "#30C6F6" }}
                              className="btn btn-green !text-white !bg-[#30C6F6] border-[#30C6F6] hover:text-white hover:bg-[#30C6F6] hover:!border-[#30C6F6]   active:text-white active:bg-[#30C6F6] active:border-[#30C6F6] disabled:text-white disabled:bg-[#30C6F6] disabled:border-[#30C6F6]  btn-icon btn-icon-start rounded"
                            >
                              <div className="mr-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813c-.298.025-.547.224-.547.522c-.05.82.82 2.31 2.012 3.502c.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528a2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21c1.64-.546 2.36-2.409 1.763-3.924a13 13 0 0 0 1.838-1.465a10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.9 10.9 0 0 0 13.218 0m0 1.217c2.558 0 4.967.994 6.78 2.807a9.53 9.53 0 0 1 2.807 6.78A9.53 9.53 0 0 1 20 17.585a9.65 9.65 0 0 1-6.78 2.807h-2.46a3.01 3.01 0 0 0-2.93-2.41a3.03 3.03 0 0 0-2.534 1.367v.024a9 9 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.86 2.86 0 0 0 1.441-.846a2.96 2.96 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861c1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.19 1.19 0 0 0-1.191 1.192a1.19 1.19 0 0 0 1.192 1.193A1.19 1.19 0 0 0 12 8.395a1.19 1.19 0 0 0-1.192-1.192m7.204 0a1.19 1.19 0 0 0-1.192 1.192a1.19 1.19 0 0 0 1.192 1.193a1.19 1.19 0 0 0 1.192-1.193a1.19 1.19 0 0 0-1.192-1.192m-7.377 4.769a.596.596 0 0 0-.546.845a4.81 4.81 0 0 0 4.346 2.757a4.77 4.77 0 0 0 4.347-2.757a.596.596 0 0 0-.547-.845h-.025a.56.56 0 0 0-.521.348a3.59 3.59 0 0 1-3.254 2.061a3.59 3.59 0 0 1-3.254-2.061a.64.64 0 0 0-.546-.348"
                                  />
                                </svg>
                              </div>
                              Abrir Ubicación
                            </a>
                          </span>
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
