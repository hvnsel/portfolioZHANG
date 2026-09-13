# Portfolio site

Three tabs: **About**, **Research**, **CV**. Plain HTML, CSS and one small JS
file. No build step, no framework. Edit a file, push, live in about a minute.

```
index.html          all the content
style.css           all the styling (colors are the variables at the top)
app.js              tab switching, project dropdown, media handling
HanselZhang_CV.pdf  displayed in the CV tab
media/              your images, gifs and videos
```

## The three things you will actually do

### 1. Swap the CV

Replace `HanselZhang_CV.pdf` with your new one, **keeping the exact same
filename**. Nothing else to change — the CV tab and its download links all
point at that name.

### 2. Add media to a research block

Put the file in `media/`, then change one `src` in `index.html`:

```html
<div class="media"><img src="media/placeholder.svg" alt=""></div>
```

becomes

```html
<div class="media"><img src="media/rover-dig.mp4" alt="Rover excavating regolith"></div>
```

**Always write `<img>`, whatever the file is.** A `.png`, `.jpg` or `.gif` stays
an image; a `.mp4`, `.webm` or `.mov` is turned into a looping, muted video
automatically. You never have to think about which tag to use.

`alt` is a short description for screen readers and for when the file fails to
load. Worth filling in, one line each.

### 3. Edit the words

Every block looks like this:

```html
<div class="block">
  <div class="media"><img src="media/placeholder.svg" alt=""></div>
  <div class="prose">
    <h3>Short heading for this piece of the work</h3>
    <p>A paragraph explaining it.</p>
  </div>
</div>
```

Change the heading and the paragraph. That is the whole job.

**The left/right alternation is automatic.** The first block puts media on the
left, the second on the right, the third on the left, and so on. You do not set
it anywhere — add, delete or reorder blocks and the pattern re-flows on its own.
On phones every block stacks with the media on top.

## Adding or removing things

**A block:** copy an entire `<div class="block">…</div>` and paste it inside the
same `<div class="blocks">`. Delete one by removing the whole `<div
class="block">` through its closing `</div>`.

**A project:** copy a whole `<article class="project" id="...">…</article>`,
give it a new `id`, add `hidden` to the opening tag, and add a matching line to
the dropdown near the top of the Research section:

```html
<option value="your-new-id">Title as it should appear in the menu</option>
```

The `value` must match the `id` exactly. That is the only wiring.

## Editing and publishing

```bash
git add -A
git commit -m "Add rover simulation video"
git push
```

Preview locally first:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Putting it on the internet (GitHub Pages, free)

1. **https://github.com/hvnsel/portfolioZHANG** → **Settings** → **Pages**.
2. **Source** → **Deploy from a branch**.
3. Branch **`claude/beautiful-sagan-bxrglq`**, folder **/ (root)** → **Save**.
4. Wait ~60 seconds and reload. The URL appears at the top:
   **https://hvnsel.github.io/portfolioZHANG/**

Pages needs a public repository on a free plan. Every push then redeploys.

### A cleaner URL

- **Free:** create a new repo named exactly `hvnsel.github.io`, copy these files
  in, enable Pages the same way. Site lives at **https://hvnsel.github.io**.
- **~$12/year:** buy a domain, then Settings → Pages → **Custom domain**. At your
  registrar point it at GitHub:

  | Type  | Name | Value           |
  |-------|------|-----------------|
  | A     | @    | 185.199.108.153 |
  | A     | @    | 185.199.109.153 |
  | A     | @    | 185.199.110.153 |
  | A     | @    | 185.199.111.153 |
  | CNAME | www  | hvnsel.github.io |

  Then tick **Enforce HTTPS**.

## Notes

- Every file on the published branch is fetchable by URL, this README included.
  Keep anything you would rather not have read off this branch.
- The CV tab embeds the PDF inline. Some mobile browsers refuse to render PDFs
  in a page and will show the "open the CV here" fallback link instead — the
  download links above the viewer always work.
