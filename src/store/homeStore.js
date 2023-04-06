import { pbURL } from "@/lib/pocketbase";
import { create } from "zustand";

export const useHomeStore = create((set) => ({
  // Data
  speakers: [],
  footer: [],
  explore: [],
  schedule: [],
  faqs: [],

  // Fetch
  fetchSpeakers: async () => {
    const res = await fetch(pbURL + "/collections/speakers/records");
    const body = await res.json();
    set({ speakers: body.items });
  },
  fetchFooter: async () => {
    const footerRes = await fetch(
      pbURL + "/collections/footer/records?expand=content"
    );
    const contactRes = await fetch(pbURL + "/collections/contact/records");
    const contactBody = await contactRes.json();
    const footerBody = await footerRes.json();
    set({
      footer: [
        { title: "Contact", content: contactBody.items },
        ...footerBody.items.map(({ expand, ...f }) => ({
          ...f,
          content: expand.content,
        })),
      ],
    });
  },
  fetchExplore: async () => {
    const res = await fetch(pbURL + "/collections/explore/records");
    const body = await res.json();
    set({ explore: body.items });
  },
  fetchSchedule: async () => {
    const res = await fetch(
      pbURL + "/collections/schedule/records?expand=timeline"
    );
    const body = await res.json();
    set({
      schedule: body.items.map(({ expand, ...f }) => ({
        ...f,
        timeline: expand.timeline,
      })),
    });
  },
  fetchFaqs: async () => {
    const res = await fetch(pbURL + "/collections/faq/records");
    const body = await res.json();

    set({
      faqs: body.items,
    });
  },
}));
