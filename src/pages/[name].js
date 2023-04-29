import HomeLayout from "@/components/Home/HomeLayout";
import { getHomeLayoutProps } from "@/helpers/prop-helpers";
import { pbURL } from "@/lib/pocketbase";
import axios from "axios";

export default function Page({ page, headerLinks, footerLinks, contactLinks }) {
  return (
    <HomeLayout
      headerLinks={headerLinks}
      footerLinks={footerLinks}
      contactLinks={contactLinks}
    >
      <div className="container py-16 mx-auto prose md:prose-lg lg:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </HomeLayout>
  );
}

export async function getStaticPaths() {
  const pages = (await axios.get(pbURL + "/collections/pages/records/")).data
    .items;

  const paths = pages.map((page) => ({
    params: { name: page.name },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const page = (
    await axios.get(
      `${pbURL}/collections/pages/records?filter=(name='${context.params?.name}')`
    )
  ).data.items[0];

  const layoutProps = await getHomeLayoutProps();

  return {
    props: { page, ...layoutProps },
  };
}
