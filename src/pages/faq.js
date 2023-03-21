import { useState } from "react";
import HomeLayout from "@/components/Home/HomeLayout";
import { IconInfoCircle } from "@tabler/icons-react";

export default function FAQ() {
  const [search, setSearch] = useState("");

  const faqs = [
    {
      question: 'What do you mean by "Figma assets"?',
      answer: (
        <>
          You will have access to download the full Figma project including all
          of the pages, the components, responsive pages, and also the icons,
          illustrations, and images included in the screens.
        </>
      ),
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer: (
        <>
          You will have access to download the full Figma project including all
          of the pages, the components, responsive pages, and also the icons,
          illustrations, and images included in the screens.
        </>
      ),
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer: (
        <>
          You will have access to download the full Figma project including all
          of the pages, the components, responsive pages, and also the icons,
          illustrations, and images included in the screens.
        </>
      ),
    },
    {
      question: 'What do you mean by "Figma assets"?',
      answer: (
        <>
          You will have access to download the full Figma project including all
          of the pages, the components, responsive pages, and also the icons,
          illustrations, and images included in the screens.
        </>
      ),
    },
  ];
  return (
    <HomeLayout>
      <section className="section">
        <div className="section__container">
          <h2 className="section__title">FAQ</h2>
          <div>
            <label
              for="search"
              class="block mb-1 text-sm font-medium text-lg text-gray-900"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primaryfocus:border-primary block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div className="grid text-left lg:gap-16 lg:grid-cols-2">
            {faqs
              .filter((e) => e.question.toLowerCase().includes(search.toLowerCase()))
              .map((e, index) => (
                <div key={index}>
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 space-x-2 text-lg font-medium text-gray-900">
                      <IconInfoCircle />
                      <span>{e.question}</span>
                    </h3>
                    <p className="text-gray-500">{e.answer}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
