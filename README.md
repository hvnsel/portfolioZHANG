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
3. Pick the branch you want to publish and the folder **/ (root)**, then **Save**.
4. Wait ~60 seconds, then reload the Pages settings page. The URL appears at
   the top: **https://hvnsel.github.io/portfolioZHANG/**

Every push to that branch redeploys automatically.

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

Open `index.html` in any text editor. It is commented — each section says what
belongs in it. Change the text, save, then:

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

1. **Rewrite the About paragraph.** It is the only part of the site an
   admissions reader is guaranteed to read, and right now it is my words, not
   yours. Say what you work on and what you want to work on next.
2. **Add one image per research project.** A simulator screenshot, a plot, a
   photo of the lander. Put the file in `media/`, then uncomment the `<figure>`
   block in that project's entry and point it at your file. This is the single
   biggest upgrade available — a wall of text reads like a CV, and they already
   have your CV.
3. **Add links.** GitHub repos, a demo video, the paper once it is posted. There
   is a commented-out block in the header for GitHub and Google Scholar.
4. **Keep the CV in sync.** Replace `HanselZhang_CV.pdf` whenever you update it,
   keeping the same filename so the link never breaks.
