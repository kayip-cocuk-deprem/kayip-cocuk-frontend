import React from "react";
import { MISSING_LIST } from "../../utils/data";
import { ChildCard } from "../Card/ChildCard";

export const MissingList = () => {
  return (
    <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {MISSING_LIST.map((child, index) => {
        return (
          <ChildCard
            name={child.name}
            surname={child.surname}
            photo={child.photo}
            age={child.age}
            description={child.description}
          />
        );
      })}
    </div>
  );
};
