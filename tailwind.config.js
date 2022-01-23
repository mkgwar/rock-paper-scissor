module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        //Rock, paper, scissors coin colors
        "paper-shadow": "hsl(230, 89%, 62%)",
        paper: "hsl(230, 89%, 65%)",
        scissors: "hsl(39, 89%, 53%)",
        "scissors-shadow": "hsl(40, 84%, 49%)",
        rock: "hsl(349, 70%, 56%)",
        "rock-shadow": "hsl(349, 71%, 52%)",

        //neutral
        "Dark-Text": "hsl(229, 25%, 31%)",
        "Score-Text": "hsl(229, 64%, 46%)",
        "Header-Outline": "hsl(217, 16%, 45%)",

        //background
        "background-from": "hsl(214, 47%, 23%)",
        "background-to": "hsl(237, 49%, 15%)",
      },
    },
    plugins: [],
  },
};
