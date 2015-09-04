projectsModule.factory('projectService', function() {
    return {
        getProjectsList: function() {
            var projectOne = {  name: 'LFI 2.0',
                                images: null,
                                dates: '2012-2015',
                                link: 'http://web.uvic.ca/~carte',
                                tasks: 'Everything',
                                lessons: 'Leadership, iOS Dev'  }
            var projectTwo = {  name: 'LinkSupp',
                                images: null,
                                dates: '2014-2015',
                                link: 'http://www.linksupp.com',
                                tasks: 'Backend, etc.',
                                lessons: 'Meeting a deadline, javascript'  }
            return [projectOne, projectTwo];
        }
    }
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
