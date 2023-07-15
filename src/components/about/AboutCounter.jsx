const AboutCounter = () => {
	return (
	  <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<div style={{
			margin:'auto',display: 'block'
		}} className="font-general-medium container mx-auto  block sm:flex sm:justify-between items-center">
		  <div className="education-container">
			<cemter><h2 className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light" style={{
				textAlign:'center',marginBottom:'20px',paddingTop:20
			}}>Education</h2></cemter>
			<ul className="education-list">
			  <li>
				<div>
				  <strong>Calcutta Institute of Engineering and Management, Kolkata</strong>
				  <br />
				  B.Tech in Computer Science Engineering
				</div>
				<div>
				  <span>2018-2022</span>
				  <br />
				  <span>CGPA: 8.58 (out of 10)</span>
				</div>
			  </li>
			  <li>
				<div>
				  <strong>Howrah Vivekananda Institution, Howrah</strong>
				  <br />
				  Higher Secondary
				</div>
				<div>
				  <span>2018</span>
				  <br />
				  {/* <span>Percentage: 52.33</span> */}
				</div>
			  </li>
			  <li>
				<div>
				  <strong>Howrah Vivekananda Institution, Howrah</strong>
				  <br />
				  Secondary
				</div>
				<div>
				  <span>2015</span>
				  <br />
				  {/* <span>Percentage: 69.14</span> */}
				</div>
			  </li>
			</ul>
		  </div>
		</div>
		<style jsx>{`
		  .education-container {
			margin-top: 2rem;
		  }
		  
		  .education-list {
			list-style-type: none;
			padding: 0;
			margin: 0;
			display: flex;
		width:100%;  
		flex-wrap:wrap;
		gap:20px;
		}
		  
		  .education-list li {
			margin-bottom: 1.5rem;
			flex:1;
		  }
		  
		  .education-list div {
			margin-bottom: 0.5rem;
		  }
		  
		  .education-list strong {
			font-weight: bold;
		  }
		  
		  .education-list span {
			display: block;
		  }
		`}</style>
	  </div>
	);
  };
  
  export default AboutCounter;
  