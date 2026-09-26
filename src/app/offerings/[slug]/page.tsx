import OfferingsSlugClient from "./OfferingsSlugClient";

const slugs = [
  "ratha-beedi",
  "kallianpur",
  "kallianpur-historical",
  "barkur",
  "basrur",
  "moodbidri",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default function OfferingSlugPage() {
  return <OfferingsSlugClient />;
}
