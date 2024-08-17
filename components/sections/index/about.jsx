// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes Full stack development, application development, operational architecture, systems design, data analyst and public speaking, I am a all-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/profile2.jpg" alt="Abhinav Photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Core strengths that fuel success"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical expertise in software development, I bring strong leadership, time management, and problem-solving skills, honed through my experiences as a team leader and tech enthusiast. My passion for continuous learning and collaboration has guided me through challenging projects and leadership roles. Outside of work, I stay active and energized by engaging in sports like volleyball and chess, fueling my drive to bring innovation and value to every project I tackle."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of development is architecting an entire project. I enjoy the challenge of merging technical strategy with design thinking to craft cohesive and impactful solutions that bring ideas to life."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'computer', 			name: 'Develop Softwares', 	type: 'far' },
	{ key: 'book', 		name: 'Git & Github', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
]