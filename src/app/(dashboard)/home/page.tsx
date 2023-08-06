'use client';

import talks from './talks.json';
import { DotIcon, CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { ToggleGroup } from '@/components/toggle-group';

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
              <ToggleGroup
                ariaLabel="talk status"
                left={'rejected'}
                leftIcon={Cross2Icon}
                center={'pending'}
                centerIcon={DotIcon}
                right={'accepted'}
                rightIcon={CheckIcon}
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
