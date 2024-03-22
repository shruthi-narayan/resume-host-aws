document.addEventListener('DOMContentLoaded', function () {
    // Placeholder array with employment history data
    const employmentHistory = [
        { id: 1, role: 'Senior Analyst III Software Engineering', company: 'DXC Technology', years: 'Jul 2022 – Feb 2024', description: ' •	Handled and provided support for multiple applications in AT&T.<br/>' +
                    	'•  Performed on-call validation and provided support for user validation during the implementation of multiple projects.<br/>' + 
                        '•  Worked on user requests and ad hoc tasks.<br/>' +
                        '•  Resolved abends/issues when monitoring jobs during on-call production support.<br/>'+ 
                        '•  Performed impact analysis and provided estimates for upcoming projects.<br/>'+
                        '•  Worked with offshore team members and performed code reviews for projects.<br/>'+
                        '•  Coordinated with cross-functional team to analyze and fix production defects.<br/>' +
                        '•  Created detailed design documents, test case documents, and project validation plans.<br/>' +
                        '•  Provided support for validation during the system testing.'                        
                        },
        { id: 2, role: 'Software Engineer', company: 'Danske IT and Support Services India Pvt Ltd', years: 'Mar 2019 - Jul 2020', description: '•	Worked as a developer on a New Basic Property Data System enhancement project in the agile model.</br>'+
        '•	Coding and unit testing were done in COBOL in RDZ and EGL in RBD for the enhancement project.</br>'+
        '•	Performed peer reviews for the enhancement project which were tracked through Jira.</br>'+
        '•	Performed process improvement tasks by creating CRUD methods for database access to improve code maintainability.</br>'+
        '•	Mentored junior developers in our team.</br>' +
        '•	Analyzed and fixed production defects to resolve tickets and improve customer experience.' },
        { id: 3, role: 'Consultant', company: 'Deloitte Consulting India Pvt Ltd', years: 'Apr 2017 - Jan 2018', description: '•	Worked for Anthem as a developer on enhancement projects.</br>'+ 
        '•	Improved existing code base by removing errors using the SonarQube tool for programs modified as part of the enhancement project.</br>'+
        '•	Prepared estimation sheet for new requirements and created requirement traceability matrix.</br>'+
        '•	Created tech response documents and design documents for enhancement projects.</br>'+
        '•	Promoted code changes to production through the CHANGEMAN Package.</br>'+
        '•	Provided production support for the new/enhanced processes post-implementation.</br>'+
        '•	Provided support for preparing test cases to the team for system testing.</br>'+
        '•	Performed requirement analysis for user stories to be selected for the upcoming sprint and performed coding and unit testing in each sprint in the agile model.'},
        { id: 4, role: 'Application Developer', company: 'IBM India Pvt Ltd', years: 'May 2013 - Feb 2017', description: 'Project 1: Billing and Receivable System -HCSC (Health Care Service Corporation) </br>     Sept 2014 - Feb 2017 </br></br>' +                                           
        '•	Worked concurrently on multiple maintenance and enhancement tasks.  </br>' +
        '•	Responsible for preparing and executing unit and system test cases.  </br>' +
        '•	Performed peer reviews and mentored junior developers. </br>' +
        '•	Analyzed user requests and provided solutions within the stipulated time. </br>' +
        '•	Worked on ad-hoc requests to generate monthly cash flow reports. </br>' +
        '•	Provided monthly claim reports formatted using SAS when requested by the user. </br>' +
        '•	Resolved production abends and provided a quick response to resolve issues. </br>' +
        '•	Analyzed the root cause of recurring issues and resolved them proactively.</br>' +
        '•	Groomed team members with business and technical knowledge. </br>' +
        '•	Analyzed and performed impact analysis and provided estimates for new projects. </br>' +
        '•	Track task status daily and assign new user request tasks to team members. </br></br>' +
        'Project 2: Prime Eligibility Project - HCSC (Health Care Service Corporation)    </br>               June 2013 - Aug 2014     </br></br>' +                                                                    
        '•	Involved in translating customer requirements into formal requirements and preparing design documents. </br>' +
        '•	SQL queries were written to extract the data from DB2 Tables.</br>' +
        '•	Prepared and executed unit and system test cases.   </br>' +
        '•	Provided weekly project status and was responsible for the final delivery. </br>' +
        '•	Provided knowledge transition about application flow and business processes to the maintenance team post-implementation. </br>' }
        // Add more entries as needed
    ];

    const timeline = document.getElementById('timeline');

    // Create timeline entries
    employmentHistory.forEach(job => {
        // Entry container for job
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        // header for job
        const header = document.createElement('div');
        header.className = 'entry-header';
        header.innerText = job.company;

        // Content container for job, initially hidden
        const content = document.createElement('div');
        content.className = 'entry-content';
        content.innerHTML = `<strong>Role:</strong> ${job.role}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown) {
                // If it was not shown before, display it
                content.style.display = 'block';
                entry.classList.add('active');
            } // If it was shown, it will be hidden as part of the above loop
        });

        timeline.appendChild(entry);
    });
});