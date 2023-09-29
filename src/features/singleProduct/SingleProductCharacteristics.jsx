import PcDesctiption from "../../ui/PcDesctiption";

const SingleProductCharacteristics = ({ singleItem }) => {
  const { name, category } = singleItem;
  return (
    <div className="pt-2">
      <div>
        {category === "სისტემური ბლოკები" ? (
          <div>
            <p className="mb-5 font-bold font-rexFontLight">
              სისტემური ბლოკის მახასიათებლები:
            </p>
            <PcDesctiption singleItem={singleItem} />
          </div>
        ) : (
          <div>
            <p className="mb-5 font-rexFontLight">
              დეტალური მახასიათებლები იხილეთ ბმულზე
              <span className="ml-2 font-extrabold text-lightBlue">ბმულზე</span>
            </p>
            <p className="font-bold uppercase">
              <span>{name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductCharacteristics;
