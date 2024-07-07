import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
      {results ? (
        results?.map((result) => {
          return <Thumbnail key={result.id} result={result} />;
        })
      ) : (
        <div>None available, sorry!</div>
      )}
    </div>
  );
};

export default Results;
