const teams = {
    realMadrid: {
        logo: 'c:\Users\Admin\Downloads\завантаження (4).png',
        description: 'Реал Мадрид — один з найбільших клубів світу, заснований в 1902 році. Він виграв численні титули в Іспанії та Європі.'
    },
    chelsea: {
        logo: 'c:\Users\Admin\Downloads\завантаження (6).png',
        description: 'Челсі — англійський футбольний клуб, заснований у 1905 році. Виграв багато титулів, зокрема Лігу чемпіонів.'
    },
    barcelona: {
        logo: 'c:\Users\Admin\Downloads\завантаження (5).png',
        description: 'Барселона — клуб, що з\'явився у 1899 році. Один із найбільших клубів Іспанії та світу з багатьма досягненнями.'
    },
    dynamoKyiv: {
        logo: 'c:\Users\Admin\Downloads\завантаження.jpg',
        description: 'Динамо Київ — один із найбільших футбольних клубів України, заснований у 1927 році. Має численні титули в Україні та Європі.'
    }
};

function showTeamInfo(team) {
    const teamData = teams[team];
    document.getElementById('team-logo').src = teamData.logo;
    document.getElementById('team-description').textContent = teamData.description;
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('team-info').style.display = 'block';
}

function backToMain() {
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('team-info').style.display = 'none';
}
