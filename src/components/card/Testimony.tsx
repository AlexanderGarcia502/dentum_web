import { ITestimonyCard } from "./interface";

export const TestimonyCard = ({ content, name }: ITestimonyCard) => {
  return (
    <article>
      <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
        <div className="card-body flex-[1_1_auto] p-[40px]">
          <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
          <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
            <p>{content}</p>
            <div className="flex items-center text-left">
              <div className="info pl-4">
                <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                  <cite>{name}</cite>
                </h5>
              </div>
            </div>
          </blockquote>
        </div>
        {/* <!-- /.card-body --> */}
      </div>
    </article>
  );
};
