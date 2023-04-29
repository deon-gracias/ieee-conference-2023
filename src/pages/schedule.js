import HomeLayout from "@/components/Home/HomeLayout";
import axios from "axios";
import { pbURL } from "@/lib/pocketbase";
import { getHomeLayoutProps } from "@/helpers/prop-helpers";

export default function Schedule({ 
  schedule,
  headerLinks,
  footerLinks,
  contactLinks, }) {

  return (
    <HomeLayout
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      contactLinks={contactLinks}
    >
      <section id="schedule">
        <div className="section__container">
          <h1 className="section__title">Schedule</h1>
        </div>

        <div>
          {schedule.map((timeline, index) => (
            <div key={index} className="container px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
                    <h3 className="text-3xl font-semibold">{timeline.title}</h3>
                    <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                      {timeline.subtitle}
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                    {timeline.timeline.map((item, i) => (
                      <div
                        key={`${index}-${i}`}
                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary"
                      >
                        <h3 className="text-xl font-semibold tracking-wide">
                          {item.title}
                        </h3>
                        <time className="text-xs tracking-wide text-gray-500 uppercase">
                          {item.subtitle}
                        </time>
                        <div
                          className="mt-3 prose"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const schedule = (
    await axios.get(pbURL + "/collections/schedule/records?expand=timeline")
  ).data.items;
  const layoutProps = await getHomeLayoutProps();

  return {
    props: {
      schedule: schedule.map(({ expand, ...rest }) => ({
        ...rest,
        timeline: expand.timeline,
      })),
      ...layoutProps,
    },
  };
}
