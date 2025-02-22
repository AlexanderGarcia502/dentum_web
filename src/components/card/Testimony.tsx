import { ITestimonyCard } from "./interface";

export const TestimonyCard = ({ content, name }: ITestimonyCard) => {
  return (
    <article>
      <div className="card">
        <div className="card-body flex-[1_1_auto] p-[40px]">
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
