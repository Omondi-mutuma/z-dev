import React from "react";
import { FeatureBarChart } from "./ui/barChart";
import { Button } from "./ui/button";
import { FeatureAreaChart } from "./ui/areaChart";

const Features = () => {
  return (
    <section className="py-20 flex flex-col justify-center px-4 items-center w-full">
      <div className="flex flex-col w-full justify-between lg:flex-row">
        <div className="px-4 lg:px-8">
          <FeatureBarChart />
        </div>
        <div className="flex flex-col max-w-lg p-4">
          <svg
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 1.5C32.145 1.5 41.2378 10.718 41.4944 22.2241H31.3844C31.1317 16.541 26.594 11.9874 21 11.9874C15.406 11.9874 10.8683 16.541 10.6156 22.2241H0.505571C0.762245 10.718 9.85498 1.5 21 1.5Z"
              fill="#7FBC8C"
              stroke="#080808"
            />
            <path
              d="M21 42.5C32.145 42.5 41.2378 33.282 41.4944 21.7759H31.3844C31.1317 27.459 26.594 32.0126 21 32.0126C15.406 32.0126 10.8683 27.459 10.6156 21.7759H0.505571C0.762245 33.282 9.85498 42.5 21 42.5Z"
              fill="#F3CEB4"
              stroke="#080808"
            />
          </svg>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
            Detailed analytics
          </h4>
          <p className="text-foreground/60 leading-7 max-w-2xl [&:not(:first-child)]:mt-6">
            See the full picture of all your projects in one place and take
            action immediately.
          </p>
          <p className="text-foreground/60 leading-7 max-w-2xl [&:not(:first-child)]:mt-6">
            Our extensive tool will help you maximize the profits and scale your
            business.
          </p>
          <Button variant={"default"} className="self-start mt-6">
            Request a quote
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full justify-between mt-24 lg:flex-row">
        <div className="flex flex-col w-full p-4">
          <svg
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 1.5C32.145 1.5 41.2378 10.718 41.4944 22.2241H31.3844C31.1317 16.541 26.594 11.9874 21 11.9874C15.406 11.9874 10.8683 16.541 10.6156 22.2241H0.505571C0.762245 10.718 9.85498 1.5 21 1.5Z"
              fill="#7FBC8C"
              stroke="#080808"
            />
            <path
              d="M21 42.5C32.145 42.5 41.2378 33.282 41.4944 21.7759H31.3844C31.1317 27.459 26.594 32.0126 21 32.0126C15.406 32.0126 10.8683 27.459 10.6156 21.7759H0.505571C0.762245 33.282 9.85498 42.5 21 42.5Z"
              fill="#F3CEB4"
              stroke="#080808"
            />
          </svg>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
            Detailed analytics
          </h4>
          <p className="text-foreground/60 leading-7 max-w-2xl [&:not(:first-child)]:mt-6">
            See the full picture of all your projects in one place and take
            action immediately.
          </p>
          <p className="text-foreground/60 leading-7 max-w-2xl [&:not(:first-child)]:mt-6">
            Our extensive tool will help you maximize the profits and scale your
            business.
          </p>
          <Button variant={"default"} className="self-start mt-6">
            Request a quote
          </Button>
        </div>
        <div className="px-4 lg:px-8">
          <FeatureAreaChart />
        </div>
      </div>
    </section>
  );
};

export default Features;
