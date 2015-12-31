projectsModule.factory('projectFactory', function() {
    var projectOne = {
            name: 'LFI 2.0',
            cover: '/img/screenshots/lfi/1.jpg',
            images: [],
            video: null,
            what: 'An iPad app targeted towards children with autism.',
            when: '2012-2015',
            where: 'Centre for Autism Research, Technology, and Education.',
            who: 'Started as a developer on the tech team, now leading the team getting ready for app release',
            link: 'http://web.uvic.ca/~carte',
            tasks: 'Everything',
            lessons: 'Leadership, iOS Dev',
            tech: 'iOS, objective-c, core data'
                    }
    var projectTwo = {
            name: 'LinkSupp',
            cover: '/img/screenshots/linksupp/1.png',
            images: null,
            video: null,
            what: 'A web app to help people find lunch buddies.',
            when: '2014-2015',
            where: 'Started as a course project, now just a spare-time project.',
            who: 'First in a group of 5 in a course, now collaborating with just two others.',
            link: 'http://www.linksupp.com',
            tasks: 'Backend, etc.',
            lessons: 'Meeting a deadline, javascript',
            tech: 'Javascript, MEAN, AngularJS, MongoDB, NoSQL'
        }
    var projectThree = {
            name: 'JetPackLaserCat',
            cover: '/img/screenshots/jplc/1.jpg',
            images: null

    }
    var projectsList = [projectOne, projectTwo];

    var projectFactory = {};
    projectFactory.getProjectsList = function() {
        return projectsList;
    }
    return projectFactory;
});


/*
Projects:
- Project Name
- Project Images
- Project Dates
- Project Link
- What I did
- What I learned

*/
