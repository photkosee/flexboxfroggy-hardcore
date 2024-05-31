const Editor = () => {
  return (
    <div className="text-[15px] font-[#777] relative">
      <div
        className="h-[235px] relative py-1 pr-3 bg-[#e0e0e0]
        rounded-md overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 h-full py-1 pl-3 pr-2
      text-right bg-[#999] text-[#d5d5d5]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div key={n}>
              {n}
              <br />
            </div>
          ))}
        </div>
        <div className="text-[#777] pl-11 font-[monospace]">
          {`#pond {`}
          <br />
          &nbsp;&nbsp;{`display: flex;`}
          <br />
          <textarea
            className="h-[151px] w-[calc(100%-16px)] ml-[16px]
            outline-none overflow-auto"
          />
          <br />
          {`}`}
        </div>
      </div>
    </div>
  );
};

export default Editor;
