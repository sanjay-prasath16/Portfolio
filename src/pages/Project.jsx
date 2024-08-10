import Vehicle from '../assets/Vehicle.png';
import backEnd from '../assets/backEnd.png';
import Carousel from '../components/Carousel';
import '../styles/App.css';

const slides = [
  { src: Vehicle, link: 'https://github.com/sanjay-prasath16/Vehicle_Rental_Management_System_For_Tourism' },
  { src: backEnd, link: 'https://github.com/sanjay-prasath16/Munch-Spot' },
  { src: backEnd, link: 'https://github.com/sanjay-prasath16/recipe' }
];

const Project = () => {
  return (
    <div className='section'>
      <h2 className='projectTitle'>Projects</h2>
      <section className="sectionSubtitle">Completed Projects</section>
      <main className='flex items-center justify-center'>
        <div>
          <Carousel slides={slides} />
        </div>
      </main>
    </div>
  );
}

export default Project;