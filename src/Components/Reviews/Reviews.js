export default function Reviews({ reviews, isError }) {
  return (
    <>
      <hr />
      <ul>
        {reviews && !isError && reviews.results.length
          ? reviews.results.map((data) => (
              <li key={data.id}>
                <h4>Author: {data.author}</h4>
                <p>{data.content}</p>
              </li>
            ))
          : reviews && (
              <li>
                <p>We don't have any reviews for this movie.</p>
              </li>
            )}
      </ul>
    </>
  );
}
