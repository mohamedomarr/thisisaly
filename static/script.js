document.addEventListener('DOMContentLoaded', function () {
    const logoSets = [
        {
            logos: document.querySelectorAll('#overview1 .socialProofLogo'),
            infoText: document.getElementById('infoText1'),
            textMap: {
                logoOxford: "Spent a semester abroad at Oxford where I studied Philosophy, Politics & Economics.",
        logoMIT: 'Attended undergrad at MIT studying EE and Management.',
        logo30u30: "Named 30 Under 30 - Consumer Technology list in the United States",
        logoIwc: 'Selected as one of IWC brand voices',
        logoForbes: "Named Arab 30 under 30 by Forbes Middle East",
        mec: "Founded the MIT Entrepreneurship Club (MEC), MIT’s community of entrepreneurial undergraduate engineers.",
            },
            defaultText: 'Touch each logo to learn more'
        },
        {
            logos: document.querySelectorAll('#overview2 .socialProofLogo'),
            infoText: document.getElementById('infoText2'),
            textMap: {
                intel: "Global Finalist in Intel International Science & Engineering Fair 2013",
                EUCYS: "The 25th EU Contest for Young Scientists (EUCYS)",
                Imagine: "Won 2nd Place in World Citizenship Competition. ",
                harvardCup: "Invited speaker to 2017 Arab Conference at Harvard.",
                mitenter: "Won 3rd Place at MIT Enterprise Forum Pan Arab 2014",
                ISWEEEP:"Won gold medal at the International Engineering Olympiad"
            },
            defaultText: 'Touch each logo to learn more'
        }
    ];

    logoSets.forEach(set => {
        set.logos.forEach(logo => {
            logo.addEventListener('mouseover', function () {
                const text = set.textMap[logo.id] || set.defaultText;
                set.infoText.innerHTML = text;
            });

            logo.addEventListener('mouseout', function () {
                set.infoText.innerHTML = set.defaultText;
            });
        });
    });
});
