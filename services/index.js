export const shortenLink = async (obj) => {
    const result = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    return result.json();
}
export const signedInShorten = async (obj) => {
    const result = await fetch('/api/signinshorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    return result.json();
}
