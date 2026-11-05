# SWING — online bar menu

Live at **https://menu.swingsofia.com** (deployed by Vercel from this repo; every commit to `main` goes live in about a minute).

## Change a price, add or remove an item

Everything on the menu lives in **`menu.js`**. Nothing else needs editing.

1. On GitHub, open `menu.js` and click the pencil (Edit).
2. Find the line, e.g. `{ name: "Negroni", price: 9, desc: "Campari, gin, Carpano Antica. No apologies." },`
3. Change the number, the name or the description. Keep the quotes and the comma at the end of the line.
4. Click **Commit changes**. Vercel republishes within a minute; refresh the site on your phone to confirm.

Field reference:

| Field | What it does | Example |
| --- | --- | --- |
| `name` | Item name | `"Whiskey Sour"` |
| `price` | Number in EUR (decimal point, not comma), or text | `8`, `3.5`, `"25 – 35"` |
| `desc` | Optional italic one-liner | `"Jameson, fresh lemon, sugar."` |
| `pick` | `true` shows the orange "House pick" badge | `pick: true` |

To add an item, copy an existing line and change it. To remove one, delete its line.
To add a whole section, copy a `{ id: ..., title: ..., groups: [...] }` block; `id` must be unique and lowercase.

Also update `updated: "YYYY-MM-DD"` at the top so the footer shows when prices last changed.

If the page shows a red "The menu couldn't load" box, a comma or quote is missing in `menu.js`. Open the file's **History** on GitHub and restore the previous version, or ask Claude to fix it.

## Files

```
index.html   layout, styles and the small script that renders menu.js
menu.js      the menu data — the only file you normally edit
assets/      logo, "Swingin' since '95" script, instruments, grain, QR code, share image
```

## Brand

Burgundy `#660033` · Cream `#FFFCF1` · Orange-red `#F63719`
Barlow Condensed (items, prices) · Fraunces (headings, descriptions) · IBM Plex Mono (labels)

`assets/qr-menu.svg` is the QR code that points to https://menu.swingsofia.com — the same one used on the table stickers.
