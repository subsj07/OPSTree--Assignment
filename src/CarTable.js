import React from "react";

export default function CarTable({ carName, carType, carBrand }) {
  console.log(carName);

  return (
    <div>
      <table>
        <tr>
          <th>CarName</th>
          <th>Car Brand</th>
          <th>Car Type</th>
        </tr>
        <tr>
          <td>{carName}</td>
          <td>{carBrand}</td>
          <td>{carType}</td>
        </tr>
        {/* <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr> */}
      </table>
    </div>
  );
}
