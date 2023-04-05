import AdminLayout from "@/components/Admin/AdminLayout";
import {
  IconCircleMinus,
  IconCirclePlus,
  IconMinus,
} from "@tabler/icons-react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Dashboard() {
  const { register, unregister } = useForm();

  const [speakersCount, setSpeakersCount] = useState(1);

  function addSpeaker() {
    setSpeakersCount(speakersCount + 1);
  }

  function removeSpeaker() {
    unregister(`speaker-${speakersCount}-title`);
    unregister(`speaker-${speakersCount}-subtitle`);
    setSpeakersCount(speakersCount - 1);
  }

  return (
    <AdminLayout>
      <div className="grid gap-8 px-4">
        {/* About */}
        <div className="form-control">
          <label className="text-2xl font-bold label">About</label>
          <textarea className="input" {...register("label")}></textarea>
        </div>

        {/* Speakers */}
        <div>
          <h3 className="text-2xl font-bold">Speakers</h3>
          <div className="grid gap-2 mt-4">
            <div className="flex">
              <button
                onClick={addSpeaker}
                className="btn border-2 w-fit gap-2 btn-primary"
              >
                <IconCirclePlus />
                Add Speaker
              </button>
              <button
                onClick={removeSpeaker}
                className="btn border-2 w-fit gap-2 btn-error"
              >
                <IconCircleMinus />
                Remove Speaker
              </button>
            </div>
            {Array.from({ length: speakersCount }).map((_, i) => (
              <div
                className="flex shadow-sm p-4 rounded-lg md:flex-row flex-col gap-4"
                key={i}
              >
                {/* Inputs */}
                <div className="grid md:grid-cols-2 w-full gap-4">
                  <div className="form-control">
                    <label className="label">Title</label>
                    <input
                      type="text"
                      className="input"
                      {...register(`speaker-${i + 1}-title`)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Subtitle</label>
                    <input
                      type="text"
                      className="input"
                      {...register(`speaker-${i + 1}-subtitle`)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <ScheduleForm />
      </div>
    </AdminLayout>
  );
}

function ScheduleForm() {
  const { register } = useForm();
  const [scheduleCount, setScheduleCount] = useState([]);

  function addScheduleSection() {
    setScheduleCount((old) => [...old, 1]);
  }

  function removeScheduleSection() {
    setScheduleCount((old) => old.slice(0, scheduleCount.length - 1));
  }

  function increaseSchedulSectionCount(index) {
    const duplicate = [...scheduleCount];
    duplicate[index] += 1;
    setScheduleCount(duplicate);
  }

  function decreaseSchedulSectionCount(index) {
    const duplicate = [...scheduleCount];
    duplicate[index] -= 1;
    setScheduleCount(duplicate);
    console.log(scheduleCount);
  }

  useEffect(() => {}, [scheduleCount]);

  return (
    <div>
      <h3 className="text-2xl font-bold">Schedule</h3>
      <div className="grid gap-2 mt-4">
        <div className="flex">
          <button
            onClick={addScheduleSection}
            className="btn border-2 w-fit gap-2 btn-primary"
          >
            <IconCirclePlus />
            Add Schedule
          </button>
          <button
            onClick={removeScheduleSection}
            className="btn border-2 w-fit gap-2 btn-error"
          >
            <IconCircleMinus />
            Remove Schedule
          </button>
        </div>
        {Array.from({ length: scheduleCount.length }).map((_, i) => (
          <div className="flex shadow-md p-4 rounded-lg flex-col gap-4" key={i}>
            <div className="flex w-full gap-4 items-end">
              {/* Section */}
              <div className="form-control w-full">
                <label className="label">Section Title</label>
                <input
                  type="text"
                  className="input"
                  {...register(`schedule-${i + 1}-section-title`)}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">Section Subtitle</label>
                <input
                  type="text"
                  className="input"
                  {...register(`schedule-${i + 1}-section-subtitle`)}
                />
              </div>
              <div className="flex pb-2">
                <button onClick={() => increaseSchedulSectionCount(i)}>
                  <IconCirclePlus size={30} />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => decreaseSchedulSectionCount(i)}
                >
                  <IconCircleMinus size={30} />
                </button>
              </div>
            </div>
            <div className="grid gap-4">
              {Array.from({ length: scheduleCount[i] }).map((_, i) => (
                <div className="flex gap-4" key={`${i}-${i}`}>
                  <div className="grid shadow-md rounded-lg p-4 gap-3 md:grid-cols-3 w-full">
                    <div className="form-control">
                      <label className="label">Title</label>
                      <input
                        type="text"
                        className="input"
                        {...register(`schedule-${i + 1}-title`)}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Date</label>
                      <input
                        type="text"
                        className="input"
                        {...register(`schedule-${i + 1}-date`)}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Description</label>
                      <input
                        type="text"
                        className="input"
                        {...register(`schedule-${i + 1}-description`)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
