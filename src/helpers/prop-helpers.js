import { pbURL } from "@/lib/pocketbase";
import axios from "axios";

export async function getHomeLayoutProps() {
  const footerLinks = (
    await axios.get(pbURL + "/collections/footer/records?expand=content")
  ).data.items;

  const contactLinks = (await axios.get(pbURL + "/collections/contact/records"))
    .data.items;

  const headerLinks = (
    await axios.get(pbURL + "/collections/header/records?expand=items")
  ).data.items;

  return {
    footerLinks: [
      { title: "Contact", content: contactLinks },
      ...footerLinks.map(({ expand, ...f }) => ({
        ...f,
        content: expand.content,
      })),
    ],
    contactLinks,
    headerLinks,
  };
}
