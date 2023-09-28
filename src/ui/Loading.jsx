const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
