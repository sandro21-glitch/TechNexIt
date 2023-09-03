const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
