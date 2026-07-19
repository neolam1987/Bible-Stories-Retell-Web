# 📖 STORY-GUIDE.md — How to Write New Stories for This Website

> **Audience of this document:** any AI model (or human) asked to add a new story
> to this site. Follow it exactly and your story will fit seamlessly.
> Last updated: July 2026, when the site had 6 stories across 2 testaments.

---

## 1. What this website is

A local, offline, GitHub-Pages-style static website of famous Bible stories,
written **in English** for an **8–12 year old girl** attending a non-Christian
school in Hong Kong. Purpose: introduce her to the Bible, God's character, and
salvation in a fun way — the stories her parents grew up on at home, school and
church. No frameworks, no build step, no server — plain HTML/CSS/JS opened by
double-clicking `index.html`.

**Tone target:** fun and adventurous enough for a child, witty enough that adults
enjoy it too. Think Pixar: kids get the action, adults get the sly jokes. But the
heart of every story is sincere — these are treasured true stories of faith, told
with love and respect.

---

## 2. Site anatomy

```
Bible Stories/
├── index.html              ← story cards grouped by testament + heroes gallery
├── README.md               ← public-facing repo intro
├── STORY-GUIDE.md          ← this file
├── anime-art-prompts.md    ← image-generation prompt pack (see §8)
├── art-prompts.csv         ← same prompts as CSV, for batch generation tools
├── css/style.css           ← shared stylesheet (do NOT fork per-page styles)
├── js/quiz.js              ← shared quiz engine (reads global QUIZ array)
├── images/anime/           ← AI-generated illustrations (user generates these)
└── stories/                ← one self-contained HTML page per story
```

Testaments so far: **Old Testament** (3 stories: Joseph, Jericho, Solomon) and
**New Testament** (3 parables from Luke: Prodigal Son, Persistent Widow,
Pharisee & Tax Collector). New stories join an existing section; if a new
grouping is ever needed (e.g. "Life of Jesus", "Acts of the Apostles"), copy the
existing era-section pattern: `era-art` banner + `.era-banner` intro + `.cards` grid.

---

## 3. Non-negotiable content rules

1. **Length:** 1,000–1,500 words for the story body (the `.story` div, excluding
   footnotes and quiz). Verify by counting — see §9.
2. **Language:** English only. **No Chinese characters anywhere** — the reader's
   school language is English, and this is deliberate.
3. **Faithful to Scripture:** the plot must follow the biblical text. Invent
   texture (weather, funny asides, minor bystanders), never events or doctrine.
   Famous lines ("You meant it for harm, but God meant it for good") should stay
   close to familiar translation wording. Name the book/chapter in a footnote.
4. **Scholar's Corner (footnotes):** historical background goes in numbered
   footnotes, not the story flow. Footnotes may include modern scholarship —
   archaeology, ancient customs, translation nuggets, scholarly debates — but
   **always framed with respect for Christian faith**. Where scholars debate
   (e.g. the date of Jericho's fallen walls), present the debate honestly and
   show how faith and evidence sit together (God's timing, God working through
   nature). Never use a footnote to undermine the story's truth. Also good in
   footnotes: New Testament echoes of OT stories (Rahab in Matthew 1), and
   verses that carry the lesson forward (James 1:5, Romans 8:28). 3–5 footnotes.
5. **One core teaching per story**, stated in the hook badge and landed in the
   final takeaway: e.g. God is with you in trouble (Joseph), God's miracle power
   (Jericho), God's wisdom (Solomon), repentance and welcome (Prodigal Son),
   persistent prayer (Widow), humility before God (Two Prayers).
6. **End with a takeaway** connecting the story to a child's life (school,
   friendships, prayer at bedtime), phrased in the narrator's voice — warm,
   personal, never preachy. Where natural, point gently to God's bigger rescue
   plan (salvation) — a thread, not a sermon.
