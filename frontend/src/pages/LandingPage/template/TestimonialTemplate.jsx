import Styled from 'styled-components';

const TestimonialTemplate = ({ testimonialTemplate }) => {
	return (
		<>
			{testimonialTemplate.map((testimonial) => (
				<TestimonialCard>
					<img
						src={testimonial.image}
						alt={testimonial.title}
						className="place-img"
					/>
					<h2>{testimonial.name}</h2>
					<p>{testimonial.text}</p>
				</TestimonialCard>
			))}
		</>
	);
};

export default TestimonialTemplate;



export const TestimonialCard = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
border: 1px solid #CCD4DE;
box-shadow: 4px 4px 16px rgba(120, 122, 125, 0.15);
border-radius: 8px;
min-width: 256px;
height: 254px;
padding: 20px;
margin: 0 20px;

// img{
    
// }

h2{
    font-weight: 700;
    font-size: 1rem;
    line-height: 50px;
}

p{
    font-weight: 400;
    font-size: 0.8rem;
}

&:hover{
    box-shadow: 0 5px 16px rgb(0 0 0 / 0.2);
}
`;
