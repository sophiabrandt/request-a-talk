import { IconProps } from '@radix-ui/react-icons/dist/types';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import React, { ComponentType } from 'react';

interface ToggleGroupProps {
  ariaLabel: string;
  left: string;
  leftIcon: ComponentType<IconProps>;
  center: string;
  centerIcon: ComponentType<IconProps>;
  right: string;
  rightIcon: ComponentType<IconProps>;
}

export const ToggleGroup = ({
  ariaLabel,
  left,
  leftIcon: LeftIcon,
  center,
  centerIcon: CenterIcon,
  right,
  rightIcon: RightIcon,
}: ToggleGroupProps) => {
  return (
    <RadixToggleGroup.Root
      type="single"
      aria-label={ariaLabel}
      defaultValue={center}
      className="inline-flex items-baseline rounded bg-sky-300 px-2 py-1"
    >
      <RadixToggleGroup.Item
        value={left}
        aria-label={left}
        className="rounded bg-sky-300 text-indigo-900  data-[state=on]:bg-indigo-900 data-[state=on]:text-sky-300"
      >
        <LeftIcon />
      </RadixToggleGroup.Item>
      <RadixToggleGroup.Item
        value={center}
        aria-label={center}
        className="rounded bg-sky-300 text-indigo-900  data-[state=on]:bg-indigo-900 data-[state=on]:text-sky-300"
      >
        <CenterIcon />
      </RadixToggleGroup.Item>
      <RadixToggleGroup.Item
        value={right}
        aria-label={right}
        className="rounded bg-sky-300 text-indigo-900  data-[state=on]:bg-indigo-900 data-[state=on]:text-sky-300"
      >
        <RightIcon />
      </RadixToggleGroup.Item>
    </RadixToggleGroup.Root>
  );
};
