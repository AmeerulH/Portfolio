export default async function sitemap() {
  const routes = ["", "/about", "/contact", "/experience", "/portfolio"].map(
    (route) => ({
      url: `https://portfolio-ameerulh.vercel.app/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes];
}
