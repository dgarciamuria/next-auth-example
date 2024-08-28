export const revalidate = 60;

export default function Test() {
  return (
    <article>
      <h1>{`Test ${new Date().toLocaleString()}`}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet id,
        exercitationem officia eius voluptatem enim dolorum quia debitis? Magnam
        temporibus esse laboriosam natus sit, quos nam ut mollitia obcaecati
        nostrum?
      </p>
      <p>This is content that can be crawled</p>
    </article>
  );
}