7. **Kid-safe handling:** no gore; violence kept off-screen and consequence-light
   in imagery. **Any sexual reference in the source text is transformed into a
   subtle narrative** the child's age can hold: Potiphar's wife "wanted Joseph to
   do something wrong… and told a terrible lie"; Rahab is "a woman who ran an inn
   built into the wall"; Solomon's two women simply "shared a house". Deaths that
   matter (the baby who died in the night) are handled honestly but gently, in a
   sentence. Frightening moments (the sword verdict) must be visibly safe —
   make clear the baby was never in danger.
8. **Depicting Jesus:** in the NT parables, Jesus is the storyteller — honor him
   in the text, but **artwork illustrates only the parable characters, never
   Jesus himself** (family preference; every NT prompt carries "No depiction of
   Jesus").
9. **Cross-link** related stories with `<a href="...">` when natural (the widow
   and the tax collector are neighbors in Luke 18 — say so).
10. **Words to Learn (vocab):** every story teaches **6–8 English vocabulary
    words** worth an 8–12 year old's pocket. Two parts, both required:
    - **Inline:** the word appears naturally in the story first.
    - **Recap box:** a `.vocab` box AFTER `.footnotes`, BEFORE `<div id="quiz">`:
      ```html
      <div class="vocab">
        <h2>⭐ Words to Learn</h2>
        <div class="vocab-grid">
          <div class="vword"><b>persistent</b> <span class="py">per-SIS-tent</span><br>refusing to give up — one-line meaning with a playful story callback</div>
          ...
        </div>
      </div>
      ```
    The `.py` span holds a simple phonetic pronunciation. Pick words that are
    (a) useful in daily life or in church, (b) central to the story's drama, and
    (c) mostly new across the site — light repetition of key faith words
    (mercy, faith, justice) across stories is fine for reinforcement.

---

## 4. The signature feature: a DIFFERENT storytelling device per story

Every story must be told through a **fresh narrative frame**. Never reuse one
already on the site. Used so far:

| Story | Device |
|---|---|
| Joseph and the Colorful Coat | Joseph's diary across the decades |
| The Walls of Jericho | Journalist's news report ("The Jordan River Post") |
| The Wisest King's Hardest Case | Courtroom drama, addressed to "the court" |
| The Runaway Son | Family drama in three acts + epilogue |
| The Widow Who Wouldn't Give Up | Courtroom comedy / contest commentary |
| Two Men, Two Prayers | Sports scoreboard commentary (that God's scoreboard overturns) |

Ideas still unused: a letter exchange; narrated by an object (the scarlet cord,
the fishing boat, the manger); a shepherd's campfire tale; a detective
reconstructing events from clues; interview with witnesses years later; a
ship's log (Jonah!); a weather report (Elijah on Carmel); a recipe/feast
program; told by an animal present in the story (the donkey, the big fish, the
rooster); a museum-tour guide walking through the temple.

**Pick the device that amplifies the story's core emotion** (a diary fits
Joseph's long unseen faithfulness; a scoreboard fits a parable about scoring
ourselves against others). Sustain the device from the lead paragraph to the
final takeaway — the narrator's voice should color every scene break, aside,
and farewell line.

---

## 5. Page template

Copy an existing story file (e.g. `stories/jericho.html`) and replace content.
Structure, in order:

1. `<nav class="topnav">` — home link + `crumbs` line:
   `Story N of M · {device description} {emoji}` (NT pages: `Parable N of M`).
2. `<div class="hero">` — English title `<h1>` and **3 badges**:
   `⭐` teaching badge, `time` badge (~X min read), `style` badge (device).
3. `<figure class="story-hero">` — `images/anime/hero-{slug}.png` with
   `onerror="this.parentElement.style.display='none'"` and an `art-credit`
   figcaption ("AI storybook illustration made for this project").
4. **Who's who** — `<h2>🎭 Who's in this story?</h2>` + `.whos-who` grid of
   `.who` mini-cards: name, `role` span, one witty line. 3–4 entries; a
   non-person entry is welcome once per story ("The pigs — very important smell").
   The witty line should tease, not spoil.
5. `<div class="story">` — the story itself:
   - open with `<p class="lead">` establishing the narrator device;
   - `<h3>` scene headers (prefix with the device's emoji where it fits);
   - `<div class="scene-break">✦ ✦ ✦</div>` between major movements;
   - special boxes: `.speech` (quotes/dialogue highlights — great for famous
     Scripture lines), `.thoughts` (inner monologue, with `<span class="tag">`
     label), `.scoreboard` (tallies and list-like beats), `.newsflash`
     (bulletins/testimony);
   - 2–3 inline `<figure class="story-art">` image slots (`{slug}-1.png` …)
     placed after the scene they illustrate, playful figcaptions + emoji;
   - close with `<p class="lead">` takeaway in the narrator's voice.
6. **Footnotes** — `.footnotes` box, `<h2>📜 Scholar's Corner (footnotes)</h2>`,
   `<ol>` with `id="fnN"` items and `↩` backlinks; body references them via
   `<sup><a href="#fnN" id="refN">N</a></sup>`.
7. **Words to Learn** — `.vocab` box (see §3.10).
8. `<div id="quiz"></div>` — quiz mount point.
9. `<nav class="story-nav">` — prev/next links forming one chain across the
   whole site (OT 1→2→3→NT 1→2→3); last story links back to `../index.html`.
10. `<footer>` — `Story N · Amazing Stories from the Bible` (or `Parable N ·`).
11. `<script>var QUIZ = [...]</script>` + `<script src="../js/quiz.js"></script>`.

Head boilerplate: UTF-8 charset, viewport meta, `<title>English Title</title>`,
stylesheet `../css/style.css`. No inline `<style>` blocks — if a new visual
pattern is needed, add a class to `css/style.css`.

---

## 6. Quiz rules

Exactly **5 questions** in the global `QUIZ` array:

```js
var QUIZ = [
  { q: "Question text?",
    opts: ["A", "B", "C", "D"],      // exactly 4 options
    answer: 2,                        // 0-based index — VARY the position across questions!
    yay:  "Enthusiastic confirmation adding a detail or callback.",
    nope: "Kind correction that re-teaches the answer, never mocks." },
  ...
];
```

Question mix (keep this recipe): 2–3 plot-comprehension, 1 "why" reasoning
question (why the sword revealed the mother, why the fog mattered), and 1
lesson question — **always last, always landing the story's teaching about
God**. Wrong options should be plausible-funny, not absurd-only. `yay`/`nope`
strings must be self-contained teaching moments.

---

## 7. index.html updates for every new story

1. Add a `<a class="card">` to the right testament's `.cards` grid: `num` badge
   (`Story N` or `Parable N`), title, one-line hook, `card-{slug}.png` image
   with `onerror="this.style.display='none'"`, and
   `<span class="go">Read the story →</span>`.
2. Consider adding a `.card.soon` "Coming soon" placeholder naming a real
   future story with a one-line teaser — the site's growth mechanic (David &
   Goliath, Daniel in the lions' den, Jonah, the Good Samaritan, the Lost Sheep
   are all natural next picks).
