import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Easy Schedule',
			description:
				'Online scheduling app that makes scheduling, managing, and tracking your appointments as easy as 1-2-3!',
			image: 'screenshot_landing_page.png',
			technologies: [
				'HTML/CSS',
				'Javascript',
				'Node.js',
				'Express',
				'Sequelize',
				'MySQL',
				'Handlebars.js',
				'Passport.js',
				'bcrypt',
				'dotenv',
				'Google Fonts',
				'Heroku'
			],
			github: 'https://github.com/jschults/Project2',
			deployed: 'https://team-project-wk15.herokuapp.com/',
		}
	];
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
			<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
