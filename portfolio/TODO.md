# TODO - Portfolio Enhancements

- [ ] Certificates UI: restyle cards for higher contrast + premium quality (gradient glow/border, improved typography, better spacing)
- [ ] Certificates UI: improve motion (hover micro-interactions + smoother entrance; keep performance)
- [ ] Certificates UI: fix nested `<p>` markup in the subtitle area
- [ ] Academics: update the “Product Management” certificate entry to “Product NBO — Product Manager & AI” (file remains `Product NBO .pdf`)
- [ ] Verify build / run the portfolio and visually confirm the certificate cards in light & dark mode

## Task: Show certificate previews as they are listed

- [ ] Modify `src/components/Certificates.jsx` to embed PDF preview thumbnails in each card using native `<object>` tag
- [ ] Add a Dialog/modal preview for a larger view of each certificate
- [ ] Keep existing card layout (title, issuer, year badge, View Certificate button)
- [ ] Ensure responsive design for preview thumbnails
- [ ] Verify build / run the portfolio and visually confirm the previews