3. Update the `era-count` badge and the `site-hero` stats (story count, quiz
   question count = stories × 5).
4. Update the prev/next chain: the previous final story now points to the new
   one. Update `Story N of M` crumbs on existing pages when M changes.
5. If the story introduces a memorable person, add a `.who` card (with
   `portrait-{name}.png`) to the **Meet the Heroes** gallery, with `who-links`
   pill(s) to their story page(s).

---

## 8. Artwork workflow

All art is AI-generated anime illustration (no photo or classical layer on this
site). Per new story add to **both** `anime-art-prompts.md` (human-friendly,
copy-paste) and `art-prompts.csv` (same prompts, one row per image, for batch
tools):

- **1 hero prompt** → `hero-{slug}.png` (story-page banner, landscape 16:9)
- **2–3 inline prompts** → `{slug}-1.png` … `{slug}-3.png` (landscape 4:3)
- **1 card prompt** → `card-{slug}.png` (home page, landscape 16:9, poster-like:
  one iconic moment, readable at small size)
- **1 portrait prompt** (only if the character joins Meet the Heroes) →
  `portrait-{name}.png` (bust, parchment background, portrait 3:4)

Prompt-writing rules (match the existing pack):
- Base style string on every first prompt: *"Cute Japanese anime style
  children's storybook illustration, Studio Ghibli inspired, soft watercolor,
  big expressive eyes, kid-friendly, no text, landscape 16:9."* (adjust ratio
  per slot).
