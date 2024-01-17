export const getMarkdown = (
  intro: string,
  useCases: { title: string; prompt: string }[],
  slug: string
) => {
  const body = [`**Context:** ${intro}`];
  let index = 1;

  for (const useCase of useCases) {
    body.push(`## ${index}. ${useCase.title}`);
    body.push(`> ${useCase.prompt}`);

    index++;
  }

  body.push(
    `***Note:*** *These prompts were originally published in my article:* [ChatGPT prompts for something.](https://promptadvance.club/chatgpt-prompts/${slug})`
  );

  return body.join("\n\n");
};
