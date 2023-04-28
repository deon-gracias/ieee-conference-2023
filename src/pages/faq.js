import { useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import axios from "axios";
import { pbURL } from "@/lib/pocketbase";

export default function FAQ({ faqs }) {
  const [search, setSearch] = useState("");

  return (
    <section className="section">
      <div className="section__container">
        <h2 className="section__title">FAQ</h2>
        <div>
          <label
            htmlFor="search"
            className="block mb-1 text-lg font-medium text-gray-900"
          >
            Search
          </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primaryfocus:border-primary block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div className="grid text-left lg:gap-16 lg:grid-cols-2">
          {faqs
            .filter((e) =>
              e.question.toLowerCase().includes(search.toLowerCase())
            )
            .map((e, index) => (
              <div key={e.id}>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 space-x-2 text-lg font-medium text-gray-900">
                    <IconInfoCircle />
                    <span>{e.question}</span>
                  </h3>
                  <div
                    className="prose text-gray-500"
                    dangerouslySetInnerHTML={{ __html: e.answer }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const faqs = (await axios.get(pbURL + "/collections/faq/records")).data.items;

  return {
    props: {
      faqs,
    },
  };
}
