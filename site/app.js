// Renders the page after a short delay, like a client-side app would.
// The workflow passes --wait-for "#app main" so captures never show the empty shell.
const pages = {
    home: `
        <section class="hero wrap">
            <h1>Forecasts that fit in a glance.</h1>
            <p>Driftwood turns weather models into one clear line for the next six hours. No ads, no radar maze.</p>
            <a class="btn" href="pricing.html">See pricing</a>
        </section>
        <section class="grid wrap">
            <div class="card"><h3>Next 6 hours</h3><p>Rain, wind and temperature on one timeline.</p></div>
            <div class="card"><h3>Widgets</h3><p>Lock screen, home screen and menu bar.</p></div>
            <div class="card"><h3>Alerts</h3><p>Only when it changes your plans.</p></div>
        </section>`,
    pricing: `
        <section class="hero wrap">
            <h1>Pricing</h1>
            <p>Free for the forecast. Pay once for the extras.</p>
        </section>
        <section class="grid wrap">
            <div class="card"><h3>Free</h3><div class="price">€0</div><p>6-hour forecast, one location.</p></div>
            <div class="card pick"><h3>Plus</h3><div class="price">€12</div><p>Once. Unlimited locations, widgets and alerts.</p></div>
        </section>`,
};

setTimeout(() => {
    document.getElementById('app').innerHTML = `<main>${pages[document.body.dataset.page]}</main>`;
}, 600);
