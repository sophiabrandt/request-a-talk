'use client';

import { Pencil1Icon } from '@radix-ui/react-icons';
import talks from './talks.json';

const Page = () => {
  return (
    <main className="py-10">
      <section className="mx-auto max-w-2xl max-w-lg space-y-4 rounded-lg bg-sky-300 p-4">
        {talks.map((talk) => (
          <div
            className="flex justify-between rounded-lg bg-indigo-900 px-4 py-4 text-sky-200 shadow"
            key={talk.id}
          >
            <div>
              <p>{talk.requested_topic}</p>
              <p className="text-sm text-sky-300">{talk.requested_at}</p>
              <p className="text-sm text-sky-300">{talk.duration}</p>
            </div>
            <div>
              <button className="rounded p-2 hover:bg-sky-300 hover:text-indigo-900">
                <Pencil1Icon />
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
