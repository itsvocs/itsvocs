import { IconContainer } from "@/components/IconContainer";
import { Radar } from "@/components/ui/Radar";
import React from "react";

function TechComponent() {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4 dark:bg-black">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
          <IconContainer delay={0.7} text="Java" src="/img/java.svg" />
          <IconContainer text="Python" delay={0.5} src="/img/python.svg" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
          <IconContainer delay={0.6} text="Swift" src="/img/swiftui.svg" />
          <IconContainer
            text="Postgre SQL"
            src="/img/postgresql.svg"
            delay={0.8}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
          <IconContainer text="Git" delay={0.2} src="/img/git.svg" />
          <IconContainer
            delay={0.4}
            text="Typescript"
            src="/img/typescript.svg"
          />
          <IconContainer text="Next Js" delay={0.3} src="/img/nextjs.svg" />
        </div>
      </div>
      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
    </div>
  );
}

export default TechComponent;
