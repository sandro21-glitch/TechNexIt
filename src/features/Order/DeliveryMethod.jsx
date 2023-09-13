const DeliveryMethod = () => {
  return (
    <div className="mb-7">
      <h6 className="mb-1">მიწოდების მეთოდი</h6>
      <select className=" border border-greyBorder p-2 focus:outline-none w-full cursor-pointer">
        <option disabled selected value="">
          გთხოვთ აირიჩიოთ თქვენთვის სასურველი მიწოდების მეთოდი
        </option>
        <option value="">მაღაზიიდან გატანა</option>
        <option value="">ადგილზე მიწოდება მთელი საქართველოს მასშტაბით</option>
      </select>
    </div>
  );
};

export default DeliveryMethod;
