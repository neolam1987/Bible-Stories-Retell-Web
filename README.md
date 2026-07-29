# Amazing Stories from the Bible

https://neolam1987.github.io/Bible-Stories-Retell-Web/


A kid-friendly storybook website of famous Bible stories — written in English for young readers (ages ~8–12) growing up outside a Christian school, so they can discover the Bible, God, and salvation in a fun way.

As a Christian parent with a child studying at a non-Christian school, I often worried she might miss out on our spiritual heritage — the salvation, God's character, the courage, and the wisdom found in the Bible's most famous stories. Growing up, I had these stories told and retold at home, in school, and in church; I couldn't imagine a childhood without them. So I built this website, with the help of AI, to bring the stories that once inspired me back to life for her — in the language she reads best, in a way that feels like hers.

Built for a 9-year-old in Hong Kong. Enjoyed (we suspect) by her parents too.

## The stories

**📜 Old Testament**

1. **Joseph and the Colorful Coat** — God is with you, even in trouble *(Genesis 37–50, diary style)*
2. **The Walls of Jericho** — God's miracle power *(Joshua 2 & 6, news report style)*
3. **The Wisest King's Hardest Case** — God's wisdom *(1 Kings 3, courtroom drama)*

**🕊️ New Testament** — three parables of Jesus, from the Gospel of Luke

4. **The Runaway Son** — repent, and God will welcome you home *(Luke 15, drama in three acts)*
5. **The Widow Who Wouldn't Give Up** — keep praying, don't give up *(Luke 18:1–8, courtroom comedy)*
6. **Two Men, Two Prayers** — be humble before God *(Luke 18:9–14, scoreboard style)*

Each story page includes a cast of characters, a **Scholar's Corner** with footnotes on history, archaeology, and modern scholarship (always respectful of Christian faith), a **Words to Learn** vocabulary box, and a five-question interactive quiz. Sensitive material is retold gently for young readers.

## Project structure

```
index.html              Landing page (OT & NT sections, Meet the Heroes)
stories/                Six story pages
css/style.css           Playful storybook theme
js/quiz.js              Shared interactive quiz engine
art-prompts.csv         AI image-generation prompts for every illustration
images/anime/           Generated artwork goes here (see below)
Style Reference/        The sister site this design is based on
```

## Generating the artwork

The site works without any images — missing artwork hides itself automatically. To fill it in:

1. Open `art-prompts.csv`. Each row has a target `filename`, a ready-to-use `prompt` (for an AI image generator such as Nano Banana), and a `group`.
2. Generate each image and save it under `images/anime/` using the exact filename from the CSV (e.g. `images/anime/card-joseph.png`).
3. Refresh the site — banners, cards, story art, and portraits appear as they land.

All prompts share one visual style (cute anime storybook, soft watercolor, no text in images) so the site stays consistent.

## Running the site

No build step, no dependencies — plain HTML/CSS/JS. Open `index.html` in a browser, or serve the folder with any static host (GitHub Pages works as-is).

---

*AI storybook illustrations made for this project · Stories from Genesis, Joshua, 1 Kings & the Gospel of Luke · Made with ❤️ in Hong Kong, for a young reader*
