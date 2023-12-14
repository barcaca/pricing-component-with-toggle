"use client";

interface ToggleProps {
  isChecked: boolean;
  toggleSwitch: () => void;
}

export function Toggle({ isChecked, toggleSwitch }: ToggleProps) {
  return (
    <label htmlFor="toggleSwitch" className="flex items-center gap-6 font-bold">
      <span
        data-state={isChecked}
        className="data-[state=false]:text-indigo-500"
      >
        Annually
      </span>
      <div className="flex h-8 w-14 cursor-pointer items-center rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-1 transition-all duration-300 ease-linear">
        <input
          name="toggleSwitch"
          type="checkbox"
          id="toggleSwitch"
          className="h-0 w-0 opacity-0"
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <span
          data-state={isChecked}
          className="inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-linear data-[state=true]:translate-x-6 "
        />
      </div>
      <span
        data-state={isChecked}
        className="data-[state=true]:text-violet-500"
      >
        Monthly
      </span>
    </label>
  );
}
