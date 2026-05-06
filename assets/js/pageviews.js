/* ===== Page View Counter ===== */
function initPageViews() {
    const counterEl = document.getElementById('pageviews-count');
    if (!counterEl) return;

    const NAMESPACE = 'academic-homepage';
    const KEY = window.location.hostname || 'local';

    /* Try countapi first, fall back to localStorage */
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.value !== undefined) {
                counterEl.textContent = data.value.toLocaleString();
            }
        })
        .catch(() => {
            /* Fallback: localStorage counter */
            let count = parseInt(localStorage.getItem('pageviews') || '0', 10);
            count += 1;
            localStorage.setItem('pageviews', String(count));
            counterEl.textContent = count.toLocaleString();
        });
}
