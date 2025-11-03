// simple slugify for country names (lowercase, remove/replace non-alphanum)
export default function slugify(name = "") {
  return (
    name
      .toString()
      .toLowerCase()
      // replace accented chars with plain ones (basic)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      // replace non-alphanumeric sequences with '-'
      .replace(/[^a-z0-9]+/g, "-")
      // remove leading/trailing hyphens
      .replace(/(^-|-$)/g, "")
  );
}
