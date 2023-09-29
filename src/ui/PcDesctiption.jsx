import React from "react";
import { useQuery } from "react-query";
import { getSinglePc } from "../services/apiPc";
import SmallSpinner from "./SmallSpinner";
import Error from "./Error";
const PcDesctiption = ({ singleItem }) => {
  const { id } = singleItem;
  const { isLoading, error, data } = useQuery({
    queryKey: ["pc", id],
    queryFn: () => getSinglePc(id),
  });

  if (isLoading) {
    return <SmallSpinner />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <p className="grid grid-cols-3">
        <strong>✔️ CPU - {data.cpu}</strong>
      </p>
      <p>
        <strong>✔️ MoBo - {data.mobo}</strong>
      </p>
      <p>
        <strong>✔️ RAM - {data.ram}</strong>
      </p>
      <p>
        <strong>✔️ GPU - {data.gpu}</strong>
      </p>
      {data.hdd && (
        <p>
          <strong>✔️ HDD - {data.hdd}</strong>
        </p>
      )}
      <p>
        <strong>✔️ SSD - {data.ssd}</strong>
      </p>
      <p>
        <strong>✔️ PSU - {data.psu}</strong>
      </p>
      <p>
        <strong>✔️ Case - {data.cabinet}</strong>
      </p>
      <p>
        <strong>✔️ FAN - {data.fan}</strong>
      </p>
    </div>
  );
};

export default PcDesctiption;