- Follow-up prompts in the same story start: *"Same characters and same art
  style as before."*
- Give each recurring character a CAPITALIZED name + consistent visual spec
  (JOSEPH: wavy dark hair, colorful patchwork coat; RAHAB: modest robes,
  patterned headscarf, scarlet cord; THE FATHER: silver-streaked beard, fine
  simple robes — reuse specs from the existing pack for returning characters).
- Biblical-world settings: ancient Near East / first-century Judea — tents,
  stone towns, olive trees, temple courts. No modern objects.
- Content guards in the prompt itself where relevant: "nothing scary",
  "baby unharmed and calm", "no people in danger shown", modest clothing,
  and **"No depiction of Jesus."** on every NT scene.
- Filenames must match the `src` attributes in the story page exactly. Update
  the checklist table in `anime-art-prompts.md` AND add the CSV rows.

**Every `<img>` from `images/anime/` must carry**
`onerror="this.parentElement.style.display='none'"` (story figures) or
`onerror="this.style.display='none'"` (index cards/portraits) so pages look
clean before the art is generated. `loading="lazy"` on all non-hero images.

---

## 9. Verification checklist (run before declaring done)

- [ ] Word count of `.story` div is 1,000–1,500 English words.
- [ ] Plot checked against the Bible passage; famous lines close to familiar wording.
- [ ] Sensitive source material softened per §3.7; nothing frightening left unsoftened.
- [ ] Zero Chinese/CJK characters anywhere in the file.
- [ ] All `href`/`src` paths resolve to existing files (or are onerror-guarded anime slots).
- [ ] QUIZ array: 5 questions, 4 options each, answer indices varied, engine loads.
- [ ] Footnote refs `#fnN` ↔ backlinks `#refN` all match.
- [ ] HTML tags balanced (no unclosed divs).
- [ ] Prev/next chain intact across the whole site, crumbs say correct "of M".
- [ ] index.html card added; era-count + hero stats updated.
- [ ] anime-art-prompts.md updated with prompts + checklist row; art-prompts.csv rows added.

A quick word-count command (adjust filename):

```bash
python3 - <<'EOF'
import re
t = open("stories/NEW.html", encoding="utf-8").read()
m = re.search(r'<div class="story">(.*?)</div>\s*<div class="footnotes">', t, re.S)
print(len(re.findall(r"[A-Za-z']+", re.sub(r'<[^>]+>', ' ', m.group(1)))), "words")
EOF
```

---

## 10. Voice cheat-sheet (what "sounds right" here)

- Address the reader as a co-conspirator: "dear readers", "dear court",
  "sports fans" — whatever the device dictates.
- Short punchy sentences at dramatic beats. Longer flowing ones for setup.
- Humor flavors used: gentle absurdity (the judge's daily schedule),
  understatement ("He forgot. For two whole years."), anachronistic comparisons
  kids know (comic books, homework, world's most dangerous fireworks show) —
  sparingly, ~2–3 per story. Humor never lands ON the sacred moment.
- Bold the single most important sentence of each scene. Italicize narrator asides.
- Never talk down. The reader is assumed clever; explanation lives in footnotes.
- Emotional and holy beats get room to breathe — one quiet line, no joke
  stepping on it (Judah's offer, the father running, seven words from the back
  row). When God speaks or a famous verse lands, let it stand alone in a
  `.speech` box.
- God is the hero of every story. Clever humans, brave women, wise kings — but
  the takeaway always turns the child's eyes upward, warmly and without preaching.
