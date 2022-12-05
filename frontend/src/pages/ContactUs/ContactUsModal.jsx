import { Wrapper } from './ContactUsModal.style';
import { useNavigate } from 'react-router-dom';
import Sent from './Assets/image46.png';

const ContactUsModal = ({ setShowModal }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		setShowModal(false);
		navigate('/');
	};
	return (
		<Wrapper>
			<div className="modal__content">
				<div className="modal__header">
					<div className="img__container">
						<img src={Sent} alt="" />
					</div>
				</div>
				<div className="modal__body">
					<h1>We have received your request!</h1>
					<p>
						Thank you for sending your request. We will get back to you within 3
						days
					</p>
					<div className="modal__buttons">
						<button onClick={handleClick}>Return Home</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ContactUsModal;
