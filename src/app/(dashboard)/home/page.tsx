'use client';

import { DotIcon, CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import talks from './talks.json';
import { useState } from 'react';

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
              <ToggleGroup.Root
                type="single"
                aria-label="talk status"
                defaultValue="pending"
                className="inline-flex items-baseline rounded bg-sky-300 px-2 py-1"
              >
                <ToggleGroup.Item
                  value="rejected"
                  aria-label="rejected"
                  className="rounded bg-sky-300 text-indigo-900  data-[state=on]:bg-indigo-900 data-[state=on]:text-sky-300"
                >
                  <Cross2Icon />
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="pending"
                  aria-label="pending"
                  className="rounded bg-sky-300 text-indigo-900  data-[state=on]:bg-indigo-900 data-[state=on]:text-sky-300"
                >
                  <DotIcon />
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="accepted"
                  aria-label="accepted"
                  className="rounded bg-sky-300 text-indigo-900  data-[state=on]:bg-indigo-900 data-[state=on]:text-sky-300"
                >
                  <CheckIcon />
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
