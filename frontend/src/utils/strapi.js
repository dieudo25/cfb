function generateStrapiUrl(url) {
    return `${ process.env.URL }${ url }`;
}

export default generateStrapiUrl;