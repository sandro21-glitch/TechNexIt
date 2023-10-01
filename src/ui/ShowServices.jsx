import React from "react";

const ShowServices = ({ services }) => {
  return (
    <div>
      <table className="border border-greyBorder w-full">
        <thead className="font-rexFontLight text-sm">
          <tr>
            <th className="text-start p-2">სერვისი</th>
            <th className="border-l border-greyBorder p-2">ღირებულება</th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {services.map((service) => {
            return (
              <tr key={service.id} className="border border-greyBorder p-4">
                <td className="p-2">{service.name}</td>
                <td className="border-l  border-greyBorder text-center">
                  {service.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowServices;
