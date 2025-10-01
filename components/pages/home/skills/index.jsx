import SkillCard from './Card';
import skills from '@/components/data/Skills';

const SkillCards = () => {
return(
<section className="w-full sm:min-h-[100vh] py-5 min-h-80 items-center flex flex-col justify-center">
	<div className='max-w-screen-md pb-6 md:pb-12'>
		<h3>
			<span className="highlight">what to use</span><br /> Lorem ipsum for
		</h3>
		<p>
		Being a graphic designer, involves a lot of specific areas that needs to be mastered, of course it’s expected that you know the theory, can create logos, photomanipulation, illustrations, create layouts and prints and have knowledge about shapes- typography- and color theory, etc. I have worked in a range of areas for years, and have found the fine balance between good practice and flexibility in aesthetics.
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