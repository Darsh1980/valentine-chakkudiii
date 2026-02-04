const today = new Date();
const day = today.getDate();

const data = {
  7: {
    title: "🌹 Rose Day",
    text: `Some flowers bloom for a season.
Some feelings bloom forever.

You didn’t enter my life like a rose —
you entered like a garden that made everything make sense.

This is me, choosing you, quietly and completely.`,
    bg: "linear-gradient(135deg, #ff9a9e, #fecfef)",
    hearts: true
  },
  8: {
    title: "💌 Propose Day",
    text: `I don’t know how the future will look,
but I know how I want to face it.

With your hand in mine,
your laughter in my ears,
and your trust in my heart.

Chakkudii, I choose you — today, and every day after.`,
    button: "Yes, always ❤️",
    bg: "linear-gradient(135deg, #cdb4db, #ffc8dd)",
    hearts: true
  },
  9: {
    title: "🍫 Chocolate Day",
    text: `Life has its bitter days.
But loving you softened the sharp edges.

You didn’t make life perfect —
you made it sweeter.
And that means more.`,
    bg: "linear-gradient(135deg, #d4a373, #faedcd)",
    hearts: false
  },
  10: {
    title: "🧸 Teddy Day",
    text: `Some days you don’t need solutions.
You just need to feel held.

If I were there, I’d pull you close and remind you —
you’re safe, you’re loved, and you’re never alone.`,
    button: "Send me a hug 🤍",
    bg: "linear-gradient(135deg, #fbc4ab, #ffdab9)",
    hearts: true
  },
  11: {
    title: "🤝 Promise Day",
    text: `I can’t promise perfection.
But I promise honesty.

I promise to listen.
I promise to grow.
I promise to choose us —
even on hard days.`,
    bg: "linear-gradient(135deg, #a2d2ff, #cdb4db)",
    hearts: false
  },
  12: {
    title: "💋 Kiss Day",
    text: `A kiss isn’t just about closeness.
It’s about comfort.

If distance could feel anything,
it would feel jealous right now.`,
    bg: "linear-gradient(135deg, #ff758f, #ff4d6d)",
    hearts: true
  },
  14: {
    title: "❤️ Valentine’s Day",
    text: `Chakkudii,

Loving you has been the easiest and bravest thing I’ve done.
Not because it’s always simple —
but because it’s always worth it.

I choose you. I always will.

Happy Valentine’s Day.
— Bhanushali ❤️`,
    bg: "linear-gradient(135deg, #ff4d6d, #c9184a)",
    hearts: true
  }
};

const content = data[day] || {
  title: "❤️ Just Us",
  text: "This page waits for Valentine’s Week — just like I wait for you.",
  bg: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
  hearts: false
};

document.body.style.background = content.bg;
document.getElementById("day-title").innerText = content.title;
document.getElementById("day-text").innerText = content.text;

const btn = document.getElementById("action-btn");
if (content.button) {
  btn.innerText = content.button;
  btn.classList.remove("hidden");
  btn.onclick = () => alert("She said YES in my heart ❤️");
}

if (content.hearts) {
  setInterval(createHeart, 500);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
