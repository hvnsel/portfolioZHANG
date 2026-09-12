# Portfolio site

Plain HTML and CSS. No build step, no framework, no dependencies. You edit
`index.html`, push, and the live site updates in about a minute.

```
index.html          all the content
style.css           all the styling (colors are the variables at the top)
HanselZhang_CV.pdf  linked from the header and footer
media/              put project screenshots / GIFs here
.nojekyll           tells GitHub Pages to serve the files as-is
```

## Putting it on the internet (GitHub Pages, free)

1. Go to **https://github.com/hvnsel/portfolioZHANG** → **Settings** → **Pages**
   (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. In the branch dropdown pick **`claude/beautiful-sagan-bxrglq`** (that is
   where these files live, and it is this repo's default branch), set the
   folder to **/ (root)**, then **Save**.
4. Wait ~60 seconds, then reload the Pages settings page. The URL appears at
   the top: **https://hvnsel.github.io/portfolioZHANG/**

Every push to that branch redeploys automatically.

That branch name is ugly. If it bothers you, rename it first:
**Settings → Branches → the pencil icon next to the default branch → `main`**.
Then set Pages to publish from `main`, and locally run
`git branch -m claude/beautiful-sagan-bxrglq main && git fetch && git branch -u origin/main main`.

### Getting a cleaner URL

`hvnsel.github.io/portfolioZHANG` works but is long. Two ways to improve it:

- **Free:** create a *new* repo named exactly `hvnsel.github.io`, copy these
  files into it, and enable Pages the same way. The site then lives at
  **https://hvnsel.github.io** — short enough to put on a CV.
- **~$12/year:** buy a domain (Namecheap, Cloudflare, Porkbun) such as
  `hanselzhang.com`. In the repo, Settings → Pages → **Custom domain**, type
  the domain, save. Then at your registrar add these DNS records:

  | Type  | Name  | Value                                        |
  |-------|-------|----------------------------------------------|
  | A     | @     | 185.199.108.153                              |
  | A     | @     | 185.199.109.153                              |
  | A     | @     | 185.199.110.153                              |
  | A     | @     | 185.199.111.153                              |
  | CNAME | www   | hvnsel.github.io                             |

  DNS takes anywhere from 10 minutes to a few hours. Then tick
  **Enforce HTTPS** in the Pages settings.

## Editing

Open `index.html` in any text editor. Each `<section>` is labelled by its `id`
(`about`, `research`, `writing`, `experience`, `skills`). Change the text, save,
then:

```bash
git add -A
git commit -m "Update research section"
git push
```

To preview locally before pushing:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## What to do next

1. **Rewrite the About paragraph** so it reads in your voice: what you work on,
   and what you want to work on next.
2. **Add one image per research project** — a simulator frame, a plot, a photo of
   the lander. Text-only reads like a second copy of the CV. Put the file in
   `media/` and paste this just after that project's `<p class="meta">`:

   ```html
   <figure>
     <img src="media/terrain-sim.png" alt="Rover excavating deformable terrain in simulation">
     <figcaption>Coupled MPM soil and rigid-body rover, simulated on GPU.</figcaption>
   </figure>
   ```

3. **Add links** — GitHub, Scholar, a demo video, the paper once it is posted.
   Paste inside the `<p class="contact">` block in the header:

   ```html
   <span class="dot">·</span> <a href="https://github.com/hvnsel">GitHub</a>
   <span class="dot">·</span> <a href="https://scholar.google.com/citations?user=YOURID">Google Scholar</a>
   ```

4. **Keep the CV in sync.** Replace `HanselZhang_CV.pdf` whenever you update it,
   keeping the same filename so the link never breaks.
5. **Update the date** in the footer of `index.html` when you make real changes.

## A note on what is public

Once Pages is enabled, every file on the published branch is fetchable by URL —
including this README at `/README.md`. Nothing here is sensitive, but if you add
notes you would rather not have read, keep them out of this branch.
