import React from "react";

const Stats = () => {
  return (
    <div class="bg-black py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-300">Leetcode Problems</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              150+
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-300">Github & Projects</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              25+
            </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-300">
              Tech Certifications
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              5+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
