const DeliveryMethod = ({ setDelieveryMethod }) => {
  const handleSelectMethod = (e) => {
    setDelieveryMethod(e.target.value);
  };

  return (
    <div className="mb-7">
      <h6 className="mb-1">მიწოდების მეთოდი</h6>
      <select
        onChange={handleSelectMethod}
        className=" border border-greyBorder p-2 focus:outline-none w-full cursor-pointer"
      >
        <option disabled  defaultValue="">
          გთხოვთ აირიჩიოთ თქვენთვის სასურველი მიწოდების მეთოდი
        </option>
        <option value="მაღაზიიდან გატანა">მაღაზიიდან გატანა</option>
        <option value="ადგილზე მიწოდება მთელი საქართველოს მასშტაბით">
          ადგილზე მიწოდება მთელი საქართველოს მასშტაბით
        </option>
      </select>
    </div>
  );
};

export default DeliveryMethod;
