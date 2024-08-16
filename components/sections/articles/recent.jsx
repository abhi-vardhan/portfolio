import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Polymath foundations"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I love to work with" 
							copy="With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'git', 	name: 'Git', 			type: 'devicon' },
	{ key: 'github', 	name: 'Github', 			type: 'devicon' },
	{ key: 'androidstudio',	name: 'Android Studio', 		type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'firebase', 		name: 'Firebase', 			type: 'devicon' },
	{ key: 'gear', 		name: 'RestAPI', 			type: 'fas' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'vercel', 	name: 'Vercel', 		type: 'devicon' },
	{ key: 'pycharm', 	name: 'PyCharm', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'tv', 		name: 'PowerBI', 				type: 'fas' },
	{ key: 'docker', 	name: 'Docker', 		type: 'devicon' },
	
	
]

const tech	= [
	{ key: 'c', 	name: 'C/C++', 		type: 'devicon' },
	{ key: 'python', 	name: 'Python', 		type: 'devicon' },
	{ key: 'kotlin', 	name: 'Kotlin', 		type: 'devicon' },
	{ key: 'java', 	name: 'Java', 		type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'github', 			name: 'GitHub', 				type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'firebase', 	name: 'Firebase', 		type: 'devicon' },
	{ key: 'jetpackcompose', 	name: 'Jetpack Compose', 		type: 'devicon' },
	{ key: 'postgresql', 	name: 'Postgresql', 		type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'react', 	name: 'React Native', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'linux', 	name: 'Unix/Linux', 		type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]