import SkillCard from './Card';
import skills from '@/components/data/Skills';

const SkillCards = () => {
return(
<section id="skills" className="w-full sm:min-h-[100vh] py-5 px-4 min-h-80 items-center flex flex-col justify-center">
	<div className='max-w-screen-md pb-6 md:pb-20'>
		<h3>
			<span className="highlight">what to use</span><br /> Lorem ipsum for
		</h3>
		<p>
I work as a professional with a deliberate and refined skillset 
across disciplines such as Graphic Design, Commercial Animations,
Illustrations, Web Design, UX/UI, development, SEO and consoluation on the above.
		</p>
	</div>
	<div className='max-w-screen-xl flex flex-col w-full'>
		{
		skills.map(card => (
			<SkillCard
			key={card.id}
			id={card.id}
			img={card.image}
			title={card.title}
			desc={card.description}
			cta={card.cta}/>
			))
		}
		</div>
</section> 
    )
}

export default SkillCards;