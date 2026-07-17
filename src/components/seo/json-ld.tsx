// next/script isn't needed for JSON-LD: it's not executable JS, just a data island
// the crawler reads directly out of the initial HTML.
//
// Escaping "<" is not cosmetic: JSON.stringify does NOT sanitise, so any "</script>"
// inside a value would close this tag early and turn the rest into live markup. Values
// here are no longer all static -- admin-editable DB content reaches this component
// (e.g. the occupation title in the offer page breadcrumb, via /admin/occupations) --
// so the payload is escaped per the Next.js JSON-LD guide. "<" is valid JSON and
// parses back to "<", so crawlers still read the original string.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
