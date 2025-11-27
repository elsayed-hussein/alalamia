type Props = {
  pageTitle: string;
};
const title = (props: Props) => {
  const { pageTitle } = props;
  return (
    <div className="flex justify-center items-center bg-[#66ab36] m-0 leading-snug tracking-widest py-16">
      <h2 className="uppercase text-2xl text-white font-semibold p-4">
        {pageTitle}
      </h2>
    </div>
  );
};
export default title;
