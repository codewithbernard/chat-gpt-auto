const numberToEmoji = (n: number) => {
  const emojiMap = {
    "0": "0️⃣",
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": "7️⃣",
    "8": "8️⃣",
    "9": "9️⃣",
  };

  return (
    String(n)
      .split("")
      // @ts-ignore
      .map((digit) => emojiMap[digit] || digit)
      .join("")
  );
};

const numberToWord = (n: number) => {
  const words = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  if (n >= 1 && n <= 9) {
    return words[n];
  } else {
    return "Invalid number"; // or any other error handling
  }
};

export const getMarkdown = (useCases: { title: string; prompt: string }[]) => {
  const body = [
    "STEAL THEM 👇🏻",
    "📌 But first, make sure you SAVE this post, because you’ll be looking for them later!",
  ];
  let index = 1;

  for (const useCase of useCases) {
    body.push(
      `${numberToEmoji(index)} ${numberToWord(index)} - ${useCase.title} 👇🏻`
    );
    body.push(useCase.prompt);

    index++;
  }

  body.push("🙋🏼‍♀️ WANT MORE PROMPTS?");
  body.push("Check out the link in our BIO.");
  body.push("#chatgptprompts #chatgpttips #chatgpt");

  return body.join("\n\n");
};
