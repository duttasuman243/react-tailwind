import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Howrah, West Bengal',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'duttasuman243@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '8777397363',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
			<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2605.0794244672475!2d88.30399376976989!3d22.573916971471583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM0JzI3LjYiTiA4OMKwMTgnMTQuOSJF!5e0!3m2!1sen!2sin!4v1687025924939!5m2!1sen!2sin" width="100%" height="450" style={{border:0,marginLeft:20,marginTOp:20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default ContactDetails;
